import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Label } from './Label'

describe('label', () => {
  it('renders correctly', () => {
    render(<Label />)
    // Add assertions
  })
})