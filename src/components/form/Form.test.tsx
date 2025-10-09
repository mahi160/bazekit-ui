import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Form } from './Form'

describe('form', () => {
  it('renders correctly', () => {
    render(<Form />)
    // Add assertions
  })
})