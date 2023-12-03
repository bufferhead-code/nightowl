// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'
import { libInjectCss } from 'vite-plugin-lib-inject-css'

export default defineConfig({
    plugins: [
        libInjectCss() // For a simple usage
    ],
    build: {
        lib: {
            // Could also be a dictionary or array of multiple entry points
            entry: resolve(__dirname, 'src/main.ts'),
            name: 'nightowl',
            // the proper extensions will be added
            fileName: 'nightowl'
        },
        rollupOption: {
            output: {
                intro: 'import "./style.css";'
            }
        }
    }
})
