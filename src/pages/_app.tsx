import React, { ReactElement } from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import Header from '@/components/header/Header'
import Container from '@/components/common/Container'
import '@/styles/meta.scss'

const App = ({ Component, pageProps }: AppProps): ReactElement => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width,height=device-height"
          key="viewport"
        />
        <meta name="theme-color" content="#087da1" key="themeColor" />
      </Head>
      <Header />
      <main className="root">
        <Container>
          <Component {...pageProps} />
        </Container>
      </main>
    </>
  )
}

export default App
