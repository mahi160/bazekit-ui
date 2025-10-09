import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Popover } from './Popover'

describe('popover', () => {
  it('renders correctly', () => {
    render(<Popover />)
    // Add assertions
  })
})