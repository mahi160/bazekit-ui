import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Avatar } from './Avatar'

describe('avatar', () => {
  it('renders correctly', () => {
    render(<Avatar />)
    // Add assertions
  })
})