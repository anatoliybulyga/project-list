const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const dotenv = require("dotenv");
const webpack = require("webpack");

const env = dotenv.config().parsed;

const envKeys = Object.keys(env || {}).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"), // Output to "dist" directory
    filename: "bundle.js",
    publicPath: "/", // Serve all assets from the root path
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      react: require.resolve("react")
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html") // Path to your "index.html" template
    }),
    new webpack.DefinePlugin(envKeys) // Pass only required environment variables
  ],
  devServer: {
    static: "./dist",
    hot: true,
    port: 3000,
    historyApiFallback: true
  }
};
