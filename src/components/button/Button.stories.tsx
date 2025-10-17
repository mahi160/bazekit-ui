import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: `
A versatile button component that clicks, clacks, and occasionally gets stuck in Jell-O.

## Overview
The Button is your go-to for all things clickable. It's a styled wrapper around the native HTML \`<button>\` element, but with more personality than a beet farmer. It provides consistent styling, various visual variants, and size options for every occasion, from a "that's what she said" to a "Bears, Beets, Battlestar Galactica."

## Features
- **Variants for Every Mood**: From 'default' (classic Jim Halpert smirk) to 'alert' (Dwight discovering a stapler in Jell-O).
- **Sizes for Every Situation**: 'small' (a subtle glance at the camera), 'default' (a standard Dundie Award), and 'large' (Michael's "World's Best Boss" mug).
- **Theme-Ready**: Adapts to light and dark modes faster than Creed changes his identity.
- **Accessible**: So easy to use, even Kevin could do it. Probably.
- **Native Props**: All the power of a regular button, but with the spirit of Dunder Mifflin.

## Accessibility
- Built on a native \`<button>\` element, because some things are perfect as they are.
- Clear focus states, so you always know where you're clicking.
- Keyboard-friendly, for all the power users out there.

## Usage Guidelines
- **Default**: For your everyday, run-of-the-mill "that's what she said."
- **Secondary**: When you need a solid backup plan, like Jim's pranks.
- **Alert**: For those "NO, GOD, PLEASE, NO!" moments.
- **Outline/Ghost**: For actions that are more subtle, like Pam's art.
- **Link**: When you need to hyperlink to your beet farm.
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
    children: 'Bears, Beets, Battlestar Galactica',
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
      <Button>Michael Scott</Button>
      <Button variant="secondary">Pam Beesly</Button>
      <Button variant="ghost">Jim Halpert</Button>
      <Button variant="alert">Dwight Schrute</Button>
      <Button variant="outline">Angela Martin</Button>
      <Button variant="link">Creed Bratton</Button>
      <Button disabled>Toby Flenderson</Button>
    </div>
  ),
}

export const Sizes: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Buttons come in all shapes and sizes, just like Michael\'s jokes.Here are a few to get you started.',
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
