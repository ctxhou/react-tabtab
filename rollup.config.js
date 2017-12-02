// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import flow from 'rollup-plugin-flow';
import uglify from 'rollup-plugin-uglify';
import json from 'rollup-plugin-json';
import visualizer from 'rollup-plugin-visualizer';
import replace from 'rollup-plugin-replace';
import commonjs from 'rollup-plugin-commonjs'

const path = 'dist/react-tabtab';

const name = 'Tabtab';
const globals = {
  'prop-types': 'PropTypes',
  'react-dom': 'ReactDOM',
  react: 'React',
  'react-sortable-hoc': 'SortableHOC',
  'classnames': 'classNames',
  'styled-components': 'styled',
  'react-poppop': 'PopPop'
};

const external = Object.keys(globals);

const prod = process.env.PRODUCTION
const esbundle = process.env.ESBUNDLE

let output;
if (prod) {
  console.log('Creating production UMD bundle...');
  output = {file: path + '.min.js', format: 'umd', name};
} else if (esbundle) {
  console.log('Creating ES modules bundle...');
  output = {file: path + '.es.js', format: 'es'};
}

const plugins = [
  flow(),
  json(),
  resolve({
    browser: true
  }),
  commonjs({
    ignoreGlobal: true,
    exclude: 'src/**'
  }),
  babel({
    babelrc: false,
    presets: [
      ['es2015', { modules: false }],
      'react'
    ],
    plugins: [
      'transform-react-remove-prop-types',
      'transform-flow-strip-types',
      'transform-class-properties',
      'transform-object-rest-spread',
      'external-helpers'
    ]
  })
];

if (prod) {
  plugins.push(
    uglify(),
    visualizer({filename: './bundle-stats.html'}),
    replace({
      'process.env.NODE_ENV': JSON.stringify(prod ? 'production' : 'development'),
    })
  );
}
export default {
  input: 'src/index.js',
  name,
  external,
  exports: 'named',
  output,
  plugins,
  globals: globals,
}
