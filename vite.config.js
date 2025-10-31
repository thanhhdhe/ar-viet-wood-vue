import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // Cấu hình Vue để bỏ qua các thẻ custom element của A-Frame và MindAR
          isCustomElement: (tag) => tag.startsWith('a-')
        }
      }
    })
  ],
  preview: {
    host: '0.0.0.0',
    port: 4173,
    allowedHosts: ['arvietwood.org', 'www.arvietwood.org']
  },
  server: {
    host: '0.0.0.0',
    allowedHosts: ['.'],
  },
})
