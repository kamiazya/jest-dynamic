import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';

export default {
  input: './src/index.ts',
  output: [
    {
      format: 'cjs',
      file: './dist/index.js',
    },
    {
      format: 'esm',
      file: './dist/index.mjs',
    },
  ],
  plugins: [
    typescript(),
    terser()
  ]
}
