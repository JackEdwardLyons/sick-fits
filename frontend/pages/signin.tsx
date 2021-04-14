import React from 'react'
import styled from 'styled-components'
import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'

const GridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));
  grid-gap: 2rem;
`

const SignInPage: React.FC = () => (
  <GridStyles>
    <SignIn />
    <SignUp />
  </GridStyles>
)

export default SignInPage
