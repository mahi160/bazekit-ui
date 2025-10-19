import type { Meta, StoryObj } from '@storybook/react-vite'
import { Avatar, AvatarFallback, AvatarGroup, AvatarImage } from './Avatar'

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    docs: {
      description: {
        component: `
The **Avatar** component ...
`,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Avatar>

export const Default: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="https://picsum.photos/200" />
      <AvatarFallback>JH</AvatarFallback>
    </Avatar>
  ),
}

export const Group: Story = {
  render: () => (
    <AvatarGroup>
      <Avatar style={{ borderColor: 'red', borderWidth: 2, borderStyle: 'solid' }}>
        <AvatarFallback>JH</AvatarFallback>
      </Avatar>
      <Avatar style={{ borderColor: 'green', borderWidth: 2, borderStyle: 'solid' }}>
        <AvatarFallback>PB</AvatarFallback>
      </Avatar>
      <Avatar style={{ borderColor: 'blue', borderWidth: 2, borderStyle: 'solid' }}>
        <AvatarFallback>DS</AvatarFallback>
      </Avatar>
    </AvatarGroup>
  ),
}
