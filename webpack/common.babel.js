import CopyWebpackPlugin from "copy-webpack-plugin";
import HtmlWebPackPlugin from "html-webpack-plugin";
import { ProvidePlugin } from "webpack";
import { resolve } from "path";
import _package from "../package";

module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_module/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: {
          loader: "html-loader",
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: {
          loader: "file-loader",
        },
      },
    ],
  },
  output: {
    filename: "bundle.js",
    path: resolve(__dirname, "..", "dist", _package.version),
    publicPath: "",
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: resolve(__dirname, "..", "./assets/images"),
          to: "images",
        },
        {
          from: resolve(__dirname, "..", "./src/favicon.ico"),
          to: "favicon.ico",
        },
      ],
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
    new ProvidePlugin({
      Buffer: ["buffer", "Buffer"],
    }),
    new ProvidePlugin({
      process: "process/browser",
    }),
  ],
  resolve: {
    extensions: ["*", ".js", ".jsx"],
    fallback: {
      buffer: require.resolve("buffer/"),
      http: require.resolve("stream-http"),
      https: require.resolve("https-browserify"),
      stream: require.resolve("stream-browserify"),
      timers: require.resolve("timers-browserify"),
      url: require.resolve("url/"),
    },
  },
};
