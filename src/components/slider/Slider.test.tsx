import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Slider } from './Slider'

describe('slider', () => {
  it('renders correctly', () => {
    render(<Slider />)
    // Add assertions
  })
})