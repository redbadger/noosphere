import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const entry = path.resolve(__dirname, '../src/index.tsx');

// Customized babel loader with the minimum we need to get `mdx` libraries
// working, which unfortunately codegen JSX instead of JS.
const babelLoader = {
  loader: require.resolve('babel-loader'),
  options: {
    // Use user-provided .babelrc
    babelrc: true,
    // ... with some additional needed options.
    presets: [require.resolve('@babel/preset-react')],
    plugins: [require.resolve('@babel/plugin-syntax-dynamic-import')],
  },
};

/**
 * Base configuration for the CLI, core, and examples.
 */
const config: webpack.Configuration = {
  entry,
  module: {
    // Not we use `require.resolve` to make sure to use the loader installed
    // within _this_ project's `node_modules` traversal tree.
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(js|jsx)?$/,
        use: [babelLoader],
      },
      // `.md` files are processed as pure text.
      {
        test: /\.md$/,
        use: [require.resolve('raw-loader')],
      },
      // `.mdx` files go through babel and mdx transforming loader.
      // {
      //   test: /\.mdx$/,
      //   use: [babelLoader, require.resolve('spectacle-mdx-loader')],
      // },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [require.resolve('file-loader')],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [babelLoader, { loader: 'ts-loader' }],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'MHRA Transformation Academy',
      template: path.resolve(__dirname, '../src/index.html'),
      favicon: path.resolve(__dirname, '../assets/mhra-logo.svg'),
    }),
  ],
  resolve: {
    alias: {
      // Add helper aliases needed when `yarn link spectacle` development
      // is enabled to avoid duplicate libs that require singletons.
      react: require.resolve('react'),
      'react-dom': require.resolve('react-dom'),
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.md', '.json'],
  },
  target: 'web',
};

export default config;
