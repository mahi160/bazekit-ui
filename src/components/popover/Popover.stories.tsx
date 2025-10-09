import type { Meta, StoryObj } from '@storybook/react-vite'
import { Popover } from './Popover'

const meta: Meta<typeof Popover> = {
  title: 'Components/Popover',
  component: Popover,
  parameters: {
    docs: {
      description: {
        component: `
The **Popover** component ...
`,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Popover>

export const Default: Story = {
  args: {
    // Default props
  },
}
