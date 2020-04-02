import webpack from 'webpack';
import path from 'path';
import TerserJSPlugin from 'terser-webpack-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import config from './webpack.config';

const prodConfig: webpack.Configuration = {
  ...config,
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    minimizer: [new TerserJSPlugin({ parallel: true,  extractComments: true,  cache: true,}), new OptimizeCSSAssetsPlugin({})],
    minimize: true,
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/](react|react-dom|spectacle|react-router-dom)[\\/]/,
          name: 'vendor',
          chunks: 'all',
        }
      }
    },
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, '../build'),
    publicPath: '/',
  },
};

export default prodConfig;
