import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        vue({
            template: {
                compilerOptions: {
                    // 将所有带短横线的标签名都视为自定义元素
                    isCustomElement: (tag) => tag.includes('-')
                }
            }
        })
    ],
    esbuild: {
        legalComments: 'none' // 移除所有注释，包括 license
    },
    build: {
        rollupOptions: {
            input: {
                'main': 'src/main.ts'
            },
            output: {
                format: 'esm',
                entryFileNames: "[name].js"
            }
        }
    }
})
