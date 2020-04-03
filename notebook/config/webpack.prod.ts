import webpack from 'webpack';
import path from 'path';
import TerserJSPlugin from 'terser-webpack-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import config from './webpack.config';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

// bundle analyser
// const plugins = config.plugins?.concat([
//   new BundleAnalyzerPlugin(),
//   new CleanWebpackPlugin(),
// ]);

const plugins = config.plugins?.concat(new CleanWebpackPlugin());

const prodConfig: webpack.Configuration = {
  ...config,
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    chunkIds: 'named',
    mergeDuplicateChunks: true,
    minimizer: [
      new TerserJSPlugin({
        parallel: true,
        extractComments: true,
        cache: true,
        sourceMap: true,
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
    minimize: true,
    namedChunks: true,
    removeEmptyChunks: true,
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/](react|react-dom|spectacle|react-router-dom|he)[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
  },
  output: {
    filename: '[name].[hash].bundle.js',
    chunkFilename: '[name].[hash].bundle.js',
    path: path.resolve(__dirname, '../../build'),
  },
  plugins,
};

export default prodConfig;
