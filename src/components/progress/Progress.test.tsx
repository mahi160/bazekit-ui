import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Progress } from './Progress'

describe('progress', () => {
  it('renders correctly', () => {
    render(<Progress />)
    // Add assertions
  })
})