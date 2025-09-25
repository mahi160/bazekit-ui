import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    docs: {
      description: {
        component: `
The **Button** component is a styled wrapper around the native \`<button>\` element.  
It uses theme tokens from \`theme.css\` and automatically adapts to light/dark mode.

### Features

- Theming with CSS variables
- Dark mode support (\`data-theme="dark"\`)
- Supports all native button props
  `,
      },
    },
  },
  argTypes: {
    children: {
      control: "text",
      description: "Content inside the button",
    },
    onClick: {
      action: "clicked",
      description: "Click event handler",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Click Me",
  },
};

export const Variants: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        alignItems: "center",
        flexWrap: "wrap",
      }}
      data-color="red"
    >
      <Button>Default</Button>
      <Button variant="accent">Accent</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="alert">Alert</Button>
      <Button variant="outline">Outlined</Button>
      <Button variant="link">Link</Button>
      <Button disabled>Disabled</Button>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
      <Button size="sm">Small</Button>
      <Button>Default</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};
