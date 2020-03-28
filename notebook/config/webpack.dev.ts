/* eslint-disable import/no-extraneous-dependencies */
import webpack from 'webpack';
import path from 'path';
import config from './webpack.config';

const devConfig: webpack.Configuration = {
  ...config,
  mode: 'development',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, '../dev-build'),
    filename: 'dev-build.js',
  },
  // @ts-ignore
  devServer: {
    open: true,
    port: 3000,
  },
};

export default devConfig;
