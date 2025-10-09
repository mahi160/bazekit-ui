import type { Meta, StoryObj } from '@storybook/react-vite'
import { Command } from './Command'

const meta: Meta<typeof Command> = {
  title: 'Components/Command',
  component: Command,
  parameters: {
    docs: {
      description: {
        component: `
The **Command** component ...
`,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Command>

export const Default: Story = {
  args: {
    // Default props
  },
}