import buble from '@rollup/plugin-buble'
import { eslint } from 'rollup-plugin-eslint'
import vue from 'rollup-plugin-vue'

export default {
  input: 'src/index.js',
  plugins: [
    eslint({
      include: './src/**'
    }),
    vue({
      css: true,
      compileTemplate: true
    }),
    buble()
  ],
  output: [
    {
      name: 'VueSkipTo',
      file: 'demo-cli/vue-skip-to.js',
      format: 'esm',
      exports: 'named'
    }
  ]
}
