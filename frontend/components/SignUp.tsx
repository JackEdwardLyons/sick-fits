import { useMutation } from '@apollo/client'
import Router from 'next/router'
import React from 'react'
import useForm from '../hooks/useForm'
import { SIGNIN_MUTATION, SIGNUP_MUTATION } from '../mutations'
import { AUTHENTICATED_USER_QUERY } from '../queries'
import DisplayError from './ErrorMessage'
import { FormStyles } from './styles/FormStyles'

const SignUp: React.FC = () => {
  const { inputs, handleChange, clearForm } = useForm({
    email: '',
    name: '',
    password: '',
  })
  const [signUp, { data, loading, error }] = useMutation(SIGNUP_MUTATION, {
    variables: inputs,
    refetchQueries: [{ query: AUTHENTICATED_USER_QUERY }],
  })

  const [signIn, { data: signInData }] = useMutation(SIGNIN_MUTATION, {
    variables: inputs,
    refetchQueries: [{ query: AUTHENTICATED_USER_QUERY }],
  })

  const signinError =
    signInData?.authenticateUserWithPassword?.code === 'FAILURE'

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!inputs.email || !inputs.password || !inputs.name) return

    await signUp().then((result) => {
      setTimeout(() => {
        if (result.data.createUser.id) {
          clearForm()

          signIn({
            variables: {
              email: inputs.email,
              password: inputs.password,
            },
          })

          Router.push({ pathname: `/` })
        }
      }, 1000)
    })
  }

  return (
    <FormStyles method="POST" onSubmit={handleSubmit} aria-busy={loading}>
      {error && <DisplayError error={error} />}
      {signinError && <DisplayError error={error} />}

      {data?.createUser && <p>User created successfully. Signing you in...</p>}

      <h2>Sign up to create your account</h2>
      <fieldset>
        <label htmlFor="name">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            autoComplete="name"
            value={inputs.name}
            onChange={handleChange}
          />
        </label>
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

      <button type="submit">Sign up</button>
    </FormStyles>
  )
}

export default SignUp
