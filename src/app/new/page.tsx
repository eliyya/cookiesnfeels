import { CreatePost } from "./Preview" 
import { Ingredients } from "./Ingredients"
import { snowflake } from "@/lib/constants"

export default async function NewPage() {
    const createSnowflake = async () => {
        'use server'
        return snowflake.generate().toString()
    }
    return (
        <main className="w-screen h-screen flex">
            <div className="bg-slate-800 p-4 flex-grow-[0.5]">
                <section>
                    <Ingredients createSnowflake={createSnowflake} />
                </section>
            </div>
            <div className="p-4 flex-grow-[0.5]">
                <CreatePost />
            </div>
        </main>
    )
}