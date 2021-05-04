import React, { ReactNode } from 'react'

type SectionProps = {
    title: string,
    icon: string,
    children?: ReactNode
}
  
const Section = function({title, icon, children}: SectionProps) {
    return (
        <>
        <h1 className="text-3xl pb-4 text-primary uppercase font-bold">
            <i className={`fa ${icon} fa-fw w3-margin-right w3-xlarge text-primary`}></i>
            {title}
        </h1>
        {children}
        <div className='pb-8'/>
        </>
    )
}

export default Section;
