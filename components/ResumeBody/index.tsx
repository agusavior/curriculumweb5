import { useLanguageContext } from '@/contexts/LanguajeContext'
import { INTER_STRING } from 'utils/strings'
import AptitudesList from './components/AptitudesList'
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

export default function(props: any) {
  const { lng } = useLanguageContext()

  const personalComponent = (
    <div className='text-xs mr-4 inline font-mono rounded p-1 bg-purple-300'>
      { lng.personal }
    </div>
  )

  const prototypeComponent = (
    <div className='text-xs mr-4 inline font-mono rounded p-1 bg-pink-300'>
      { lng.prototype }
    </div>
  )

  const billableComponent = (
    <div className='text-xs mr-4 inline font-mono rounded p-1 bg-green-300'>
      { lng.billable }
    </div>
  )

  const currentComponent = (
    <div className='text-xs mr-4 inline font-mono rounded p-1 bg-yellow-300'>
      { lng.current }
    </div>
  )

  return (
    <div {...props}>
      <div className='p-4'>
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
          <H2>
            {lng.project_tmob_title}  
          </H2>
          { currentComponent }
          { billableComponent }
          <br/><br/>
          <TextWithButton>
            <p>{lng.project_tmob_body}</p>
            <YoutubeButton url='https://youtu.be/kW26LYynfwc'/>
          </TextWithButton>
          <br/>
          <AptitudesList aptitudes={INTER_STRING.project_tmob_apts} />
          <br/>
          <br/>
          <H2>
            {lng.project_tgeo_title}  
          </H2>
          { currentComponent }
          { billableComponent }
          <br/><br/>
          <p>{lng.project_tgeo_body}</p>
          <br/>
          <AptitudesList aptitudes={INTER_STRING.project1_tec} />
          <br/>
          <br/>
          <H2>
            {lng.project_curriculumweb5_title}  
          </H2>
          { personalComponent }
          <br/><br/>
          <TextWithButton>
            <p>{lng.project_curriculumweb5_body}</p>
            <GitHubButton url='https://github.com/agusavior/curriculumweb5'/>
          </TextWithButton>
          <br/>
          <AptitudesList aptitudes={INTER_STRING.project_curriculumweb5_apts} />
          <br/>
          <br/>
          <H2>
            {lng.project_ips_prototype_title}  
          </H2>
          { prototypeComponent }
          <br/><br/>
          <TextWithButton>
            <p>{lng.project_ips_prototype_body}</p>
            <YoutubeButton url='https://youtu.be/8b4pavgy24U'/>
          </TextWithButton>
          <br/>
          <AptitudesList aptitudes={INTER_STRING.project_ips_prototype_apts} />
          <br/>
          <br/>
          <H2>
            {lng.project_quickvorcio_title}  
          </H2>
          { billableComponent }
          <br/><br/>
          <p>{lng.project_quickvorcio_body}</p>
          <br/>
          <AptitudesList aptitudes={INTER_STRING.project_quickvorcio_apts} />
          <br/>
          <br/>
          <H2>
            {lng.project_tengoque_title}  
          </H2>
          { personalComponent }
          <br/><br/>
          <TextWithButton>
            <p>{lng.project_tengoque_body}</p>
            <GitHubButton url='https://github.com/agusavior/tengoquebot'/>
          </TextWithButton>
          <br/>
          <AptitudesList aptitudes={INTER_STRING.project_tengoque_apts} />
          <br/>
          <br/>
          <H2>
            {lng.project_traingular_arbitraje_title}  
          </H2>
          <br/><br/>
          <p>{lng.project_traingular_arbitraje_body}</p>
          <br/>
          <AptitudesList aptitudes={INTER_STRING.project_traingular_arbitraje_apts} />
          <br/>
          <br/>
          <H2>
            {lng.project_kocoin_crawler_title}  
          </H2>
          { billableComponent }
          <br/><br/>
          <p>{lng.project_kocoin_crawler_body}</p>
          <br/>
          <AptitudesList aptitudes={INTER_STRING.project_kocoin_crawler_apts} />
          <br/>
          <br/>
          <H2>
            {lng.project_matitest_title}  
          </H2>
          { prototypeComponent }
          <br/><br/>
          <TextWithButton>
            <p>{lng.project_matitest_body}</p>
            <GitHubButton url='https://github.com/agusavior/matitest'/>
          </TextWithButton>
          <br/>
          <AptitudesList aptitudes={INTER_STRING.project_matitest_apts} />
          <br/>
          <br/>
          <H2>
            {lng.project_abochat_title}  
          </H2>
          { billableComponent }
          <br/><br/>
          <p>{lng.project_abochat_body}</p>
          <br/>
          <AptitudesList aptitudes={INTER_STRING.project_abochat_apts} />
          <br/>
          <br/>
          <H2>
            {lng.project_dragon_debate_title}  
          </H2>
          { personalComponent }
          <br/><br/>
          <TextWithButton>
            <p>{lng.project_dragon_debate_body}</p>
            <GitHubButton url='https://github.com/agusavior/dragon_debate'/>
          </TextWithButton>
          <br/>
          <AptitudesList aptitudes={INTER_STRING.project_dragon_debate_apts} />
          <br/>

        </Section>

        <Section title={lng.education} icon='fa-university'>

          <H2>
            {lng.education_subsection1_title}  
          </H2>
          <br/><br/>
          <p>{lng.eduaction_subsection1_body}</p>
          <br/>

          <H2>
            {lng.education_subsection2_title}  
          </H2>
          <br/><br/>
          <p>{lng.eduaction_subsection2_body}</p>
          <br/>
        </Section>
      </div>
  </div>
    
  )
}