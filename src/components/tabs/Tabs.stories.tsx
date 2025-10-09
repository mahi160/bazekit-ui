import type { Meta, StoryObj } from '@storybook/react-vite'
import { Tabs } from './Tabs'

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    docs: {
      description: {
        component: `
The **Tabs** component ...
`,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Tabs>

export const Default: Story = {
  args: {
    // Default props
  },
}