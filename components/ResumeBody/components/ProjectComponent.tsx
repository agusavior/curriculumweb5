
import { useLanguageContext } from '@/contexts/LanguajeContext'
import { Project, Tag } from '@/models/project'
import React, { useState } from 'react'
import GitHubButton from './GitHubButton'
import YoutubeButton from './YoutubeButton'

type ProjectProps = {
    project: Project
    index: number
}

function TextWithButton({ children }: any ) {
    return <div className='md:flex flex-row justify-between'>
        {children[0]}
        <div className='flex-none'>
          {children[1]}
        </div>
      </div>
  }
  

function TagComponent({ tag }: { tag: Tag }) {
    const { lng } = useLanguageContext()
    return <div className={'text-xs mr-4 inline font-mono rounded p-1 ' + tag.tailwindColor}>
      { lng[tag.name] }
    </div>
}

function AptitudeComponent({ aptitudeName }: { aptitudeName: string }) {
    return <div className='text-xs mr-4 inline font-mono rounded p-1 bg-gray-200'>
      { aptitudeName }
    </div>
}

const ProjectComponent = function({ project, index }: ProjectProps) {
    const { lng } = useLanguageContext()
    const [ expanded, setExpanded ] = useState(false)



    return (
        <div className="flex flex-row gap-4">
            <div className={`w-1 flex-none my-1
            ${((index % 2)===0) ? 'bg-primary-light' : 'bg-gray-400'}
            `}>
            </div>

            <div className="flex-1">
                <div className="flex flex-col">
                    <div className="flex flex-row">
                        <h4 className="py-2 font-semibold">
                            {lng[project.title]}
                        </h4>
                        <button
                        className="focus:outline-custom text-left ml-4 pl-4
                        hover:underline whitespace-nowrap"
                        onClick={() => setExpanded(!expanded)}
                        >
                        
                            <span
                            className='select-none
                            cursor-pointer text-primary-dark'
                            onClick={() => setExpanded(!expanded)}
                            >        
                            {expanded? lng.show_less : lng.show_more}
                            </span>
                            <i
                            className={`fas fa-angle-right transform px-4
                            ${expanded? 'rotate-90': ''}
                            text-primary transition-transform duration-100`}
                            />
                        </button>
                    </div>

                    { expanded && <div>
                    <TextWithButton>
                        <p className="">{lng[project.body]}</p>
                        <div>
                            { project.githubUrl && <GitHubButton url={project.githubUrl}/> }
                            { project.youtubeUrl && <YoutubeButton url={project.youtubeUrl}/> }
                        </div>
                    </TextWithButton>
                            
                    </div>}
                    <div className="relative flex flex-row flex-wrap gap-2 my-2 items-center">
                        <div
                        className={`absolute bg-gradient-to-l 
                        ${expanded? 'hidden' : ''}
                        from-white w-full h-full`}
                        />
                        { project.tags.map((e, i) => 
                            <TagComponent key={i} tag={e} />
                        ) }
                        { project.aptitudes.map((e, i) => 
                            <AptitudeComponent key={i} aptitudeName={e} />
                        ) }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectComponent;