import { Snowflake } from '@sapphire/snowflake'

export const COOKIES_NAME = {
    session: 'session',
} as const

export const STORAGES_NAME = {
    post: 'post',
} as const

export const JWT_SECRET = new TextEncoder().encode(process.env.NEXT_JWT_SECRET!)
export const snowflake = new Snowflake(new Date(process.env.NEXT_SNOWFLAKE_DATE??'2024-03-06'))