import type { Meta, StoryObj } from '@storybook/react-vite'
import { Toast } from './Toast'

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
  parameters: {
    docs: {
      description: {
        component: `
The **Toast** component ...
`,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Toast>

export const Default: Story = {
  args: {
    // Default props
  },
}
