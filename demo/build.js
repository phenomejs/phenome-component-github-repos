const rollup = require('rollup').rollup;
const buble = require('rollup-plugin-buble');
const commonjs = require('rollup-plugin-commonjs');
const resolve = require('rollup-plugin-node-resolve');
const replace = require('rollup-plugin-replace');

rollup({
  input: './demo/app.src.js',
  plugins: [
    resolve(),
    commonjs(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    buble({
      objectAssign: 'Object.assign',
    }),
  ]
}).then((bundle) => {
  return bundle.write({
    strict: true,
    file: './demo/app.js',
    format: 'iife'
  })
}).catch((error) => {
  console.log(error);
});