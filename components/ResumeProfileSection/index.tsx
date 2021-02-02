import SocialItem from './components/SocialItem';
import SocialIcon from './components/SocialIcon';
import SkillBar from './components/SkillBar';
import { useLanguageContext } from '@/contexts/LanguajeContext';

function ResumeProfileSection(props: any) {

  const { lng } = useLanguageContext()

  return (
   
    <div {...props}>

    <div className="p-4 flex justify-center">
      <div className="max-w-xs">
        <img className="rounded-full border-2 border-black" alt="Picture" src='/agus.png' />
        <p className="pt-4 text-xl font-semibold text-center" >Agustín Javier Orlando </p>
      </div>
    </div>
    
    <div className='min-w-max'>
      <SocialItem image='fa fa-birthday-cake' value='25 years old' />
      <SocialItem image='fa fa-home' value='Córdoba - Argentina' />
      <SocialItem image='fa fa-envelope' value='agusavior@gmail.com' />
      <SocialItem image='fa fa-phone' value='+5493512442259' />
      <SocialItem image='fab fa-telegram' value='@agusavior' />
      <SocialItem image='fab fa-whatsapp' value='+5493512442259' />
      <SocialItem image='fa fa-passport' value={lng.citizenship} />
    </div>

    <div>
      <p className="text-2xl pt-8">
        <i className="fa fa-globe fa-fw w3-margin-right text-2xl text-primary">
        </i>
        Languages
      </p>
      
      <div className="pt-2 pb-2">

        <SkillBar name="Spanish" percent={100}/>
        <SkillBar name="English" percent={80}/>
        <SkillBar name="German" percent={15}/>

      </div>
      
      <div className="w3-container w3-padding-16 w3-center w3-opacity w3-xlarge">
        <SocialIcon image='fa-facebook-official'/>
        <SocialIcon image='fa-instagram'/>
        <SocialIcon image='fa-twitter'/>
        <SocialIcon image='fa-linkedin'/>
      </div>

      <div className="w3-light-grey w3-round-xlarge">
        <div className="w3-round-xlarge w3-teal"></div>
      </div>
      
      <div className="w3-light-grey w3-round-xlarge">
        <div className="w3-round-xlarge w3-teal"></div>
      </div>
      <br/>
    </div>
  </div>
  )
}

export default ResumeProfileSection;
