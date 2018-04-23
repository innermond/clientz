const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = process.env.port || 3000;

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		filename: 'app.[hash].js',
		chunkFilename: '[name].[id].js',
	},
	devtool: 'inline-source-map',
	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
			Containers: path.resolve(__dirname, 'src/containers/'),
			Components: path.resolve(__dirname, 'src/components/'),
			Assets: path.resolve(__dirname, 'src/assets/'),
			Hoc: path.resolve(__dirname, 'src/hoc/')
		}
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader',
						options: {
							modules: true,
							localIdentName: '[name]_[local]_[hash:base64:5]',
							camelCase: true,
							sourceMap: true
						}
					}
				],
				exclude: /node_modules/
			},
			{
				test: /\.scss$/,
				use: [
					{loader: 'style-loader'},
					{
						loader: 'css-loader',
						options: {
							modules: true,
							localIdentName: '[name]_[local]_[hash:base64:5]',
							camelCase: true,
							sourceMap: true
						}
					},
					{loader: 'sass-loader'}
				]
			}
		]	
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'public/index.html',
			favicon: 'public/favicon.ico',
			inject: true
		}),
		new webpack.HotModuleReplacementPlugin()
	],
	devServer: {
		host: 'localhost',
		port: port,
		historyApiFallback: true,
		open: true,
		hot: true
	}
};
