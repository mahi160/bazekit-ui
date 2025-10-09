import type { Meta, StoryObj } from '@storybook/react-vite'
import { Input } from './Input'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  //   parameters: {
  //     docs: {
  //       description: {
  //         component: `
  // The **Button** component is a styled wrapper around the native \`<button>\` element.
  // It uses theme tokens from \`theme.css\` and automatically adapts to light/dark mode.
  //
  // ### Features
  //
  // - Theming with CSS variables
  // - Dark mode support (\`data-theme="dark"\`)
  // - Supports all native button props
  //   `,
  //       },
  //     },
  //   },
  //   argTypes: {
  //     children: {
  //       control: "text",
  //       description: "Content inside the button",
  //     },
  //     onClick: {
  //       action: "clicked",
  //       description: "Click event handler",
  //     },
  //   },
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
  render: () => <Input placeholder="Enter text" />,
}
