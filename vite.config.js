import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default {
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensure this is set correctly
  },
};

