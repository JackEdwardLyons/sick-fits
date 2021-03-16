import React, { useState } from 'react'

type FormValueType = { value: any; name: string; type: string }

/**
 * Simple hook to update state in a form
 *
 * @param initial
 * @returns { handleChange, inputs }
 */
export default function useForm(initial = {}) {
  const [inputs, setInputs] = useState<{ [key: string]: any }>(initial)

  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    let { value, name, type }: FormValueType = event.target

    if (type === 'number') {
      value = parseInt(value)
    }

    if (type === 'file') {
      value[0] = event.target.files
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
