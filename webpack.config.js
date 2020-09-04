const path = require("path");

module.exports = {
    mode: 'development',
    entry: "./src/scripts/app.ts",
    module: {
      rules: [
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
    output: {
      path: path.resolve("dist"),
      filename: "test-from-typescript.js",
      publicPath: "/dist"
    },
  };