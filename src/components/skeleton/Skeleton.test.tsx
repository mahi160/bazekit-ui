import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Skeleton } from './Skeleton'

describe('skeleton', () => {
  it('renders correctly', () => {
    render(<Skeleton />)
    // Add assertions
  })
})