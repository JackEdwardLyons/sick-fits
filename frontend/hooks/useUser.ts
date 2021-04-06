import { useQuery } from '@apollo/client'
import { AUTHENTICATED_USER_QUERY } from '../queries'

export default function useUser() {
  const { data } = useQuery(AUTHENTICATED_USER_QUERY)
  return data?.authenticatedItem
}
