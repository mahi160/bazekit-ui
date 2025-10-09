import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Collapsible } from './Collapsible'

describe('collapsible', () => {
  it('renders correctly', () => {
    render(<Collapsible />)
    // Add assertions
  })
})