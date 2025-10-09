import type { Meta, StoryObj } from '@storybook/react-vite'
import { Form } from './Form'

const meta: Meta<typeof Form> = {
  title: 'Components/Form',
  component: Form,
  parameters: {
    docs: {
      description: {
        component: `
The **Form** component ...
`,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Form>

export const Default: Story = {
  args: {
    // Default props
  },
}