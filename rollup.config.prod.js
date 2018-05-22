import resolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'
import VueLoader from 'rollup-plugin-vue'
// import butternut from 'rollup-plugin-butternut'
import buble from 'rollup-plugin-buble'

export default {
  input: 'src/index.js',
  plugins: [
    VueLoader({
      compileTemplate: true
    }),
    buble({
      objectAssign: 'Object.assign',
      jsx: 'h'
    }),
    // butternut(),
    resolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
  output: [
    {
      file: 'dist/vue-skip-to.cjs.js',
      format: 'cjs'
    },
    {
      file: 'dist/vue-skip-to.es.js',
      format: 'es'
    },
    {
      file: 'dist/vue-skip-to.amd.js',
      format: 'amd'
    },
    {
      name: 'VueSkipTo',
      file: 'dist/vue-skip-to.js',
      format: 'umd'
    }
  ]
}
