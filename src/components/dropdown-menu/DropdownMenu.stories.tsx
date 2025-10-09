import type { Meta, StoryObj } from '@storybook/react-vite'
import { DropdownMenu } from './DropdownMenu'

const meta: Meta<typeof DropdownMenu> = {
  title: 'Components/DropdownMenu',
  component: DropdownMenu,
  parameters: {
    docs: {
      description: {
        component: `
The **DropdownMenu** component ...
`,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof DropdownMenu>

export const Default: Story = {
  args: {
    // Default props
  },
}
