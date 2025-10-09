import type { Meta, StoryObj } from '@storybook/react-vite'
import { Radio } from './Radio'

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
  parameters: {
    docs: {
      description: {
        component: `
The **Radio** component is a styled wrapper around the native \`<input type="radio">\` element.
`,
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text for the radio button',
    },
    checked: {
      control: 'boolean',
      description: 'Whether the radio is checked',
    },
  },
}

export default meta
type Story = StoryObj<typeof Radio>

export const Default: Story = {
  args: {
    label: 'Option A',
    name: 'demo-group',
  },
}

export const Group: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <Radio name="group" value="option1" label="Option 1" defaultChecked />
      <Radio name="group" value="option2" label="Option 2" />
      <Radio name="group" value="option3" label="Option 3" />
    </div>
  ),
}

export const Disabled: Story = {
  args: {
    label: 'Disabled option',
    disabled: true,
  },
}
