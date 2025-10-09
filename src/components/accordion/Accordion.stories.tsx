import type { Meta, StoryObj } from '@storybook/react-vite'
import { Accordion } from './Accordion'

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    docs: {
      description: {
        component: `
The **Accordion** component ...
`,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Accordion>

export const Default: Story = {
  args: {
    // Default props
  },
}
