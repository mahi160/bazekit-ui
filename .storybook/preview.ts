import type { Preview } from "@storybook/react-vite";
import { withThemeByDataAttribute } from '@storybook/addon-themes';
import "../src/index.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
  
  // Add decorator for theme selection
  decorators: [
    withThemeByDataAttribute({
      themes: {
        default: '',
        dark: 'dark',
        'oceanic-breeze': 'oceanic-breeze',
        'oceanic-breeze-dark': 'oceanic-breeze-dark',
        'sunset-glow': 'sunset-glow',
        'sunset-glow-dark': 'sunset-glow-dark',
        'forest-retreat': 'forest-retreat',
        'forest-retreat-dark': 'forest-retreat-dark',
        'cosmic-night': 'cosmic-night',
        'cosmic-night-dark': 'cosmic-night-dark'
      },
      defaultTheme: 'default',
      attributeName: 'data-theme',
    })
  ],
};

export default preview;

