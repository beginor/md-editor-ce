import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    base: './',
    plugins: [
        vue({
            features: {
                customElement: true
            }
        })
    ],
    esbuild: {
        legalComments: 'none' // 移除所有注释，包括 license
    },
    build: {
        rollupOptions: {
            input: {
                'editor': 'src/editor.ts',
                'preview': 'src/preview.ts',
            },
            output: {
                format: 'esm',
                entryFileNames: "[name].js"
            }
        }
    }
})
