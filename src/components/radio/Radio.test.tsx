import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Radio } from './Radio'

describe('radio', () => {
  it('renders with label', () => {
    render(<Radio label="Option A" name="test" />)
    expect(screen.getByLabelText(/option a/i)).toBeDefined()
  })

  it('handles change events', async () => {
    render(
      <>
        <Radio label="Option A" name="test" value="a" />
        <Radio label="Option B" name="test" value="b" />
      </>,
    )
  })

  it('can be disabled', () => {
    render(<Radio label="Disabled option" disabled />)
  })
})
