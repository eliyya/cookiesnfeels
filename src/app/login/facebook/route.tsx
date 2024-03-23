import prisma from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server"
import { SignJWT } from 'jose'
import { COOKIES_NAME, JWT_SECRET, snowflake } from "@/lib/constants"


export async function GET(req: NextRequest) {
    const code = req.nextUrl.searchParams.get('code')
    if (!code) return NextResponse.redirect(new URL(`https://www.facebook.com/v13.0/dialog/oauth?client_id=${process.env.NEXT_FACEBOOK_APP_ID}&redirect_uri=${process.env.NEXT_FACEBOOK_REDIRECT_URL}&scope=email%20public_profile`))

    const acces = await fetch(`https://graph.facebook.com/v13.0/oauth/access_token?client_id=${process.env.NEXT_FACEBOOK_APP_ID}&client_secret=${process.env.NEXT_FACEBOOK_CLIENT_SECRET}&code=${code}&redirect_uri=${process.env.NEXT_FACEBOOK_REDIRECT_URL}`)
        .then(res => res.json() as Promise<{
            access_token:string
            token_type:string
            expires_in:number
        }>)
        
    const facebook_user = await fetch(`https://graph.facebook.com/v13.0/me?access_token=${acces.access_token}&fields=id,name,email,picture`)
        .then(res => res.json() as Promise<{
            id:string,
            name:string,
            email:string,
            picture:{
                data:{
                    height:number,
                    is_silhouette:boolean,
                    url:string,
                    width:number
                }
            }
        
        }>)

    let register = await prisma.register.findFirst({
        where: {
            facebook_connection_id: facebook_user.id
        },
        include: {
            facebook_connection: true,
            user: true
        }
    })
    if (!register) register = await prisma.register.create({
        data: {
            id: snowflake.generate().toString(),
            user: {
                connect: await prisma.user.create({
                    data: {
                        id: snowflake.generate().toString(),
                        picture: facebook_user.picture.data.url,
                        username: facebook_user.name.replace(/ /g, '_')
                    },
                    select: {
                        id: true
                    }
                })
            },
            facebook_connection: {
                connect: await prisma.facebook_connection.create({
                    data: {
                        email: facebook_user.email,
                        id: facebook_user.id,
                        name: facebook_user.name,
                        picture: facebook_user.picture.data.url,
                    },
                    select: {
                        id: true
                    }
                })
            }
        },
        include: {
            facebook_connection: true,
            user: true
        }
    })

    const expires = new Date()
    expires.setDate(expires.getDate() + 1)

    const redirection = NextResponse.redirect(new URL('/', req.nextUrl))
    redirection.cookies.set({
        name: COOKIES_NAME.session,
        expires,
        value: await new SignJWT(register)
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('1d')
        .sign(JWT_SECRET)
    })
    
    return redirection
}