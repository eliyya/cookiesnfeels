import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import AthButtonClient from "./auth-button-client";
import { error, log } from "console";

export async function AuthButton() {
    const supabase = createServerComponentClient({ cookies })
    const { data: { session } } = await supabase.auth.getSession()
    return <AthButtonClient session={session} />
}
