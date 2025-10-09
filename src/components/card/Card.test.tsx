import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Card } from './Card'

describe('card', () => {
  it('renders correctly', () => {
    render(<Card />)
    // Add assertions
  })
})