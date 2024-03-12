import {createRouteHandlerClient} from '@supabase/auth-helpers-nextjs'
import { url } from 'inspector'
import { cookies } from 'next/headers'
import { type NextRequest ,NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest){

    const code = request.nextUrl.searchParams.get('code')
    if (code) {
        const supabe = createRouteHandlerClient({cookies})
        await supabe.auth.exchangeCodeForSession(code)
    }

    return NextResponse.redirect(new URL('/',request.url))


}