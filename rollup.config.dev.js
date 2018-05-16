import resolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'
import VueLoader from 'rollup-plugin-vue'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import babel from 'rollup-plugin-babel'
import eslint from 'rollup-plugin-eslint'
import chokidar from 'chokidar'

export default {
  input: 'src/index.js',
  watch: {
    chokidar,
    include: ['src/**']
  },
  plugins: [
    eslint({
      include: './src/**'
    }),
    babel({
      exclude: './node_modules/**'
    }),
    resolve(),
    VueLoader(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    serve({
      verbose: false,
      contentBase: 'demo',
      historyApiFallback: true
    }),
    livereload({
      watch: 'demo'
    })
  ],
  output: [
    {
      name: 'VueSkipTo',
      file: 'vue-skip-to.js',
      format: 'umd'
    }
  ]
}
