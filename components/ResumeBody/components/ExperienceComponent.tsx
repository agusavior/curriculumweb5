import { useLanguageContext } from '@/contexts/LanguajeContext'
import { Experience } from '@/models/experience'
import React from 'react'
import Project from './ProjectComponent'

type ExperienceProps = {
    experience: Experience
}
  
const ExperienceComponent = function({ experience }: ExperienceProps) {
    const { lng } = useLanguageContext()

    return (
      <div className="flex flex-col">
        <h3 className="my-2 font-bold text-xl text-primary-dark uppercase mb-6">{lng[experience.title]}</h3>
        <div className="flex flex-row gap-4">
          <div className="flex-none flex flex-col">
            <p className="font-mono">{experience.finishDate}</p>
            <p className="font-mono mt-auto">{experience.initDate}</p>
          </div>
          <div className="flex-grow">
              {
                  experience.projects.map((e, i) => 
                      <Project index={i} key={i} project={e} />
                  )
              } 
          </div>
        </div>
        <br/>
      </div>
    )
}

export default ExperienceComponent;