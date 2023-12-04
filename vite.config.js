// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'
import { libInjectCss } from 'vite-plugin-lib-inject-css'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)

export default defineConfig({
    plugins: [
        libInjectCss() // For a simple usage
    ],
    build: {
        lib: {
            // Could also be a dictionary or array of multiple entry points
            entry: resolve(path.dirname(__filename), 'src/main.ts'),
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
