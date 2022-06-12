import iife from "rollup-plugin-iife";
import { terser } from 'rollup-plugin-terser';

// rollup.config.js
export default {
  input: ['src/index.js'],
  output: [
    {
        file: './dist/fabric.js',
        format: 'iife',
        plugins: [],
    },
    {
        file: './dist/fabric.min.js',
        format: 'iife',
        plugins: [terser()],
    },
  ]
};