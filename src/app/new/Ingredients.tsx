'use client'

import { usePost } from "@/lib/global"
import { ChangeEvent } from "react"

export function Ingredients(props: { createSnowflake: () => Promise<string> }) {
    const { ingredients, setIngredients } = usePost()

    const createIngredient = () => props.createSnowflake().then(id => setIngredients([...ingredients, { id, name: '' }]))

    const onChange = (id: string) => (e: ChangeEvent<HTMLInputElement>) => setIngredients(ingredients.map(i => i.id === id ? { ...i, name: e.target.value } : i))

    const deleteIngredient = (id: string) => () => setIngredients(ingredients.filter(i => i.id !== id))

    return (
        <ul suppressHydrationWarning className="w-full" >
            {ingredients.map(i => {
                return (
                    <li key={i.id} className="flex align-middle" >
                        <i>*</i>
                        <input
                            type="text"
                            onKeyUp={e => e.key === 'Enter' && createIngredient()}
                            className="m-1 bg-transparent focus:outline-none border-b"
                            value={i.name}
                            onChange={onChange(i.id)}
                        />
                        <button onClick={deleteIngredient(i.id)}>x</button>
                    </li>
                )
            })}
            <li><button onClick={createIngredient} >+ New Ingredient</button></li>
        </ul>
    )
}