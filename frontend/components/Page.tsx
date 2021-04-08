import styled, { createGlobalStyle } from 'styled-components'
import Header from './Header'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'radnika_next';
    src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  :root {
    --red: hsl(0, 100%, 50%);
    --darkRed: hsl(0, 100%, calc(50% - 20%));
    --black: #393939;
    --grey: #3A3A3A;
    --gray: var(--grey);
    --lightGrey: #e1e1e1;
    --lightGray: var(---lightGrey);
    --offWhite: #ededed;
    --maxWidth: 1000px;
    --bs: 0 12px 24px 0 rgba(0,0,0,0.09);
    --fontStack: 'radnika_next', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    font-family: var(--fontStack);
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height:2;
  }
  
  a {
    text-decoration: none;
    color: var(---black);
  }
  
  a:hover {
    text-decoration: underline;
  }

  button {
    font-family: var(--fontStack);
    cursor: pointer;
  }
`

const InnerStyles = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 2rem;
`

const Page = ({ children }: { children: any }) => (
  <main>
    <GlobalStyles />
    <Header />
    <InnerStyles>{children}</InnerStyles>
  </main>
)

export default Page
