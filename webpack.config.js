var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var postcssOptions = {
  plugins: function() {
    return [
      require('postcss-cssnext')
    ]
  }
}

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css']
  },

  entry: {
    app: [
      'babel-polyfill',
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      'react-hot-loader/patch',
      './app/index.jsx'
    ]
  },

  output: {
    filename: 'js/[name]-[hash:8].js',
    path: path.join(__dirname, 'server/public'),
    publicPath: '/'
  },

  // inline-source-map
  // eval-source-map
  // hidden-source-map
  // cheap-source-map
  // cheap-module-source-map
  // eval
  devtool: 'source-map',
  target: 'web',
  context: __dirname,

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, 'app'),
        loader: 'eslint-loader',
        enforce: 'pre' // Replaces preLoaders
      },

      {
        test: /\.jsx?$/,
        include: path.join(__dirname, 'app'),
        loader: 'babel-loader',
        query: {
          cacheDirectory: true // ?
          // presets: ['es2015', 'stage-0', 'react'],
          // plugins: ['react-hot-loader/babel']
        }
      },

      {
        test: /\.json$/,
        loader: 'json-loader'
      },

      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          { loader: 'postcss-loader', options: postcssOptions }
        ]
      }
    ]
  },

  plugins: [
    new webpack.NamedModulesPlugin(), // Making update messages look nicer - https://github.com/ericclemmons/webpack-hot-server-example/pull/7
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      hash: false,
      template: './index.html'
    })
  ]
}

// https://github.com/webpack/extract-text-webpack-plugin/issues/265
// https://github.com/postcss/postcss-loader
// https://github.com/postcss/postcss-loader/issues/99
