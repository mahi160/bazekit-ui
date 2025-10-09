import type { Meta, StoryObj } from '@storybook/react-vite'
import { Combobox } from './Combobox'

const meta: Meta<typeof Combobox> = {
  title: 'Components/Combobox',
  component: Combobox,
  parameters: {
    docs: {
      description: {
        component: `
The **Combobox** component ...
`,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Combobox>

export const Default: Story = {
  args: {
    // Default props
  },
}