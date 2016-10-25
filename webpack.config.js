var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: {
    app: [
      'babel-polyfill',
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      './app/index.jsx'
    ]
  },

  output: {
    path: path.join(__dirname, 'server/public'),
    filename: 'js/[name]-[chunkhash:8].js',
    publicPath: '/'
  },

  devtool: 'source-map',

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, 'app'),
        loader: 'babel-loader',
        query: {
          'presets': ['es2015', 'stage-0', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader'
      }
    ]
  },

  plugins: [
    new webpack.NamedModulesPlugin(), // https://github.com/ericclemmons/webpack-hot-server-example/pull/7
    new webpack.HotModuleReplacementPlugin(),
    new webpack.LoaderOptionsPlugin({
      test: /\.css$/,
    })
  ]
}


// https://github.com/webpack/extract-text-webpack-plugin/issues/265
// https://github.com/postcss/postcss-loader
// https://github.com/postcss/postcss-loader/issues/99

var postcssOptions =  {
  plugins: function() {
    return [
      require('autoprefixer')
    ]
  }
}

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
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
  }
}
