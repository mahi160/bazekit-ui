import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Tabs } from './Tabs'

describe('tabs', () => {
  it('renders correctly', () => {
    render(<Tabs />)
    // Add assertions
  })
})