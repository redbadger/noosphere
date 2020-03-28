/* eslint-disable import/no-extraneous-dependencies */
import webpack from 'webpack';
import path from 'path';
import TerserJSPlugin from 'terser-webpack-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import config from './webpack.config';

const prodConfig: webpack.Configuration = {
  ...config,
  mode: 'production',
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, '../build'),
  },
};

export default prodConfig;