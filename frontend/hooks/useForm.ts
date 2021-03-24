import React, { useEffect, useState } from 'react'

type FormValueType = { value: any; name: string; type: string }

/**
 * Simple hook to update state in a form
 *
 * @param initial
 * @returns { handleChange, inputs }
 */
export default function useForm(initial = {}) {
  const [inputs, setInputs] = useState<{ [key: string]: any }>(initial)
  const initialValues = Object.values(initial).join('')

  useEffect(() => {
    setInputs(initial)
  }, [initialValues])

  function handleChange(event: React.ChangeEvent<any>): void {
    let { value, name, type }: FormValueType = event.target

    if (type === 'number') {
      value = parseInt(value)
    }

    if (type === 'file') {
      // eslint-disable-next-line prefer-destructuring
      value = event.target.files[0]
    }

    setInputs({
      ...inputs,
      [name]: value,
    })
  }

  function resetForm() {
    setInputs(initial)
  }

  function clearForm() {
    const blankState = Object.fromEntries(
      // eslint-disable-next-line no-unused-vars
      Object.entries(inputs).map(([key, value]: [string, any]) => [key, ''])
    )

    setInputs(blankState)
  }

  console.log({
    inputs,
  })

  return {
    handleChange,
    clearForm,
    resetForm,
    inputs,
  }
}
