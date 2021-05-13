import { useMutation } from '@apollo/client'
import Error from './ErrorMessage'
import useForm from '../hooks/useForm'
import FormStyles from './styles/FormStyles'
import { REQUEST_PASSWORD_RESET_MUTATION } from '../mutations'

export default function RequestReset() {
  const { inputs, handleChange, resetForm } = useForm({
    email: '',
  })
  const [signup, { data, loading, error }] = useMutation(
    REQUEST_PASSWORD_RESET_MUTATION,
    {
      variables: inputs,
    }
  )
  async function handleSubmit(e) {
    e.preventDefault() // stop the form from submitting
    const res = await signup().catch(console.error)
    console.log({ res, data, loading, error })
    resetForm()
    // Send the email and password to the graphqlAPI
  }
  return (
    <FormStyles method="POST" onSubmit={handleSubmit}>
      <h2>Request a Password Reset</h2>
      <Error error={error} />
      <fieldset>
        {data?.sendUserPasswordResetLink !== null ? (
          <p>Success! Check your email for a link!</p>
        ) : (
          <p>Oops. That email does not exist.</p>
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
        <button type="submit">Request Reset!</button>
      </fieldset>
    </FormStyles>
  )
}
