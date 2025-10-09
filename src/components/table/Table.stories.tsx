import type { Meta, StoryObj } from '@storybook/react-vite'
import { Table } from './Table'

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  parameters: {
    docs: {
      description: {
        component: `
The **Table** component ...
`,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Table>

export const Default: Story = {
  args: {
    // Default props
  },
}