import { useLanguageContext } from '@/contexts/LanguajeContext'
import { INTER_STRING } from 'utils/strings'
import AptitudesList from './components/AptitudesList'
import GitHubButton from './components/GitHubButton'
import Section from './components/Section'
import SubSection from './components/SubSection'
import YoutubeButton from './components/YoutubeButton'

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

        <Section title={lng.experience} icon='fa-suitcase'>
          <SubSection title={lng.project_tmob_title}>
            <div className='flex flex-row justify-between'>
              <p className='pr-4'>{lng.project_tmob_body}</p>
              <div className='flex-none'>
                <YoutubeButton url='https://youtu.be/kW26LYynfwc'/>
              </div>
            </div>
            <br/>
            <AptitudesList aptitudes={INTER_STRING.project1_tec} />
          </SubSection>

          <SubSection title={lng.project_tgeo_title}>
            <p>
              {lng.project_tgeo_body}
            </p>
            <br/>
            <AptitudesList aptitudes={INTER_STRING.project1_tec} />
          </SubSection>
          
          <SubSection title={lng.project_curriculumweb5_title}>
            <div className='flex flex-row justify-between'>
              <p className='pr-4'>{lng.project_curriculumweb5_body}</p>
              <div className='flex-none'>
                <GitHubButton url='https://github.com/agusavior/curriculumweb5'/>
              </div>
            </div>
            <br/>
            <AptitudesList aptitudes={INTER_STRING.project_curriculumweb5_apts} />
          </SubSection>

          <SubSection title={lng.project_matitest_title}>
            <div className='flex flex-row justify-between'>
              <p className='pr-4'>{lng.project_matitest_body}</p>
              <div className='flex-none'>
                <GitHubButton url='https://github.com/agusavior/matitest'/>
              </div>
            </div>
            <br/>
            <AptitudesList aptitudes={INTER_STRING.project_matitest_apts} />
          </SubSection>

          <SubSection title={lng.project_ips_prototype_title}>
            <div className='flex flex-row justify-between'>
              <p className='pr-4'>{lng.project_ips_prototype_body}</p>
              <div className='flex-none'>
                <YoutubeButton url='https://youtu.be/8b4pavgy24U'/>
              </div>
            </div>
            <br/>
            <AptitudesList aptitudes={INTER_STRING.project_ips_prototype_apts} />
          </SubSection>

          <SubSection title={lng.project_quickvorcio_title}>
            <p>
              {lng.project_quickvorcio_body}
            </p>
            <br/>
            <AptitudesList aptitudes={INTER_STRING.project_quickvorcio_apts} />
          </SubSection>

          <SubSection title={lng.project_tengoque_title}>
            <div className='flex flex-row justify-between'>
              <p className='pr-4'>{lng.project_tengoque_body}</p>
              <div className='flex-none'>
                <GitHubButton url='https://github.com/agusavior/tengoquebot'/>
              </div>
            </div>
            <br/>
            <AptitudesList aptitudes={INTER_STRING.project_tengoque_apts} />
          </SubSection>

          <SubSection title={lng.project_kocoin_crawler_title}>
            <p>
              {lng.project_kocoin_crawler_body}
            </p>
            <br/>
            <AptitudesList aptitudes={INTER_STRING.project_kocoin_crawler_apts} />
          </SubSection>

          <SubSection title={lng.project_traingular_arbitraje_title}>
            <p>
              {lng.project_traingular_arbitraje_body}
            </p>
            <br/>
            <AptitudesList aptitudes={INTER_STRING.project_traingular_arbitraje_apts} />
          </SubSection>

          <SubSection title={lng.project_abochat_title}>
            <p>
              {lng.project_abochat_body}
            </p>
            <br/>
            <AptitudesList aptitudes={INTER_STRING.project_abochat_apts} />
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