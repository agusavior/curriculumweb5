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
        className='bg-github rounded p-2'
        >
          <p className='text-white'>
          <i className="fab fa-github pr-2">

          </i>
          {lng.open_repository}
          </p>
        </button>
    )
}
  