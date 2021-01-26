import { useLanguageContext } from '@/contexts/LanguajeContext'
import React, { ReactNode } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'

type Props = {
    url: string,
}
  
export default function({ url }: Props) {
    const { lng } = useLanguageContext()

    return (
        <button
        onClick={() => window.open(url)}
        className='bg-youtube rounded p-2'
        >
          <p className='text-white'>
          <i className="fab fa-youtube pr-2">

          </i>
          {lng.watch_it_on_youtube}
          </p>
        </button>
    )
}
  