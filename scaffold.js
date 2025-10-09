#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

// Basic component structure
const components = [
  'accordion',
  'alert',
  'avatar',
  'badge',
  'button',
  'calendar',
  'card',
  'checkbox',
  'collapsible',
  'combobox',
  'command',
  'dialog',
  'dropdown-menu',
  'form',
  'hover-card',
  'input',
  'label',
  'menubar',
  'navigation-menu',
  'popover',
  'progress',
  'radio',
  'scroll-area',
  'select',
  'separator',
  'sheet',
  'skeleton',
  'slider',
  'switch',
  'table',
  'tabs',
  'textarea',
  'toast',
  'toggle',
  'tooltip',
];

// Template content
const templates = {
  component: (name) => {
    const pascalName = pascalCase(name);
    return `import styles from './${pascalName}.module.css'

export interface ${pascalName}Props {
  // Add props here
}

export const ${pascalName}: React.FC<${pascalName}Props> = (props) => {
  const { className, ...rest } = props;
  const combinedClassName = [styles.${camelCase(name)}, className].filter(Boolean).join(' ');
  
  return (
    <div className={combinedClassName} {...rest}>
      {/* Component implementation */}
    </div>
  );
}`;
  },
  
  css: (name) => {
    return `.${camelCase(name)} {
  /* Base styles */
}`;
  },
  
  stories: (name) => {
    const pascalName = pascalCase(name);
    return `import type { Meta, StoryObj } from '@storybook/react-vite'
import { ${pascalName} } from './${pascalName}'

const meta: Meta<typeof ${pascalName}> = {
  title: 'Components/${pascalName}',
  component: ${pascalName},
  parameters: {
    docs: {
      description: {
        component: \`
The **${pascalName}** component ...
\`,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof ${pascalName}>

export const Default: Story = {
  args: {
    // Default props
  },
}`;
  },
  
  test: (name) => {
    const pascalName = pascalCase(name);
    return `import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { ${pascalName} } from './${pascalName}'

describe('${name}', () => {
  it('renders correctly', () => {
    render(<${pascalName} />)
    // Add assertions
  })
})`;
  }
};

// Utility functions
function pascalCase(str) {
  return str.split(/[-_]/).map(part => 
    part.charAt(0).toUpperCase() + part.slice(1).toLowerCase()
  ).join('');
}

function camelCase(str) {
  const pascal = pascalCase(str);
  return pascal.charAt(0).toLowerCase() + pascal.slice(1);
}

function createComponentFiles(component) {
  const componentName = pascalCase(component);
  const dir = path.join(process.cwd(), 'src/components', component);
  
  // Create directory
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`Created directory: ${dir}`);
  }
  
  // Create component files
  const files = [
    { name: `${componentName}.tsx`, content: templates.component(component) },
    { name: `${componentName}.module.css`, content: templates.css(component) },
    { name: `${componentName}.stories.tsx`, content: templates.stories(component) },
    { name: `${componentName}.test.tsx`, content: templates.test(component) }
  ];
  
  for (const file of files) {
    const filePath = path.join(dir, file.name);
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, file.content);
      console.log(`Created file: ${filePath}`);
    } else {
      console.log(`File already exists: ${filePath}`);
    }
  }
}

// Main execution
function main() {
  // Create src/components if it doesn't exist
  const componentsDir = path.join(process.cwd(), 'src/components');
  if (!fs.existsSync(componentsDir)) {
    fs.mkdirSync(componentsDir, { recursive: true });
    console.log(`Created directory: ${componentsDir}`);
  }
  
  // Create individual component folders and files
  for (const component of components) {
    createComponentFiles(component);
  }
  
  console.log('Component scaffolding complete!');
}

main();