import { FC } from 'react'
import Document, { Html, Head, NextScript, Main } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  /**
   * getInitialProps enables server-side rendering in a page and allows you to do
   * initial data population, it means sending the page with the data already
   * populated from the server. This is especially useful for SEO. This fn is
   * not called during client-side transitions.
   *
   * @param renderPage A callback that runs the actual React rendering logic (synchronously).
   *                   It's useful to decorate this function to support SSR wrappers.
   */
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage((App: FC) => (props) =>
      sheet.collectStyles(<App {...props} />)
    )
    const styleTags = sheet.getStyleElement()

    return {
      ...page,
      styleTags,
    }
  }

  render() {
    return (
      <Html lang="en-GB">
        <Head />

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
