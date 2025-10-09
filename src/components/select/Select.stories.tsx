import type { Meta, StoryObj } from '@storybook/react-vite'
import { Select } from './Select'

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    docs: {
      description: {
        component: `
The **Select** component is a styled wrapper around the native \`<select>\` element.
`,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Select>

export const WithOptions: Story = {
  args: {
    options: [
      { value: '', label: 'Select an option', disabled: true },
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ],
  },
}

export const WithChildren: Story = {
  render: () => (
    <Select>
      <option value="" disabled>Select an option</option>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </Select>
  ),
}

export const Disabled: Story = {
  args: {
    disabled: true,
    options: [
      { value: '', label: 'Select an option' },
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
    ],
  },
}