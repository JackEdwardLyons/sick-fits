import { useMutation } from '@apollo/client'
import { FC } from 'react'
import { DELETE_PRODUCT_MUTATION } from '../mutations'

type DeleteProductProps = { id: string; children: any }

const DeleteProduct: FC<DeleteProductProps> = ({
  id,
  children,
}: DeleteProductProps) => {
  const [deleteProduct, { loading }] = useMutation(DELETE_PRODUCT_MUTATION, {
    variables: {
      id,
    },
    update(cache, payload) {
      cache.evict(cache.identify(payload.data.deleteProduct))
    },
  })

  return (
    <button
      type="button"
      disabled={loading}
      onClick={() => {
        // eslint-disable-next-line no-restricted-globals
        if (confirm('Are you sure you want to delete?')) {
          // delete the item once confirmed ...
          deleteProduct().catch((error: Error) => {
            alert(error.message)
          })
        }
      }}
    >
      {children}
    </button>
  )
}

export default DeleteProduct
