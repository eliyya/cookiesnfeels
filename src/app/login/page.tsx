import Link from "next/link";

export default function PageLogin() {
    return (
        <main className="h-screen w-screen flex justify-center items-center">
            <Link href={`https://www.facebook.com/v13.0/dialog/oauth?client_id=${process.env.NEXT_FACEBOOK_APP_ID}&redirect_uri=${process.env.NEXT_FACEBOOK_REDIRECT_URL}&scope=public_profile`}>
                login with facebook
            </Link>
        </main>
    )
}