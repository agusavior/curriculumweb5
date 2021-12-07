import SocialItem from './components/SocialItem';
import SocialIcon from './components/SocialIcon';
import LanguageBar from './components/LanguageBar';
import PLanguageBar from './components/PLanguageBar';
import { useLanguageContext } from '@/contexts/LanguajeContext';
import LanguageSelector from '../LanguageSelector';
import ContactForm from './components/ContactForm';
import { useState } from 'react';

function ResumeProfileSection(props: any) {
  const [ showMoreLenguages, setShowMoreLenguages ] = useState(false)
  const { lng } = useLanguageContext()

  return (
    <div {...props}>

      <LanguageSelector/>

      <hr/>

      <div className="p-4 flex justify-center">
        <div className="max-w-xs">
          <img className="rounded-full shadow border-black" alt="Picture" src='/agus.jpg' />
          <p className="pt-4 text-xl font-semibold text-center" >Agustín Javier Orlando </p>
        </div>
      </div>
      
      <div className='min-w-max'>
        <SocialItem image='fa fa-birthday-cake' value={`26 ${lng.years_old}`} />
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
          {lng.languages}
        </p>
        
        <div className="pt-2 pb-2 min-w-max">
          <LanguageBar name={lng.spanish} percent={100}/>
          <LanguageBar name={lng.english} percent={80}/>
          {/*
          <LanguageBar name={lng.german} percent={0}/>
          */}
        </div>

        <div className="w3-light-grey w3-round-xlarge">
          <div className="w3-round-xlarge w3-teal"></div>
        </div>
        
        <div className="w3-light-grey w3-round-xlarge">
          <div className="w3-round-xlarge w3-teal"></div>
        </div>
        <br/>

        <p className="text-2xl pt-8 min-w-max">
          <i className="fa fa-code fa-fw w3-margin-right text-2xl text-primary">
          </i>
          {lng.programming}
        </p>

        <div className="pt-2 pb-2 min-w-max">

          <PLanguageBar name="Python" percent={100}/>
          <PLanguageBar name="Kotlin" percent={100}/>
          <PLanguageBar name="Typescript" percent={100}/>
          <PLanguageBar name="Java" percent={98}/>
          <PLanguageBar name="Javascript" percent={93}/>
          <PLanguageBar name="Dart" percent={80}/>
          <div className={showMoreLenguages? "" : "hidden"}>
            <PLanguageBar name="Go" percent={50}/>
            <PLanguageBar name="PHP" percent={50}/>
            <PLanguageBar name="C#" percent={85}/>
            <PLanguageBar name="C++" percent={20}/>
            <PLanguageBar name="C" percent={50}/>
            <PLanguageBar name="CSS" percent={50}/>
            <PLanguageBar name="HTML" percent={80}/>
            <PLanguageBar name="Haskell" percent={68}/>
            <PLanguageBar name="Julia" percent={70}/>
            <PLanguageBar name="OCaml" percent={50}/>
            <PLanguageBar name="Lua" percent={100}/>
            <PLanguageBar name="MQL4" percent={80}/>
            <PLanguageBar name="GML" percent={100}/>
          </div>
          <p
          className="text-center underline
          hover:bg-gray-100 mt-2
          cursor-pointer py-4 text-primary-dark"
          onClick={() => setShowMoreLenguages(!showMoreLenguages)}
          >
            {showMoreLenguages? lng.show_less : lng.show_more}
          </p>

        </div>

        <p className="text-2xl pt-4 min-w-max">
          <i className="fa fa-paper-plane fa-fw w3-margin-right text-2xl text-primary">
          </i>
          {lng.contact_me}
        </p>

        <br/>
        
        <ContactForm/>
        
        <div className="text-center opacity-50 text-2xl">
          <SocialIcon image='fab fa-facebook' url='https://www.facebook.com/agustin.j.orlando'/>
          <SocialIcon image='fab fa-instagram' url='https://www.instagram.com/agusavior/'/>
          <SocialIcon image='fab fa-linkedin' url='https://www.linkedin.com/in/agustín-orlando'/>
        </div>
      </div>
  </div>
  )
}

export default ResumeProfileSection;
