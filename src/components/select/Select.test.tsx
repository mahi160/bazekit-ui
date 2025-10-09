import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Select } from './Select'

describe('select', () => {
  it('renders with options array', () => {
    render(
      <Select
        options={[
          { value: 'option1', label: 'Option 1' },
          { value: 'option2', label: 'Option 2' },
        ]}
      />,
    )

    const select = screen.getByRole('combobox')
    expect(select).toBeDefined()

    const options = screen.getAllByRole('option')
    expect(options).toHaveLength(2)
    expect(options[0].textContent).toBe('Option 1')
    expect(options[1].textContent).toBe('Option 2')
  })

  it('renders with children', () => {
    render(
      <Select>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
      </Select>,
    )

    const options = screen.getAllByRole('option')
    expect(options).toHaveLength(2)
  })

  it('can be disabled', () => {
    render(
      <Select
        disabled
        options={[
          { value: 'option1', label: 'Option 1' },
        ]}
      />,
    )
  })
})
