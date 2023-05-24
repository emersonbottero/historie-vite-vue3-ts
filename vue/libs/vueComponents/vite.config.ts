import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import typescript2 from 'rollup-plugin-typescript2'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue()
    // dts({
    //   insertTypesEntry: true,
    //   exclude: ['*.d.ts']
    // }),
    // typescript2({
    //   check: false,
    //   include: ['src/components/**/*.vue'],
    //   tsconfigOverride: {
    //     compilerOptions: {
    //       outDir: 'dist',
    //       removeComments: false,
    //       declaration: true
    //     }
    //   },
    //   exclude: ['vite.config.ts']
    // })
  ],
  build: {
    cssCodeSplit: true,
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, './main.ts'),
      name: 'VueLib',
      fileName: 'vue-lib',
      formats: ['es']
    },
    target: 'esnext',
    outDir: 'dist/vue',
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      input: {
        main: path.resolve(__dirname, './main.ts')
      },
      external: ['vue'],
      output: {
        // assetFileNames: (assetInfo) => {
        //   if (assetInfo.name === 'main.css') return 'my-library-vue-ts.css';
        //   return assetInfo.name;
        // },
        // exports: "named",
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
