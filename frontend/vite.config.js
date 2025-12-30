import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// ✅ Added react() plugin to enable JSX support
export default defineConfig({
  plugins: [
    react(),      // <-- add this line
    tailwindcss(),
  ],
});
