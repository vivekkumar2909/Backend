import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    Proxy:{
      'api': 'https://localhost:3000'
    }
  },
  plugins: [react()],
})
