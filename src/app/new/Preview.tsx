'use client'

import './markdown.css'
import { usePost } from "@/lib/global";
import Markdown from "react-markdown";
import { useEffect, useState } from "react";

export function CreatePost() {
    const {ingredients,steps} = usePost()
    const [content,setContent] = useState('')

    useEffect(() => {
        setContent(`## Ingredients

${ingredients.map((ingredient) => `- ${ingredient.name}`).join('\n')}


## Steps

${steps.sort((a,b) => a.pos - b.pos).map((step) => `${step.pos}. ${step.content}`).join('\n')}`)
    }, [ingredients, steps, setContent])

    return <Markdown className="markdown-body">{content}</Markdown>
}