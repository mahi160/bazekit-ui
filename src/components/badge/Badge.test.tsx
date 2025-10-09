import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Badge } from './Badge'

describe('badge', () => {
  it('renders correctly', () => {
    render(<Badge />)
    // Add assertions
  })
})