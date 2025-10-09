import type { Meta, StoryObj } from '@storybook/react-vite'
import { Switch } from './Switch'

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  parameters: {
    docs: {
      description: {
        component: `
The **Switch** component ...
`,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Switch>

export const Default: Story = {
  args: {
    // Default props
  },
}
