import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Table } from './Table'

describe('table', () => {
  it('renders correctly', () => {
    render(<Table />)
    // Add assertions
  })
})