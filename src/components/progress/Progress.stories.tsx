import type { Meta, StoryObj } from '@storybook/react-vite'
import { Progress } from './Progress'

const meta: Meta<typeof Progress> = {
  title: 'Components/Progress',
  component: Progress,
  parameters: {
    docs: {
      description: {
        component: `
The **Progress** component ...
`,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Progress>

export const Default: Story = {
  args: {
    // Default props
  },
}