import React from 'react'
import { useMutation } from '@apollo/client'
import Router from 'next/router'
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
    CREATE_PRODUCT_MUTATION
  )

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Submit the inputfields to the backend:
    const response = await createProduct({
      variables: inputs,
    })

    console.log(response)
    clearForm()

    Router.push({
      pathname: `/product/${response.data.createProduct.id}`,
    })
  }

  return (
    <FormStyles onSubmit={(e) => onSubmit(e)}>
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
