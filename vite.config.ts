import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

export default defineConfig({
  plugins: [reactRefresh()],
  css: { modules: { localsConvention: 'camelCase' } },
  server: {
    port: 3000
  }
})