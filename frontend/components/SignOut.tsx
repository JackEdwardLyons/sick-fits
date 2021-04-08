import React from 'react'
import { useMutation } from '@apollo/client'
import { SIGNOUT_MUTATION } from '../mutations'
import { AUTHENTICATED_USER_QUERY } from '../queries'

function SignOut() {
  const [signOut] = useMutation(SIGNOUT_MUTATION, {
    refetchQueries: [{ query: AUTHENTICATED_USER_QUERY }],
  })

  return (
    <button type="button" onClick={() => signOut()}>
      Sign out
    </button>
  )
}

export default SignOut
