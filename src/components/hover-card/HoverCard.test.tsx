import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { HoverCard } from './HoverCard'

describe('hover-card', () => {
  it('renders correctly', () => {
    render(<HoverCard />)
    // Add assertions
  })
})