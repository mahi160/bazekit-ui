import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { Textarea } from './Textarea'

describe('textarea', () => {
  it('renders with placeholder', () => {
    render(<Textarea placeholder="Enter text" />)
    expect(screen.getByPlaceholderText(/enter text/i)).toBeDefined()
  })

  it('handles user input', async () => {
    render(<Textarea placeholder="Enter text" />)
    const textarea = screen.getByPlaceholderText(/enter text/i)
    
    await userEvent.type(textarea, 'Hello world')
    expect(textarea).toHaveValue('Hello world')
  })

  it('respects rows attribute', () => {
    render(<Textarea rows={10} />)
    const textarea = screen.getByRole('textbox')
    expect(textarea.getAttribute('rows')).toBe('10')
  })
})