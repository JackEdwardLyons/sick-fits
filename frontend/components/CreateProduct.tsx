import useForm from '../hooks/useForm'

export default function CreateProduct() {
  const { inputs, handleChange, clearForm, resetForm } = useForm({
    name: 'Nice shoes',
    price: 1234,
    description: 'These are nice shoes',
  })

  return (
    <form>
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

      <label htmlFor="description">
        Description
        <input
          type="text"
          id="description"
          name="description"
          placeholder="description"
          value={inputs.description}
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

      <button type="button" onClick={() => clearForm()}>
        Clear form
      </button>

      <button type="button" onClick={() => resetForm()}>
        Reset form
      </button>
    </form>
  )
}
