import webpack from 'webpack';
import path from 'path';
import config from './webpack.config';

const devConfig: webpack.Configuration = {
  ...config,
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, '../dev-build'),
    filename: 'dev-build.js',
    publicPath: '/',
  },
  // @ts-ignore
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
};

export default devConfig;
