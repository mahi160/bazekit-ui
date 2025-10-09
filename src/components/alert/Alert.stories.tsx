import type { Meta, StoryObj } from '@storybook/react-vite'
import { Alert } from './Alert'

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    docs: {
      description: {
        component: `
The **Alert** component ...
`,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Alert>

export const Default: Story = {
  args: {
    // Default props
  },
}
