const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = (env) => {
  const isProduction = env === "production"
  
  console.log("env: ", env);
  return {
    entry: "./src/app.js",
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js'
    },
    mode: "development",
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/
      }, {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      }]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "styles.css"
      })
    ],
    devtool: isProduction ? "source-map" : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true
    }
  }
}