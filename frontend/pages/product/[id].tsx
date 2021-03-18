import SingleProduct from '../../components/SingleProduct'

type SingleProductProps = {
  query: {
    id: string
  }
}

const SingleProductPage = ({ query }: SingleProductProps) => (
  <SingleProduct id={query.id} />
)

export default SingleProductPage
