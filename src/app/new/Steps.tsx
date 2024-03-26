'use client'

import { usePost } from "@/lib/global"
import { Code } from "./Code";


export function Steps(props: { createSnowflake: () => Promise<string> }) {
    const {steps, setSteps} = usePost()

    const createStep = () => props
        .createSnowflake()
        .then(id => setSteps([
            ...steps.map(s => ({...s,focus:false})), 
            { id, content: '', pos: (Math.max(0,...steps.map(s => s.pos)))+1, focus: true }
        ]))
    
    const deleteStep = (id: string) => () => setSteps(steps.filter(s => s.id !== id))

    return (
        <ul>
            {
                steps.map(step => (
                    <li key={step.id} className="flex align-middle" >
                        <i>*</i>
                        <Code id={step.id} newLine={createStep} focus={!!step.focus} />
                        <button onClick={deleteStep(step.id)}>X</button>
                    </li>
                ))
            }
            <li><button onClick={createStep} >+ New Step</button></li>
        </ul>
    )   
}