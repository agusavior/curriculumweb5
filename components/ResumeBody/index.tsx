import { useLanguageContext } from '@/contexts/LanguajeContext'
import { experiences } from '@/models/experience'
import { useState } from 'react'
import { INTER_STRING } from 'utils/strings'
import AptitudesList from './components/AptitudesList'
import Experience from './components/ExperienceComponent'
import GitHubButton from './components/GitHubButton'
import Section from './components/Section'
import YoutubeButton from './components/YoutubeButton'

function H2({ children }: any ) {
  return <p className="text-xl font-semibold inline mr-4">
    { children }  
  </p>
}

function TextWithButton({ children }: any ) {
  return <div className='md:flex flex-row justify-between'>
    <p>{children[0]}</p>
      <div className='flex-none'>
        {children[1]}
      </div>
    </div>
}

const Index = function(props: any) {
  const { lng } = useLanguageContext()
  
  return (
    <div {...props}>
      
      <div className='p-4 pt-8'>
        <Section title={lng.summary} icon='fa-address-card'>
          <br/>
          <blockquote className="text-lg font-sans">
            <p className="text-xl font-italic">
            {lng.summary_body}
            </p>
          </blockquote>
          <br/>
        </Section>

        <Section title={lng.experience} icon='fa-suitcase'>
          <br/>
          {experiences.map((e, index) =>
            <Experience experience={e} key={index} />
          )}
        </Section>

        <Section title={lng.education} icon='fa-university'>
          <br/>
          <h3 className="my-2 font-bold text-xl text-primary-dark uppercase mb-6">{lng.education_subsection1_title}</h3>
          <p>{lng.eduaction_subsection1_body}</p>
          <br/>
          <h3 className="my-2 font-bold text-xl text-primary-dark uppercase mb-6">{lng.education_subsection2_title}</h3>
          <p>{lng.eduaction_subsection2_body}</p>
          <br/>
        </Section>
      </div>
  </div>
    
  )
}

export default Index;