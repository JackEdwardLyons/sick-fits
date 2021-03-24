import Head from 'next/head'
import Image from 'next/image'
import { useQuery } from '@apollo/client'
import styled from 'styled-components'
import { SINGLE_PRODUCT_QUERY } from '../queries'
import DisplayError from './ErrorMessage'

const ProductStyles = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  max-width: var(--maxWidth);
  justify-content: center;
  align-items: top;
  gap: 2rem;

  img {
    width: 100%;
    object-fit: contain;
  }
`

const SingleProduct = ({ id }: { id: string }) => {
  const { error, loading, data } = useQuery(SINGLE_PRODUCT_QUERY, {
    variables: {
      id,
    },
  })

  if (loading) return <p>Loading ...</p>
  if (error) return <DisplayError error={error} />
  const { Product } = data

  return (
    <ProductStyles>
      <Head>
        <title>Sick Fits | {Product.name}</title>
      </Head>
      <ProductStyles>
        <Head>
          <title>Sick Fits | {Product.name}</title>
        </Head>
        {Product?.photo && (
          <Image
            src={Product.photo.image.publicUrlTransformed}
            alt={Product.name}
            height={800}
            width={1000}
            layout="responsive"
          />
        )}
        <div className="details">
          <h2>{Product.name}</h2>
          <p>{Product.description}</p>
        </div>
      </ProductStyles>
    </ProductStyles>
  )
}

export default SingleProduct
