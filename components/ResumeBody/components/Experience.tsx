import { useLanguageContext } from '@/contexts/LanguajeContext'
import { Experience } from '@/models/experience'
import React, { useState } from 'react'

type ExperienceProps = {
    experience: Experience
}
  
export default function({ experience }: ExperienceProps) {
    const { lng } = useLanguageContext()
    const [ expanded, setExpanded ] = useState(false)

    return (
      <div className="flex flex-row gap-4 my-8">
        <div className="flex-none">
          <p className="font-mono">{experience.initDate}</p>
          <p className="font-mono">{experience.finishDate}</p>
        </div>
        <div>
        <span className="font-bold">{lng[experience.jobTitle]}</span>
          <span
          className="underline
          hover:bg-gray-100
          cursor-pointer text-primary-dark"
          onClick={() => setExpanded(!expanded)}
          >
            {expanded? lng.show_less : lng.show_more}
          </span>
          
          <p className="">{lng[experience.title]}</p>
          <p className="">{lng[experience.body]}</p>
              
        </div>
      </div>
    )
}
