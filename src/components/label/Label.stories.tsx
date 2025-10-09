import type { Meta, StoryObj } from '@storybook/react-vite'
import { Label } from './Label'

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  parameters: {
    docs: {
      description: {
        component: `
The **Label** component ...
`,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Label>

export const Default: Story = {
  args: {
    // Default props
  },
}