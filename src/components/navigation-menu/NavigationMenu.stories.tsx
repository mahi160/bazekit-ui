import type { Meta, StoryObj } from '@storybook/react-vite'
import { NavigationMenu } from './NavigationMenu'

const meta: Meta<typeof NavigationMenu> = {
  title: 'Components/NavigationMenu',
  component: NavigationMenu,
  parameters: {
    docs: {
      description: {
        component: `
The **NavigationMenu** component ...
`,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof NavigationMenu>

export const Default: Story = {
  args: {
    // Default props
  },
}
