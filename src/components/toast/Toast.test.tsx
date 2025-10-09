import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Toast } from './Toast'

describe('toast', () => {
  it('renders correctly', () => {
    render(<Toast />)
    // Add assertions
  })
})