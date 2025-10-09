import type { Meta, StoryObj } from '@storybook/react-vite'
import { Calendar } from './Calendar'

const meta: Meta<typeof Calendar> = {
  title: 'Components/Calendar',
  component: Calendar,
  parameters: {
    docs: {
      description: {
        component: `
The **Calendar** component ...
`,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Calendar>

export const Default: Story = {
  args: {
    // Default props
  },
}