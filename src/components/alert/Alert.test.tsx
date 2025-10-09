import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Alert } from './Alert'

describe('alert', () => {
  it('renders correctly', () => {
    render(<Alert />)
    // Add assertions
  })
})