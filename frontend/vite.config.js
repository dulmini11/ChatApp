// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// No tailwindcss() plugin needed here
export default defineConfig({
  plugins: [react()],
})
