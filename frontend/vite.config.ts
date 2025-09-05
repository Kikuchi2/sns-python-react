import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    strictPort: true,
    open: true,
    proxy: {
      // ← 方式A：/api を Django(8000) にプロキシ
      '/api': { target: 'http://127.0.0.1:8000', changeOrigin: true, secure: false },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // import '@/components/Button' みたいに使える
    },
  },
  // 本番でサブパス配信するなら base を設定（例：/app/配下で配るとき）
  // base: '/'
})
