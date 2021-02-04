import { useLanguageContext } from '@/contexts/LanguajeContext';
import axios from 'axios';
import { FormEvent, useState } from 'react';



export default function() {
  let [ email, setEmail ] = useState('')
  let [ body, setBody ] = useState('')

  let { lng } = useLanguageContext()

  function sendMessageToTelegramBot(message: string) {
    axios
    .get('https://api.telegram.org/bot597694514:AAGDy3PdVIjAGt9y2R481TewijUObGxXvpU/sendmessage?chat_id=43759228&text=' + encodeURIComponent(message))
    .then(_ => console.log('Done!'))
    .catch(err => console.log(err));
  }

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setBody('')
    setEmail('')
    if (email !== '' || body !== '') {
      sendMessageToTelegramBot(email + '\n' + body)
    }
  }

  return (
    <form
    className='flex flex-col content-center'
    onSubmit={submit}
    >
    <label>
      <p>{ lng.contact_me_description }</p>
      <br/>
      <span className="text-gray-700">{ lng.your_contact }</span>
      <input
        type="email"
        className="mt-1 w-full p-2 mt-4 block appearance-none placeholder-blue-300 border border-gray-400 rounded-md w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-blue-200"
        placeholder="john@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br/>
      </label>
      <label>
      <span className="text-gray-700">{ lng.some_optional_message }</span>
      <textarea
        className="mt-1 w-full p-2 mt-4 block appearance-none placeholder-blue-300 border border-gray-400 rounded-md w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-blue-200"
        placeholder={lng.contact_me_body_placeholder}
        style={{resize: 'none'}}
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      </label>
      <br/>
      <button className='bg-primary text-white text-xl active:bg-primary-light rounded p-2 mt-4'> 
        { lng.send }
      </button>
      <br/>
    </form>
  )
}
