import React, { ReactNode } from 'react'

type SubSectionProps = {
    title: string,
    children?: ReactNode
}
  
export default function({title, children}: SubSectionProps) {
    return (
        <>
        <p className="text-xl pb-4 font-semibold">
        <i className={`hidden fa fa-plus-square fa-fw w3-margin-right text-xl text-primary`}>
        </i>
            {title}
        </p>
        {children}
        <br/>
        </>
    )
}
  