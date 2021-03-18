import React from 'react'
import type { AppProps /* , AppContext */ } from 'next/app'
import { ApolloProvider, ApolloClient } from '@apollo/client'
import useRouteProgressBar from '../hooks/useRouteProgressBar'
import Page from '../components/Page'
import withData from '../lib/withData'
import '../components/styles/nprogress.css'

interface Props {
  apollo: ApolloClient<{}>
}

function MyApp({ Component, pageProps, apollo }: AppProps & Props) {
  useRouteProgressBar()

  return (
    <ApolloProvider client={apollo}>
      <Page>
        <Component {...pageProps} />
      </Page>
    </ApolloProvider>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
MyApp.getInitialProps = async function ({ Component, ctx }) {
  let pageProps = {}
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }

  pageProps.query = ctx.query
  return { pageProps }
}

export default withData(MyApp)
