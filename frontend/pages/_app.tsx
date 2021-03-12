import type { AppProps /* , AppContext */ } from 'next/app'
import { ApolloProvider, ApolloClient } from '@apollo/client'
import useRouteProgressBar from '../hooks/useRouteProgressBar'
import Page from '../components/Page'
import withData from '../lib/withData'
import '../components/styles/nprogress.css'

function MyApp({
  Component,
  pageProps,
  apollo,
}: AppProps & { apollo: ApolloClient<any> }) {
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
MyApp.getInitialProps = async ({ Component, context }) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  if (Component.getInitialProps) {
    const appProps = await Component.getInitialProps(context)
    appProps.query = context.query

    return { ...appProps }
  }
}

export default withData(MyApp)
