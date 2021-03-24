import UpdateProduct from '../components/UpdateProduct'
import { SingleProductProps } from '../types/product-types'

export default function UpdatePage({ query }: SingleProductProps) {
  return (
    <div>
      <UpdateProduct id={query.id} />
    </div>
  )
}
