import { useLanguageContext } from '@/contexts/LanguajeContext'
import LanguageSelector from '../LanguageSelector'
import Section from './components/Section'
import SubSection from './components/SubSection'
import SubSectionTitle from './components/SubSectionTitle'

export default function(props: any) {
  const { lng } = useLanguageContext()

  return (
    <div {...props}>
      <div className='p-4'>
        <Section title={lng.summary} icon='fa-address-card'>
          <blockquote className="text-lg font-semibold">
            <p className="text-lg font-semibold">
            {lng.summary_body}
            </p>
          </blockquote>
        </Section>

        <Section title={lng.work_experience} icon='fa-suitcase'>
          <SubSection title={lng.project1_title}>
            <p>
              {lng.project1_body}
            </p>
          </SubSection>
          <SubSection title={lng.project2_title}>
            <p>
              {lng.project2_body}
            </p>
          </SubSection>
          <SubSection title={lng.project3_title}>
            <p>
              {lng.project3_body}
            </p>
          </SubSection>
          <SubSection title={lng.project4_title}>
            <p>
              {lng.project4_body}
            </p>
          </SubSection>
        </Section>

        <Section title={lng.education} icon='fa-university'>
        <SubSection title={lng.education_subsection1_title}>
            <p>
              {lng.eduaction_subsection1_body}
            </p>
          </SubSection>
          <SubSection title={lng.education_subsection2_title}>
            <p>
              {lng.eduaction_subsection2_body}
            </p>
          </SubSection>
        </Section>


        <div>
        </div>

      </div>
  </div>
    
  )
}