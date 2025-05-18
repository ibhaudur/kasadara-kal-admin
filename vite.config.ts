import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 3000,
  },
  test: {
    globals: true,  // Use global `describe`, `it`, `expect`
    environment: 'jsdom',  // Simulate a browser environment
    setupFiles: './src/setupTests.ts', // Setup file (optional)
  },
});
