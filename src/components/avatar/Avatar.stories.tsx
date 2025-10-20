import type { Meta, StoryObj } from '@storybook/react-vite'
import { Avatar, AvatarFallback, AvatarGroup, AvatarImage } from './Avatar'

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `\nThe **Avatar** component displays a representative image or fallback initials for a user, entity, or object. It ensures consistent sizing, shape, and layering across collaborative or profile-oriented interfaces.\n\n## Overview\nUse an avatar to visually identify participants, authorship, ownership, or attribution. When an image cannot load, the component gracefully renders a fallback to preserve layout stability.\n\n## Key Features\n- **Image & Fallback**: Automatic fallback rendering when the primary source fails.\n- **Grouping**: Compact overlapping clusters for multi-member contexts.\n- **Theming**: Style alignment through CSS Modules and design tokens.\n- **Accessible Markup**: Alt text for images; fallback content is announced as text.\n\n## Usage Guidelines\n- Keep alt text concise: describe the subject, not decorative context.\n- Use consistent dimensions within lists or grids to maintain rhythm.\n- For groups > 4, collapse overflow into a summary indicator (custom pattern).\n\n## Accessibility\n- Provide meaningful \`alt\` attributes; use an empty string only when purely decorative.\n- Fallback initials convey identity when imagery is unavailable.\n- Maintain sufficient contrast around circular boundaries.\n\n## Example\nExamples below reference characters from *The Big Bang Theory* purely for demonstration.\n        `,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Avatar>

export const Default: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="https://picsum.photos/seed/sheldon/200" alt="Sheldon Cooper" />
      <AvatarFallback>SC</AvatarFallback>
    </Avatar>
  ),
}

export const WithFallback: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates graceful fallback when the image source is unreachable.',
      },
    },
  },
  render: () => (
    <Avatar>
      <AvatarImage src="https://invalid.example/broken-image.jpg" alt="Leonard Hofstadter" />
      <AvatarFallback>LH</AvatarFallback>
    </Avatar>
  ),
}

export const Group: Story = {
  parameters: {
    docs: {
      description: {
        story: 'AvatarGroup arranges multiple avatars with subtle overlap to conserve horizontal space.',
      },
    },
  },
  render: () => (
    <AvatarGroup>
      <Avatar>
        <AvatarFallback>SC</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>LH</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>PH</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>AF</AvatarFallback>
      </Avatar>
    </AvatarGroup>
  ),
}

export const MixedSources: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Combines image and fallback avatars within a group.',
      },
    },
  },
  render: () => (
    <AvatarGroup>
      <Avatar>
        <AvatarImage src="https://picsum.photos/seed/penny/200" alt="Penny" />
        <AvatarFallback>P</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://picsum.photos/seed/amy/200" alt="Amy Farrah Fowler" />
        <AvatarFallback>AF</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://invalid.example/missing.jpg" alt="Howard Wolowitz" />
        <AvatarFallback>HW</AvatarFallback>
      </Avatar>
    </AvatarGroup>
  ),
}
