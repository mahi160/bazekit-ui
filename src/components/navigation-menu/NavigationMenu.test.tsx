import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { NavigationMenu } from './NavigationMenu'

describe('navigation-menu', () => {
  it('renders correctly', () => {
    render(<NavigationMenu />)
    // Add assertions
  })
})