import Head from 'next/head'
import Link from 'next/link'
import { useQuery } from '@apollo/client'
import { PRODUCT_COUNT_QUERY } from '../queries'
import DisplayError from './ErrorMessage'
import PaginationStyles from './styles/PaginationStyles'
import { perPage } from '../config'

function Pagination({ page }: { page: number }) {
  const { error, loading, data } = useQuery(PRODUCT_COUNT_QUERY)
  const count = data?._allProductsMeta?.count
  const pageCount = Math.ceil(count / perPage)
  console.log({ count, pageCount, perPage })

  if (loading) return <p>Loading...</p>
  if (error) return <DisplayError error={error} />

  return (
    <PaginationStyles>
      <Head>
        <title>
          Sick Fits - Page {page} of {pageCount}
        </title>
      </Head>
      <Link href={`/products/${page - 1}`}>
        <a aria-disabled={page <= 1}>&larr; Prev</a>
      </Link>

      <p>
        Page {page} of {pageCount}
      </p>
      {count > 0 && <p>{count} Items total</p>}
      {count === 0 && <p>{count} There are no items to display</p>}

      <Link href={`/products/${page + 1}`}>
        <a aria-disabled={page >= pageCount}>Next &rarr;</a>
      </Link>
    </PaginationStyles>
  )
}

export default Pagination
