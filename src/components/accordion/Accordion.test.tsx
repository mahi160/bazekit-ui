import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Accordion } from './Accordion'

describe('accordion', () => {
  it('renders correctly', () => {
    render(<Accordion />)
    // Add assertions
  })
})