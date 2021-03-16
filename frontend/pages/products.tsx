import { useQuery } from '@apollo/client'
import styled from 'styled-components'
import Product from '../components/Product'
import { ALL_PRODUCTS_QUERY } from '../queries'

const ProductsListStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`

function ProductsPage() {
  const { loading, data, error } = useQuery(ALL_PRODUCTS_QUERY)

  if (loading) return <p>Loading ...</p>
  if (error) return <p>Error: {error.message}</p>

  console.log({
    loading,
    error,
    data,
  })

  return (
    <div>
      <ProductsListStyles>
        {data.allProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ProductsListStyles>
    </div>
  )
}

export default ProductsPage
