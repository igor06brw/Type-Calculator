const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: "./src/scripts/app.ts",
    plugins: [
      new MiniCssExtractPlugin(),
    ],
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        },
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: [/node_modules/],
        }
      ]
    },
    devtool: 'inline-source-map',
    resolve: {
      extensions: [ '.tsx', '.ts', '.js' ],
    },
    stats: {
      colors: true
    },
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 9000,
      writeToDisk: true
    },
    output: {
      path: path.resolve("dist"),
      filename: "test-from-typescript.js",
      publicPath: "/dist"
    },
  };