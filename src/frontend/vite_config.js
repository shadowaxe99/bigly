```javascript
import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

export default defineConfig({
  plugins: [reactRefresh()],
  server: {
    host: 'localhost',
    port: 3000,
    strictPort: true,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  build: {
    outDir: 'build',
    emptyOutDir: true,
    sourcemap: true
  }
})
```