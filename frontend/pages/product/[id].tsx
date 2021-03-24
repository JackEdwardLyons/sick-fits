import SingleProduct from '../../components/SingleProduct'
import { SingleProductProps } from '../../types/product-types'

const SingleProductPage = ({ query }: SingleProductProps) => (
  <SingleProduct id={query.id} />
)

export default SingleProductPage
