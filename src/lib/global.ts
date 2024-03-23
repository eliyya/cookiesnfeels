import { create } from 'zustand'
import { STORAGES_NAME } from './constants'

type SnowflakeId = string

type Ingredient = {
    id: SnowflakeId
    name: string
}

type Step = {
    pos:number
    id:SnowflakeId
    content:string
}


type Store = {
    ingredients: Ingredient[]
    setIngredients: (ingredients: Ingredient[]) => void
    steps: Step[]
    setSteps: (steps: Step[]) => void
}

export const usePost = create<Store>((set) => ({
    ingredients: (()=>{
        let p = {ingredients:[]} as {ingredients:Ingredient[]}
        try {
            p = JSON.parse(window.localStorage.getItem(STORAGES_NAME.post)??'{}')
        } catch {}
        return p.ingredients??[]
    })(),
    steps: (()=>{
        let p = {steps:[]} as {steps:Step[]}
        try {
            p = JSON.parse(window.localStorage.getItem(STORAGES_NAME.post)??'{}')
        } catch {}
        return p.steps??[]
    })(),
    setIngredients: (ingredients) => set(() => {
        window.localStorage.setItem(STORAGES_NAME.post, JSON.stringify({ ingredients }))
        return { ingredients }
    }),
    setSteps: (steps) => set(() => {
        window.localStorage.setItem(STORAGES_NAME.post, JSON.stringify({ steps }))
        return { steps }
    })
}))