import type { Meta, StoryObj } from '@storybook/react-vite'
import { ScrollArea } from './ScrollArea'

const meta: Meta<typeof ScrollArea> = {
  title: 'Components/ScrollArea',
  component: ScrollArea,
  parameters: {
    docs: {
      description: {
        component: `
The **ScrollArea** component ...
`,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof ScrollArea>

export const Default: Story = {
  args: {
    // Default props
  },
}