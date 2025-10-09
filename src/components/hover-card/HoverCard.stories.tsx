import type { Meta, StoryObj } from '@storybook/react-vite'
import { HoverCard } from './HoverCard'

const meta: Meta<typeof HoverCard> = {
  title: 'Components/HoverCard',
  component: HoverCard,
  parameters: {
    docs: {
      description: {
        component: `
The **HoverCard** component ...
`,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof HoverCard>

export const Default: Story = {
  args: {
    // Default props
  },
}