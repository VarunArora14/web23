import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Component, ReactElement } from 'react'
import { NextComponentType } from 'next'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
