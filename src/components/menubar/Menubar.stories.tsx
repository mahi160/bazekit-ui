import type { Meta, StoryObj } from '@storybook/react-vite'
import { Menubar } from './Menubar'

const meta: Meta<typeof Menubar> = {
  title: 'Components/Menubar',
  component: Menubar,
  parameters: {
    docs: {
      description: {
        component: `
The **Menubar** component ...
`,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Menubar>

export const Default: Story = {
  args: {
    // Default props
  },
}