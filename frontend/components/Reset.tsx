import { useMutation } from '@apollo/client'
import Error from './ErrorMessage'
import useForm from '../hooks/useForm'
import FormStyles from './styles/FormStyles'
import { RESET_PASSWORD_MUTATION } from '../mutations'

export default function Reset({ token }: { token: string }) {
  const { inputs, handleChange, resetForm } = useForm({
    email: '',
    password: '',
    token,
  })

  const [reset, { data, loading, error }] = useMutation(
    RESET_PASSWORD_MUTATION,
    {
      variables: inputs,
    }
  )

  const successfulError = data?.redeemUserPasswordResetToken?.code
    ? data?.redeemUserPasswordResetToken
    : undefined

  async function handleSubmit(e) {
    e.preventDefault() // stop the form from submitting
    const res = await reset().catch(console.error)
    console.log({ res, data, loading, error })
    resetForm()
    // Send the email and password to the graphqlAPI
  }

  return (
    <FormStyles method="POST" onSubmit={handleSubmit}>
      <h2>Request a Password Reset</h2>
      <Error error={error || successfulError} />

      <fieldset>
        {data && data.redeemUserPasswordToken !== null && (
          <p>Success! Check your email for a reset link!</p>
        )}

        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
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
        <button type="submit">Request Reset!</button>
      </fieldset>
    </FormStyles>
  )
}
