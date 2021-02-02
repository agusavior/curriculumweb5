import { useLanguageContext } from '@/contexts/LanguajeContext'
import React from 'react'

type Props = {
    url: string,
}
  
export default function({ url }: Props) {
    const { lng } = useLanguageContext()

    return (
        <button
        onClick={() => window.open(url)}
        className='bg-youtube rounded p-2 mt-4 md:mt-0 md:ml-4'
        >
          <p className='text-white'>
          <i className="fab fa-youtube pr-2">

          </i>
          {lng.watch_it_on_youtube}
          </p>
        </button>
    )
}
  