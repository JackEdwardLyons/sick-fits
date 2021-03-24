import { useMutation, useQuery } from '@apollo/client'
import useForm from '../hooks/useForm'
import { SINGLE_PRODUCT_QUERY } from '../queries'
import { UPDATE_PRODUCT_MUTATION } from '../mutations'
import DisplayError from './ErrorMessage'
import FormStyles from './styles/FormStyles'

export default function UpdateProduct({ id }: { id: string }) {
  // 1. We need to get the existing product
  const { data, error, loading } = useQuery(SINGLE_PRODUCT_QUERY, {
    variables: { id },
  })

  // 2. We need to get the mutation to update the product
  const [updateProduct, { loading: updateLoading }] = useMutation(
    UPDATE_PRODUCT_MUTATION
  )

  // 2.5 Create some state for the form inputs:
  const { inputs, handleChange, clearForm, resetForm } = useForm({
    name: data?.Product.name,
    description: data?.Product.description,
    price: data?.Product.price,
  })

  if (loading) return <p>loading...</p>
  // 3. We need the form to handle the updates

  return (
    <div>
      <FormStyles
        onSubmit={async (e) => {
          e.preventDefault()

          const res = await updateProduct({
            variables: {
              id,
              name: inputs.name,
              description: inputs.description,
              price: inputs.price,
            },
          }).catch(console.error)
          console.log(res)

          // TODO: Handle Error!!!
          // const res = await createProduct();
          // clearForm();
          // // Go to that product's page!
          // Router.push({
          //   pathname: `/product/${res.data.createProduct.id}`,
          // });
        }}
      >
        <DisplayError error={error} />
        <fieldset disabled={updateLoading} aria-busy={updateLoading}>
          <label htmlFor="name">
            Name
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={inputs.name}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="price">
            Price
            <input
              type="number"
              id="price"
              name="price"
              placeholder="price"
              value={inputs.price}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="description">
            Description
            <textarea
              id="description"
              name="description"
              placeholder="Description"
              value={inputs.description}
              onChange={handleChange}
            />
          </label>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <button type="submit">Update Product</button>
            <button type="button" onClick={() => clearForm()}>
              Clear Form
            </button>
            <button type="button" onClick={() => resetForm()}>
              Reset Form
            </button>
          </div>
        </fieldset>
      </FormStyles>
    </div>
  )
}
