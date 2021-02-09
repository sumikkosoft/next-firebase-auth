import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { RecoilRoot } from 'recoil'
import '../libs/firebase'
import '../styles/meta.scss'

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width,height=device-height" key="viewport" />
      <meta name="theme-color" content="#087da1" key="themeColor" />
    </Head>
    <RecoilRoot>
      <main className="root">
        <Component {...pageProps} />
      </main>
    </RecoilRoot>
  </>
)

export default App
