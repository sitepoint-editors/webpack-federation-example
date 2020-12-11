const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  output: {
    publicPath: "http://localhost:8082/",
  },

  resolve: {
    extensions: [".jsx", ".js", ".json"],
  },

  devServer: {
    port: 8082,
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
      new ModuleFederationPlugin({
        name: 'basket',
        library: {
          type: 'var', name: 'basket'
        },
        filename: 'remoteEntry.js',
        exposes: {
          './Basket': './src/Basket'
        },
        shared: require('./package.json').dependencies
      })
  ],
};
