import webpack from 'webpack';
import config from './webpack.config';

const devConfig: webpack.Configuration = {
  ...config,
  mode: 'development',
  devtool: 'source-map',
  // @ts-ignore
  devServer: {
    open: true,
    port: 3000,
  },
};

export default devConfig;
