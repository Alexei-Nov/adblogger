import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vike from 'vike/plugin';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    vike(),
  ],
  resolve: {
    alias: {
      components: path.resolve(process.cwd(), 'src/components'),
      fonts: path.resolve(process.cwd(), 'src/fonts'),
      pages: path.resolve(process.cwd(), 'src/pages'),
      style: path.resolve(process.cwd(), 'src/style'),
      toolkitRedux: path.resolve(process.cwd(), 'src/toolkitRedux'),
      utils: path.resolve(process.cwd(), 'src/utils'),
    },
  },
});