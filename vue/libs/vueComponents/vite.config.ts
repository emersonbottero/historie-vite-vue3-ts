import { resolve } from 'path'
import { defineConfig } from 'vite'
import baseConfig from ' ../../vite.config'

// https://vitejs.dev/config/
export default defineConfig({
  ...baseConfig,
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, './main.ts'),
      name: 'Vue Library',
      // the proper extensions will be added
      fileName: 'vue-lib',
      formats: ['es']
    },
    outDir: 'dist/vue',
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
