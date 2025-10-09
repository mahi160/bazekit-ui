import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Dialog } from './Dialog'

describe('dialog', () => {
  it('renders correctly', () => {
    render(<Dialog />)
    // Add assertions
  })
})