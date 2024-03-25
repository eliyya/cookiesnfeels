import { Steps } from "./Steps"
import { Preview } from "./Preview" 
import { Ingredients } from "./Ingredients"
import { snowflake } from "@/lib/constants"

export default async function NewPage() {
    const createSnowflake = async () => {
        'use server'
        return snowflake.generate().toString()
    }
    return (
        <main className="w-screen h-screen grid grid-cols-2">
            <div className="p-4">
                <section>
                    <h2>Ingredients</h2>
                    <Ingredients createSnowflake={createSnowflake} />
                </section>
                <section>
                    <h2>Steps</h2>
                    <Steps createSnowflake={createSnowflake} />
                </section>
            </div>
            <Preview className="p-4" />
        </main>
    )
}