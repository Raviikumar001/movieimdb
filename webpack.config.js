// const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin')

// module.exports ={

// 	entry: './app/index.js',
// 	output: {
// 		 path: path.resolve(__dirname,'dist'),
// 		 filename: 'index_bundle.js'
// 	},

// 	module: {
// 		rules: [
 
//         { test:  /\.(js)$/, use: 'babel-loader'},
//         { test: /\.css$/, use: ['style-loader', 'css-loader']}
// 		]
// 	},
// 	mode: 'development',
// 	plugins: [
// 	new HtmlWebpackPlugin({
// 		template: 'app/index.html'
// 	})
// 	]
// }



const path= require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports= {
	
	entry: ['babel-polyfill', './app/index.js'],
	output: {
	path: path.resolve(__dirname, 'dist'),
	filename: 'index_bundle.js'
	},

	module: {
	rules: [
     { test: /\.(js)$/, use: 'babel-loader'},
     {
       test: /\.css$/, use: [ 'style-loader', 'css-loader']
     },
	 { test: /\.svg$/, use: [ { loader: 'svg-url-loader', options: { limit: 10000,},},],},
	]
	},

	mode: 'development',
	plugins: [
     new htmlWebpackPlugin({
      template: 'app/index.html'
     })
	]
}