import webpack from 'webpack';
import path from 'path';
import config from './webpack.config';

const prodConfig: webpack.Configuration = {
  ...config,
  mode: 'production',
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, '../build'),
  },
};

export default prodConfig;
