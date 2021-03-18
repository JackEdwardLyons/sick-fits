import { useQuery } from '@apollo/client'
import Product from './Product'
import { SINGLE_PRODUCT_QUERY } from '../queries'
import DisplayError from './ErrorMessage'

const SingleProduct = ({ id }: { id: string }) => {
  const { error, loading, data } = useQuery(SINGLE_PRODUCT_QUERY, {
    variables: {
      id,
    },
  })

  if (loading) return <p>Loading ...</p>
  if (error) return <DisplayError error={error} />

  return <Product product={data.Product} />
}

export default SingleProduct
