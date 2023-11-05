import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    hmr: {
      host: '192.168.1.6:3000',
    },
  },
  plugins: [react()],
})
