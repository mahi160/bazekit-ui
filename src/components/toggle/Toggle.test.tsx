import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { Toggle } from './Toggle'

describe('toggle', () => {
  it('renders with children', () => {
    render(<Toggle>Click me</Toggle>)
    expect(screen.getByRole('button', { name: /click me/i })).toBeDefined()
  })

  it('applies aria-pressed attribute', () => {
    render(<Toggle pressed={true}>Toggle</Toggle>)
    const button = screen.getByRole('button')
    expect(button.getAttribute('aria-pressed')).toBe('true')
    expect(button.getAttribute('data-state')).toBe('on')
  })

  it('calls onPressedChange when clicked', async () => {
    const onPressedChange = vi.fn()
    render(
      <Toggle pressed={false} onPressedChange={onPressedChange}>
        Toggle
      </Toggle>,
    )

    const button = screen.getByRole('button')
    await userEvent.click(button)

    expect(onPressedChange).toHaveBeenCalledTimes(1)
    expect(onPressedChange).toHaveBeenCalledWith(true)
  })

  it('can be disabled', () => {
    render(<Toggle disabled>Disabled</Toggle>)
  })
})
