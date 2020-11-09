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
  input: './src/insistence.js',
  output: [
    Option({
      file: './dist/insistence.js',
      format: 'commonjs',
    }),
    Option({
      file: './dist/insistence.esm.js',
      format: 'esm',
    }),
    Option({
      file: './dist/insistence.mjs',
      format: 'esm',
    }),
    Option({
      file: './dist/insistence.umd.js',
      name: 'Insistence',
      format: 'umd',
    }),
    Option({
      file: './dist/insistence.umd.min.js',
      name: 'Insistence',
      format: 'umd',
      plugins: [terser()],
    }),
  ],
};

export default options;
