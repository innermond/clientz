const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = process.env.port || 3000;
const publicPath = '/';

module.exports = {
	mode: 'development',
	entry: {
		app: './src/index.js'
	},
	output: {
		filename: '[name].js',
		chunkFilename: '[id].js',
		publicPath: publicPath
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
		new webpack.HotModuleReplacementPlugin(),
		new webpack.DefinePlugin({
			'process.env.PUBLIC_URL': JSON.stringify(publicPath)
		})
	],
	devServer: {
		host: 'localhost',
		port: port,
		historyApiFallback: true,
		hot: true
	}
};
