import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Input } from './Input'

describe('input', () => {
  it('renders correctly', () => {
    render(<Input />)
    // Add assertions
  })
})