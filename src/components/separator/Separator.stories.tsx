import type { Meta, StoryObj } from '@storybook/react-vite'
import { Separator } from './Separator'

const meta: Meta<typeof Separator> = {
  title: 'Components/Separator',
  component: Separator,
  parameters: {
    docs: {
      description: {
        component: `
The **Separator** component ...
`,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Separator>

export const Default: Story = {
  args: {
    // Default props
  },
}
