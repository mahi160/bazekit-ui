import type { Meta, StoryObj } from '@storybook/react-vite'
import { Collapsible } from './Collapsible'

const meta: Meta<typeof Collapsible> = {
  title: 'Components/Collapsible',
  component: Collapsible,
  parameters: {
    docs: {
      description: {
        component: `
The **Collapsible** component ...
`,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Collapsible>

export const Default: Story = {
  args: {
    // Default props
  },
}
