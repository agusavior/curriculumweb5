import React from 'react'
import { AppProps } from 'next/app'

import '../styles/index.css'
import { LanguageContextProvider } from '@/contexts/LanguajeContext'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <LanguageContextProvider>
            <Component {...pageProps} />
        </LanguageContextProvider>
    )
}

export default MyApp