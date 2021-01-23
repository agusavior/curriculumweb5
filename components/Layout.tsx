import React, { ReactNode } from 'react'
import Head from 'next/head'
import { LanguageContextProvider } from '@/contexts/LanguajeContext'
import Header from './Header'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato"/>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
    </Head>
    <Header/>
    {children}

    {/**
         <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
     */}

  </div>
)

export default Layout
