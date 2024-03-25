'use client'

import { usePost } from "@/lib/global"
import { Code } from "./Code";


export function Steps(props: { createSnowflake: () => Promise<string> }) {
    const {steps, setSteps} = usePost()

    const createStep = () => props.createSnowflake().then(id => setSteps([...steps.map(s => ({...s,focus:false})), { id, content: '', pos: (Math.max(0,...steps.map(s => s.pos)))+1, focus: true }]))
    
    const deleteStep = (id: string) => () => setSteps(steps.filter(s => s.id !== id))

    return (
        <ul>
            {
                steps.map(step => (
                    <li key={step.id} className="flex align-middle" >
                        <i>*</i>
                        <Code id={step.id} newLine={createStep} focus={!!step.focus} />
                        {/* <textarea 
                            value={step.content} 
                            onChange={onChange(step.id)}
                            className="bg-transparent flex-grow rounded-md border-gray-500 focus:outline-none border p-1 m-1" 
                        /> */}
                        <button onClick={deleteStep(step.id)}>X</button>
                    </li>
                ))
            }
            <li><button onClick={createStep} >+ New Step</button></li>
        </ul>
    )   
}