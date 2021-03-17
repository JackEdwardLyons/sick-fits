import React from 'react'
import { useMutation } from '@apollo/client'
import useForm from '../hooks/useForm'
import FormStyles from './styles/FormStyles'
import { CREATE_PRODUCT_MUTATION } from '../mutations'
import DisplayError from './ErrorMessage'

export default function CreateProduct() {
  const { inputs, handleChange, clearForm, resetForm } = useForm({
    image: '',
    name: 'Nice Shoes',
    price: 34234,
    description: 'These are the best shoes!',
  })
  const [createProduct, { loading, error }] = useMutation(
    CREATE_PRODUCT_MUTATION,
    {
      variables: inputs,
    }
  )
  return (
    <FormStyles
      onSubmit={async (e) => {
        e.preventDefault()
        console.log(inputs)
        // Submit the inputfields to the backend:
        await createProduct()
        clearForm()
      }}
    >
      <DisplayError error={error} />
      <fieldset disabled={loading} aria-busy={loading}>
        <label htmlFor="image">
          Image
          <input
            required
            type="file"
            id="image"
            name="image"
            onChange={handleChange}
          />
        </label>
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
          <button type="submit">+ Add Product</button>
          <button type="button" onClick={() => clearForm()}>
            Clear Form
          </button>
          <button type="button" onClick={() => resetForm()}>
            Reset Form
          </button>
        </div>
      </fieldset>
    </FormStyles>
  )
}
