'use client'

import { usePost } from "@/lib/global"
import { ChangeEvent, MouseEvent } from "react"

export function Ingredients(props: { createSnowflake: () => Promise<string> }) {
    const { ingredients, setIngredients } = usePost()

    const createIngredient = (e: MouseEvent<HTMLButtonElement>) => {
        props.createSnowflake().then(id => {
            setIngredients([...ingredients, { id, name: '' }])
        })
    }

    const onChange = (id: string) => (e: ChangeEvent<HTMLInputElement>) => {
        setIngredients(ingredients.map(i => i.id === id ? { ...i, name: e.target.value } : i))
    }

    const deleteIngredient = (id: string) => () => setIngredients(ingredients.filter(i => i.id !== id))

    return (
        <>
            <label>Ingredients</label>
            <ul suppressHydrationWarning >
                {ingredients.map(i => {
                    return (
                        <li key={i.id} className="flex align-middle focus:outline-none" >
                            <i>*</i>
                            <input type="text" className="m-1 bg-transparent border-b" value={i.name} onChange={onChange(i.id)} />
                            <button onClick={deleteIngredient(i.id)}>x</button>
                        </li>
                    )
                })}
                <li><button onClick={createIngredient} >new ingredient</button></li>
            </ul>
        </>
    )
}