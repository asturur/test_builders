import iife from "rollup-plugin-iife";
import { terser } from 'rollup-plugin-terser';
import babel, { getBabelOutputPlugin } from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';

// rollup.config.js
export default {
  input: ['src/index.js'],
  output: [
    {
        file: './dist/fabric.js',
        format: 'iife',
        plugins: [getBabelOutputPlugin({
            allowAllFormats: true,
            "presets": ["@babel/env"],
            "targets": {
              "chrome": "60"
            }
          }),
        ],
    },
    {
        file: './dist/fabric.min.js',
        format: 'iife',
        plugins: [
            getBabelOutputPlugin({
              allowAllFormats: true,
              "presets": ["@babel/env"],
              "targets": {
                "chrome": "60"
              }
            }),
            terser(),
          ],
    },
    {
        file: './dist/fabric.min.old.js',
        format: 'iife',
        plugins: [
          getBabelOutputPlugin({
            allowAllFormats: true,
            "presets": ["@babel/env"],
            "targets": {
              "ie": "11"
            }
          }),
          terser(),
        ],
    },
  ],
  plugins: [
    replace({
        'process.env.WITH_SVG_EXPORT': JSON.stringify(Boolean(process.env.SVG_EXPORT)),
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
  ],
};