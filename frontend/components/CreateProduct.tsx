import React from 'react'
import useForm from '../hooks/useForm'
import FormStyles from './styles/FormStyles'

export default function CreateProduct() {
  const { inputs, handleChange, clearForm, resetForm } = useForm({
    name: 'Nice shoes',
    price: 1234,
    description: 'These are nice shoes',
  })

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault()

    console.log(inputs)
  }

  return (
    <FormStyles onSubmit={handleSubmit}>
      <fieldset>
        <label htmlFor="image">
          Image
          <input
            type="file"
            id="image"
            name="image"
            onChange={(event) => handleChange(event)}
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
            onChange={(event) => handleChange(event)}
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
            onChange={(event) => handleChange(event)}
          />
        </label>

        <label htmlFor="description">
          Description
          <textarea
            id="description"
            name="description"
            placeholder="description"
            value={inputs.description}
            onChange={(event) => handleChange(event)}
          />
        </label>

        <button type="submit">+ Add Product</button>

        <button type="button" onClick={() => clearForm()}>
          Clear form
        </button>

        <button type="button" onClick={() => resetForm()}>
          Reset form
        </button>
      </fieldset>
    </FormStyles>
  )
}
