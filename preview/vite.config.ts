import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
    plugins: [vue()],
    css: {
        preprocessorOptions: {
            scss: {
                // Use Sass modern JS API to eliminate legacy warnings
                api: 'modern',
            },
            sass: {
                api: 'modern',
            },
        },
    },
    server: {
        host: '0.0.0.0',
    },
})
