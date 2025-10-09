import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
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
      </>
    )
    
    const radioA = screen.getByLabelText(/option a/i)
    const radioB = screen.getByLabelText(/option b/i)
    
    await userEvent.click(radioA)
    expect(radioA).toBeChecked()
    expect(radioB).not.toBeChecked()
    
    await userEvent.click(radioB)
    expect(radioB).toBeChecked()
    expect(radioA).not.toBeChecked()
  })

  it('can be disabled', () => {
    render(<Radio label="Disabled option" disabled />)
    const radio = screen.getByLabelText(/disabled option/i)
    expect(radio).toBeDisabled()
  })
})