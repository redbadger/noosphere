import webpack from 'webpack';
import path from 'path';
import config from './webpack.config';

const prodConfig: webpack.Configuration = {
  ...config,
  mode: 'development',
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'bundle.js',
  },
};

export default prodConfig;
