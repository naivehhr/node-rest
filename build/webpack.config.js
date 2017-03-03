const webpack = require('webpack');

module.exports = {
	entry: './app.js',
	output: {
		path: __dirname,
		filename: 'bundle.js',
		publicPath: "/assets/"
	},
	resolve: {                                      // resolve 指定可以被 import 的文件后缀
    extensions: ['', '.js', '.jsx']
  },
	module: {
		loaders: [
      {test: /\.css$/, loader: 'style-loader!css-loader'},
			{
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          // 'react-hot',
          'babel'
        ]
      }
    ]
	},
	plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}