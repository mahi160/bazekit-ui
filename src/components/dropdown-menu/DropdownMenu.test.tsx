import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { DropdownMenu } from './DropdownMenu'

describe('dropdown-menu', () => {
  it('renders correctly', () => {
    render(<DropdownMenu />)
    // Add assertions
  })
})