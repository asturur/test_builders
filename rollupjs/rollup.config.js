import iife from "rollup-plugin-iife";

// rollup.config.js
export default {
  input: 'src/index.js',
  output: {
    dir: 'dist',
    format: 'cjs'
  },
  plugins: [iife()]
};