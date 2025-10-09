import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Menubar } from './Menubar'

describe('menubar', () => {
  it('renders correctly', () => {
    render(<Menubar />)
    // Add assertions
  })
})