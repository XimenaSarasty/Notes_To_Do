import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    build: {
        outDir: 'public', 
        rollupOptions: {
          input: 'resources/css/app.css',
          output: {
            entryFileNames: 'css/app.css',
          },
        },
      },
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        vue(), 
    ],
});
