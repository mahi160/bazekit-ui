import type { Meta, StoryObj } from '@storybook/react-vite'
import { Slider } from './Slider'

const meta: Meta<typeof Slider> = {
  title: 'Components/Slider',
  component: Slider,
  parameters: {
    docs: {
      description: {
        component: `
The **Slider** component ...
`,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Slider>

export const Default: Story = {
  args: {
    // Default props
  },
}