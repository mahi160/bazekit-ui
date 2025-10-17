import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from './Button'

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
It provides consistent styling, various visual variants, and size options.

## Features
- Multiple visual variants (default, secondary, alert, outline, ghost, link)
- Multiple size options (small, default, large, icon)
- Customizable with theme tokens
- Automatic light/dark mode adaptation
- Accessible focus states
- Full support for all native button props

## Accessibility
- Uses native \`<button>\` element
- Visible focus states
- Proper color contrast ratios
- Keyboard navigation support

## Usage Guidelines
- **Default**: Primary actions
- **Secondary**: Secondary actions
- **Alert**: Destructive actions
- **Outline/Ghost**: Less prominent actions
- **Link**: Navigation-like actions
        `,
      },
    },
    layout: 'centered',
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'Content inside the button',
      table: { type: { summary: 'ReactNode' } },
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
      table: { type: { summary: '() => void' } },
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
      table: { type: { summary: 'string' } },
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    children: 'Button',
  },
}

export const Variants: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Button comes in different variants to indicate different types of actions.',
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' as const }}>
      <Button>Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="alert">Alert</Button>
      <Button variant="outline">Outlined</Button>
      <Button variant="link">Link</Button>
      <Button disabled>Disabled</Button>
    </div>
  ),
}

export const Sizes: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Buttons are available in three sizes: small, default, and large.',
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <Button size="sm">Small</Button>
      <Button size="md">Default</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
}

export const IconButton: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Icon-only buttons should use the "icon" size and include an aria-label for accessibility.',
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <Button size="icon" aria-label="Settings">⚙️</Button>
      <Button size="icon" aria-label="Add">+</Button>
      <Button size="icon" variant="ghost" aria-label="Close">×</Button>
    </div>
  ),
}

export const WithEvents: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Buttons support all native button event handlers.',
      },
    },
  },
  args: {
    children: 'Click Me',
    onClick: () => console.info('Button clicked!'),
  },
}

export const FullWidth: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Buttons can be styled to take the full width of their container.',
      },
    },
  },
  render: () => (
    <div style={{ width: '100%', maxWidth: '300px' }}>
      <Button style={{ width: '100%' }}>Full Width Button</Button>
    </div>
  ),
}

export const WithLoadingState: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Buttons can represent loading states by disabling the button and changing the content.',
      },
    },
  },
  render: args => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Button {...args}>Click to Load</Button>
      <Button {...args} disabled>Loading...</Button>
    </div>
  ),
}
