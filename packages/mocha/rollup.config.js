import typescript from 'rollup-plugin-typescript'

export default {
  entry: './src/index.ts',
  dest: 'index.js',
  format: 'umd',
  moduleName: 'app',
  plugins: [
    typescript()
  ]
}
