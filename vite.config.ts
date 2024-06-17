import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      application: "/src/application",
      domain: "/src/domain",
      infrastructure: "/src/infrastructure",
      presentation: "/src/presentation",
    }
  }
})
