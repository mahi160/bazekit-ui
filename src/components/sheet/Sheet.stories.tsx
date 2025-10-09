import type { Meta, StoryObj } from '@storybook/react-vite'
import { Sheet } from './Sheet'

const meta: Meta<typeof Sheet> = {
  title: 'Components/Sheet',
  component: Sheet,
  parameters: {
    docs: {
      description: {
        component: `
The **Sheet** component ...
`,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Sheet>

export const Default: Story = {
  args: {
    // Default props
  },
}