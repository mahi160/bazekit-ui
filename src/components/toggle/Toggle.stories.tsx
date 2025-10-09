import type { Meta, StoryObj } from '@storybook/react-vite'
import { Toggle } from './Toggle'

const meta: Meta<typeof Toggle> = {
  title: 'Components/Toggle',
  component: Toggle,
  parameters: {
    docs: {
      description: {
        component: `
The **Toggle** component is a two-state button that can be either on or off.
`,
      },
    },
  },
  argTypes: {
    pressed: {
      control: 'boolean',
      description: 'The controlled pressed state of the toggle',
    },
    defaultPressed: {
      control: 'boolean',
      description: 'The default pressed state of the toggle (uncontrolled)',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the toggle is disabled',
    },
  },
}

export default meta
type Story = StoryObj<typeof Toggle>

export const Default: Story = {
  args: {
    children: 'Toggle me',
    defaultPressed: false,
  },
}

export const Pressed: Story = {
  args: {
    children: 'Toggle me',
    defaultPressed: true,
  },
}

export const Disabled: Story = {
  args: {
    children: 'Disabled toggle',
    disabled: true,
  },
}