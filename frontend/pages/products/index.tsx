import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import Pagination from '../../components/Pagination'
import Product from '../../components/Products'
import { ProductsListStyles } from '../../components/styles/ProductListStyles'
import { perPage } from '../../config'
import { ALL_PRODUCTS_QUERY } from '../../queries'

function ProductsPage() {
  const { query } = useRouter()
  const page = Number(query.page) || 1

  const { loading, data, error } = useQuery(ALL_PRODUCTS_QUERY, {
    variables: {
      first: perPage,
      skip: page * perPage - perPage,
    },
  })

  if (loading) return <p>Loading ...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <div>
      <Pagination page={page} />
      <ProductsListStyles>
        {data.allProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ProductsListStyles>
      <Pagination page={page} />
    </div>
  )
}

export default ProductsPage
