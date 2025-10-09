import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Tooltip } from './Tooltip'

describe('tooltip', () => {
  it('renders correctly', () => {
    render(<Tooltip />)
    // Add assertions
  })
})