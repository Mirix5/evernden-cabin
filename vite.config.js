import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.mjs', '.jsx', '.js', '.mts', '.ts', '.tsx', '.json']
  },
  server: {
    port: 3000
  }
})
