import React, { ReactNode } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'

type SectionProps = {
    title: string,
    icon: string,
    children?: ReactNode
}
  
export default function({title, icon, children}: SectionProps) {
    return (
        <>
        <p className="text-3xl pb-4">
        <i className={`fa ${icon} fa-fw w3-margin-right w3-xxlarge text-primary`}></i>
            {title}
        </p>
        {children}
        <div className='pb-8'/>
        </>
    )
}
  