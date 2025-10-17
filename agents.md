# Bizkit Component Development Guidelines

This document outlines the standards and best practices for developing components in the Bizkit design system. These guidelines should be followed by both human developers and AI agents working with this codebase.

## Component Structure

Each component should follow this file structure:

```
component-name/
├── ComponentName.tsx           # Main component implementation
├── ComponentName.module.css    # Component styles
├── ComponentName.stories.tsx   # Storybook documentation
├── ComponentName.test.tsx      # Component tests
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
   - Include styles for different states (hover, focus, disabled)
   - Ensure proper accessibility features (focus states, etc.)
   - Support both light and dark themes

3. **Component Tests (ComponentName.test.tsx)**
   - Test rendering without errors
   - Test all prop variations
   - Test interactive behaviors
   - Test accessibility features

## Storybook Documentation Guidelines

### Stories File Structure

1. **File Header**
   - Include file description
   - Outline the documentation structure

2. **Component Meta**
   - Set appropriate component title (e.g., 'Components/Button')
   - Include comprehensive component description in the docs parameters
   - Define argTypes for all props with:
     - Description
     - Control type
     - Default value
     - Type information

3. **Component Documentation**
   - Include a high-level overview
   - Detail component features
   - Provide accessibility information
   - Include usage guidelines

4. **Stories**
   - Create a Default story showing basic usage
   - Create stories demonstrating all variants
   - Include examples of different prop combinations
   - Document each story with a description
   - Include interactive examples when appropriate

### Documentation Content

Each component's Storybook documentation should include:

1. **Component Overview**
   - Purpose and use cases
   - Key features
   - Basic usage example

2. **Props Documentation**
   - Description of each prop
   - Type information
   - Default values
   - Examples of usage

3. **Variants and Examples**
   - Visual examples of all variants
   - Common usage patterns
   - Interactive examples where appropriate

4. **Accessibility Information**
   - Keyboard navigation
   - Screen reader support
   - ARIA attributes
   - Color contrast compliance

5. **Usage Guidelines**
   - When to use this component
   - When to use alternatives
   - Best practices for implementation



## Guidelines for AI Agents

When working with this codebase, AI agents should:

1. **Follow Existing Patterns**
   - Maintain consistent code style with existing components
   - Use the same file structure and naming conventions
   - Follow the established CSS and styling approach

2. **Documentation Requirements**
   - Create comprehensive Storybook documentation for all components
   - Include all sections outlined in the Storybook Documentation Guidelines
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
   3. Implement the component following the structure guidelines
   4. Write comprehensive tests
   5. Create detailed Storybook documentation
   6. Review against the guidelines before submission

By following these guidelines, both human developers and AI agents can ensure consistent, high-quality components throughout the Bizkit design system.
