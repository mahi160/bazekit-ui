import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Command } from './Command'

describe('command', () => {
  it('renders correctly', () => {
    render(<Command />)
    // Add assertions
  })
})