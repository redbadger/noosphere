import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
// eslint-disable-next-line no-unused-vars
import webpack from 'webpack';

// Customized babel loader with the minimum we need to get `mdx` libraries
// working, which unfortunately codegen JSX instead of JS.
const babelLoader = {
  loader: require.resolve('babel-loader'),
  options: {
    // Use user-provided .babelrc
    babelrc: true,
    // ... with some additional needed options.
    presets: [require.resolve('@babel/preset-react')],
  },
};

/**
 * Base configuration for the CLI, core, and examples.
 */
const config: webpack.Configuration = {
  mode: 'development',
  context: __dirname,
  entry: './index.tsx',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'example.js',
  },
  devtool: 'source-map',
  module: {
    // Not we use `require.resolve` to make sure to use the loader installed
    // within _this_ project's `node_modules` traversal tree.
    rules: [
      {
        test: /\.jsx?$/,
        use: [babelLoader],
      },
      // `.md` files are processed as pure text.
      {
        test: /\.md$/,
        use: [require.resolve('raw-loader')],
      },
      // `.mdx` files go through babel and mdx transforming loader.
      {
        test: /\.mdx$/,
        use: [babelLoader, require.resolve('spectacle-mdx-loader')],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [require.resolve('file-loader')],
      },
      { test: /\.(ts|tsx)$/, exclude: /node_modules/, loader: 'ts-loader' },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Spectacle MDX Development Example',
      template: './index.html',
    }),
  ],
  resolve: {
    alias: {
      // Add helper aliases needed when `yarn link spectacle` development
      // is enabled to avoid duplicate libs that require singletons.
      react: require.resolve('react'),
      'react-dom': require.resolve('react-dom'),
    },
  },
};

export default config;
