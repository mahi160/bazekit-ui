import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Calendar } from './Calendar'

describe('calendar', () => {
  it('renders correctly', () => {
    render(<Calendar />)
    // Add assertions
  })
})