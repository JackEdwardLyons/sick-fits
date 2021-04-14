import { useMutation } from '@apollo/client'
import Router from 'next/router'
import React from 'react'
import useForm from '../hooks/useForm'
import { SIGNIN_MUTATION } from '../mutations'
import { AUTHENTICATED_USER_QUERY } from '../queries'
import DisplayError from './ErrorMessage'
import { FormStyles } from './styles/FormStyles'

const SignIn: React.FC = () => {
  const { inputs, handleChange, clearForm } = useForm({
    email: '',
    password: '',
  })
  const [signIn, { data, loading }] = useMutation(SIGNIN_MUTATION, {
    variables: inputs,
    refetchQueries: [{ query: AUTHENTICATED_USER_QUERY }],
  })
  const signinError = data?.authenticateUserWithPassword?.code === 'FAILURE'

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!inputs.email || !inputs.password) return

    await signIn().then((result) => {
      if (result.data.authenticateUserWithPassword.item) {
        clearForm()
        Router.push({
          pathname: `/`,
        })
      }
    })
  }

  return (
    <FormStyles method="POST" onSubmit={handleSubmit} aria-busy={loading}>
      {signinError && (
        <DisplayError error={data.authenticateUserWithPassword} />
      )}

      <h2>Sign in to your account</h2>
      <fieldset>
        <label htmlFor="email">
          <input
            type="email"
            name="email"
            placeholder="Your email address"
            autoComplete="email"
            value={inputs.email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            name="password"
            placeholder="Your password"
            autoComplete="password"
            value={inputs.password}
            onChange={handleChange}
          />
        </label>
      </fieldset>

      <button type="submit">Sign in</button>
    </FormStyles>
  )
}

export default SignIn
