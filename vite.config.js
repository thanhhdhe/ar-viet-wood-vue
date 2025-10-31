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
})
