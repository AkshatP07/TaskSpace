import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // This is important
    emptyOutDir: true
  },
  base: './', // This ensures relative path routing for production
});
