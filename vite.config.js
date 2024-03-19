import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import svgr from '@svgr/rollup';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      'src': path.resolve(__dirname, 'src'),
      'widgets': path.resolve(__dirname, 'src/widgets'),
      'shared': path.resolve(__dirname, 'src/shared'),
      'pages': path.resolve(__dirname, 'src/pages'),

    },
  },
  plugins: [react(),svgr()],
})
