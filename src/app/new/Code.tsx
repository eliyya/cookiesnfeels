'use client'

import { usePost } from '@/lib/global';
import { Editor } from '@monaco-editor/react';
import { MutableRefObject, useEffect, useRef, useState } from 'react';

export type IStandaloneCodeEditor = Parameters<Exclude<Parameters<typeof Editor>[0]['onMount'], undefined>>[0]

export function Code({id, newLine, focus}:{id:string, newLine():void, focus?:boolean}) {
    const ref = useRef<IStandaloneCodeEditor | null>(null)
    const [value, setValue] = useState('')
    const {modifyStep} = usePost()

    const onChange = (content = '') => {
        if (content.endsWith('\n')) newLine()
        const nc = content.replace(/((\r\n)|\n|\r)/gm,"")
        setValue(nc)
        modifyStep(id, nc)
    }

    useEffect(() => {
        focus && ref.current?.focus()
    }, [focus,ref])

    return (
        <Editor 
            height="100px"
            theme="vs-dark"
            className="m-1"
            language="markdown"
            options={{
                // lineNumbers:'off',
                minimap: { enabled: false },
                scrollbar: { vertical: 'hidden' },
                wordWrap: 'on'
            }}
            value={value}
            onChange={onChange}
            onMount={(editor, monaco) => {
                ref.current = editor;
                if (focus) editor.focus()
            }}
        ></Editor>
    )
}