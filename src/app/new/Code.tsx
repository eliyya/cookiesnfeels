'use client'

import { usePost } from '@/lib/global';
import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';
import { useState } from 'react';

export function Code({id}:{id:string}) {
    const [value, setValue] = useState('')
    const {modifyStep} = usePost()

    const onChange = (content = '') => {
        const nc = content.replace(/((\r\n)|\n|\r)/gm,"")
        setValue(nc)
        modifyStep(id, nc)
    }

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
        ></Editor>
    )
}