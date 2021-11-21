import { terser } from 'rollup-plugin-terser';

/**
 * Creates an output options object.
 * @param {import('rollup').OutputOptions} options
 * @returns {import('rollup').OutputOptions}
 */
const Option = (options) => ({
  exports: 'default',
  sourcemap: true,
  ...options,
});

/**
 * An object with all configuration for `Rollup.js`.
 * @type {import('rollup').RollupOptions}
 */
const options = {
  input: './src/insist.js',
  output: [
    Option({
      file: './dist/insist.js',
      format: 'commonjs',
    }),
    Option({
      file: './dist/insist.esm.js',
      format: 'esm',
    }),
    Option({
      file: './dist/insist.mjs',
      format: 'esm',
    }),
    Option({
      file: './dist/insist.umd.js',
      name: 'insist',
      format: 'umd',
    }),
    Option({
      file: './dist/insist.umd.min.js',
      name: 'insist',
      format: 'umd',
      plugins: [terser()],
    }),
  ],
};

export default options;
