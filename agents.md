# Bizkit Component Development Guidelines

This document outlines standards and best practices for developing components in the Bizkit design system.

## Component Structure

Each component follows this file structure:

```
component-name/
├── ComponentName.tsx         # Component implementation
├── ComponentName.module.css  # Component styles
├── ComponentName.stories.tsx # Storybook documentation
├── ComponentName.test.tsx    # Component tests
```

## Component Implementation Guidelines

### Component Files

1. **Component Implementation (ComponentName.tsx)**
   - Use TypeScript interfaces for props
   - Extend native HTML element props when appropriate
   - Use meaningful prop names that reflect their purpose
   - Provide default values for optional props
   - Use React.FC type for functional components
   - Use data attributes for styling variants (e.g., data-variant, data-size)
   - Export both the component and its props interface

2. **Component Styles (ComponentName.module.css)**
    - Use CSS modules for component-scoped styles
    - Use CSS variables from theme.css for colors, spacing, etc.
    - Use data attributes selectors for variants (e.g., `.button[data-variant='default']`)
    - Group related styles (variants, sizes, states)
    - Include styles for different states (hover, focus, disabled)
    - Ensure proper accessibility features
    - Support both light and dark themes
    - Prefer CSS logical properties (e.g., padding-inline, padding-block, inline-size, block-size) instead of physical properties when possible.
    - Use CSS nesting for states, variants, and descendant selectors to keep code organized.


3. **Component Tests (ComponentName.test.tsx)**
   - Test rendering without errors
   - Test all prop variations
   - Test interactive behaviors
   - Test accessibility features

## Storybook Documentation Guidelines

### Stories File Structure

1. **Component Meta**
   - Set appropriate component title (e.g., 'Components/Button')
   - Include comprehensive component description
   - Define argTypes for all props with description, control type, default value

2. **Stories**
   - Create a Default story showing basic usage
   - Create stories for all variants and sizes
   - Include examples of common usage patterns
   - Document each story with a concise description
   - Use consistent styling across story examples

### Documentation Content

Each component's Storybook documentation should include:

1. **Component Overview**
   - Purpose and use cases
   - Key features
   - Basic usage example

2. **Props Documentation**
   - Description of each prop
   - Type information and default values

3. **Variants and Examples**
   - Visual examples of all variants
   - Common usage patterns

4. **Accessibility Information**
   - Keyboard navigation
   - ARIA attributes and screen reader support

5. **Usage Guidelines**
   - When to use this component vs alternatives
   - Best practices for implementation

## Guidelines for Development

1. **Follow Existing Patterns**
   - Maintain consistent code style
   - Follow established CSS and styling approaches
   - Use the same file structure and naming conventions

2. **Documentation Requirements**
   - Create comprehensive documentation for all components
   - Include all sections outlined above
   - Provide detailed props documentation
   - Include accessibility information

3. **Code Quality Standards**
   - Write clean, readable code
   - Include appropriate TypeScript types
   - Follow React best practices
   - Ensure components are accessible
   - Write tests for all components

4. **Component Development Process**
   1. Understand the component requirements
   2. Review similar existing components
   3. Implement the component following structure guidelines
   4. Write tests
   5. Create Storybook documentation
   6. Review against guidelines before submission

By following these guidelines, we ensure consistent, high-quality components throughout the Bizkit design system.
