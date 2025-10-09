import type { Meta, StoryObj } from '@storybook/react-vite'
import { Dialog } from './Dialog'

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
  parameters: {
    docs: {
      description: {
        component: `
The **Dialog** component ...
`,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Dialog>

export const Default: Story = {
  args: {
    // Default props
  },
}