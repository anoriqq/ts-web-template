const path = require('path');

module.exports = {
  mode: 'development',
  target: 'node',
  node: {
    __dirname: false,
    __filename: false,
  },
  devtool: 'source-map',
  entry: {
    'bundle.js': path.resolve(__dirname, 'src/index.ts'),
  },
  output: {
    path: path.resolve(__dirname, './build/server'),
    filename: '[name]',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        // commons: {
        //   test: /[\\/]node_modules[\\/]/,
        //   name: 'vendors',
        //   chunks: 'all',
        // },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
      },
    },
  },
  module: {
    exprContextCritical: false,
    rules: [
      // {
      //   test: /\.ts$/,
      //   enforce: 'pre',
      //   exclude: /(node_modules|dist)/,
      //   loader: 'eslint-loader',
      //   options: {
      //     fix: true,
      //     cache: true,
      //     emitError: true,
      //   },
      // },
      {
        test: /\.ts$/,
        exclude: /(node_modules|dist)/,
        loader: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [],
};
