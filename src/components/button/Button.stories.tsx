import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { Button } from './Button'

/**
 * @file Button.stories.tsx
 * @description Storybook documentation for the Button component
 *
 * Component stories follow this structure:
 * 1. Meta export with component metadata and documentation
 * 2. Story exports showing different usage scenarios
 * 3. Controls for interactive testing
 * 4. Examples of component variants and configurations
 */

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: `
A versatile button component that serves as a primary interaction element in user interfaces.

## Overview

The Button component is a styled wrapper around the native HTML \`<button>\` element.
It provides consistent styling, various visual variants, and size options while maintaining
all the functionality of the standard button element.

## Features

- Multiple visual variants (default, secondary, alert, outline, ghost, link)
- Multiple size options (small, default, large, icon)
- Customizable with theme tokens from \`theme.css\`
- Automatic light/dark mode adaptation
- Accessible focus states
- Disabled state styling
- Full support for all native button props

## Accessibility

- Uses native \`<button>\` element for proper semantics
- Includes visible focus states
- Maintains appropriate color contrast ratios
- Supports keyboard navigation

## Usage Guidelines

- Use **Default** buttons for primary actions
- Use **Secondary** buttons for secondary actions
- Use **Alert** buttons for destructive actions
- Use **Outline** and **Ghost** buttons for less prominent actions
- Use **Link** buttons for navigation-like actions within the page
- Always provide descriptive text for button actions
- Consider using icons alongside text for better visual comprehension
        `,
      },
    },
    layout: 'centered',
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'Content inside the button',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'alert', 'outline', 'ghost', 'link'],
      description: 'Visual style variant of the button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'icon'],
      description: 'Size variant of the button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    onClick: {
      action: 'clicked',
      description: 'Function called when button is clicked',
      table: {
        type: { summary: '() => void' },
      },
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description: 'HTML button type attribute',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'button' },
      },
    },
    className: {
      control: 'text',
      description: 'Additional CSS class names',
      table: {
        type: { summary: 'string' },
      },
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Button>

/**
 * Default button with no custom props.
 */
export const Default: Story = {
  args: {
    children: 'Button',
  },
}

/**
 * All available button variants.
 */
export const Variants: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        gap: '1rem',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      <Button>Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="alert">Alert</Button>
      <Button variant="outline">Outlined</Button>
      <Button variant="link">Link</Button>
      <Button disabled={true}>Disabled</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Button comes in different variants to indicate different types of actions.',
      },
    },
  },
}

/**
 * All available button sizes.
 */
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <Button size="sm">Small</Button>
      <Button size="md">Default</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Buttons are available in three sizes: small, default, and large.',
      },
    },
  },
}

/**
 * Icon button example.
 */
export const IconButton: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <Button size="icon" aria-label="Settings">
        ⚙️
      </Button>
      <Button size="icon" aria-label="Add">
        +
      </Button>
      <Button size="icon" variant="ghost" aria-label="Close">
        ×
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Icon-only buttons should use the "icon" size and include an aria-label for accessibility.',
      },
    },
  },
}

/**
 * With event handlers example.
 */
export const WithEvents: Story = {
  args: {
    children: 'Click Me',
    onClick: () => alert('Button clicked!'),
  },
  parameters: {
    docs: {
      description: {
        story: 'Buttons support all native button event handlers.',
      },
    },
  },
}

/**
 * Full-width example.
 */
export const FullWidth: Story = {
  render: () => (
    <div style={{ width: '100%', maxWidth: '300px' }}>
      <Button style={{ width: '100%' }}>Full Width Button</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Buttons can be styled to take the full width of their container.',
      },
    },
  },
}

/**
 * Interactive example with loading state.
 */
export const WithLoadingState: Story = {
  render: () => {
    const [loading, setLoading] = useState(false)

    const handleClick = () => {
      setLoading(true)
      setTimeout(() => setLoading(false), 2000)
    }

    return (
      <Button
        onClick={handleClick}
        disabled={loading}
      >
        {loading ? 'Loading...' : 'Click to Load'}
      </Button>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of a button with loading state management.',
      },
    },
  },
}
