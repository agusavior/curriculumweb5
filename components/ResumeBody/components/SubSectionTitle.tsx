import React from 'react'

type SectionSubTitleProps = {
    title: string,
}

export default function({ title }: SectionSubTitleProps) {
    return (
        <>
        <p className="text-xl pb-4">
        <i className={`fa fa-plus-square fa-fw w3-margin-right text-xl text-primary`}>
        </i>
            {title}
        </p>
        </>
    )
}
  