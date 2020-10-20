import buble from '@rollup/plugin-buble'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import vue from 'rollup-plugin-vue'

export default commandLineArgs => {
  return {
    input: 'src/index.js',
    plugins: [
      vue({
        css: true,
        compileTemplate: true,
        template: {
          isProduction: true,
          optimizeSSR: commandLineArgs.format === 'cjs'
        }
      }),
      buble(),
      commonjs(),
      commandLineArgs.format === 'iife' && terser()
    ],
    output: {
      name: 'VueSkipTo',
      exports: 'named'
    }
  }
}
