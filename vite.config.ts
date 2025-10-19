import path from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
// import { analyzer } from 'vite-bundle-analyzer'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'Bizkit UI',
      fileName: format => `bizkit-ui.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime', '@base-ui-components/react'],
      output: {
        globals: {
          'react': 'react',
          'react-dom': 'react-dom',
          'react/jsx-runtime': 'react/jsx-runtime',
          '@base-ui-components/react': '@base-ui-components/react',
        },
      },
    },
  },
})
