const path = require('path');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const port = process.env.port || 3000;
const publicPath = '/';

module.exports = {
	mode: 'production',
	entry: {
		//vendor: ['react'],
		app: './src/index.js'
	},
	output: {
		filename: '[name].[hash].js',
		chunkFilename: '[id].[hash].js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: publicPath
	},
	devtool: 'source-map',
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
							sourceMap: true,
							importLoaders: 1
						},
					},
					{
						loader: 'postcss-loader',
						options: {
							ident: 'postcss',
							plugins: () => [
								autoprefixer({browsers: ['> 1%', 'last 2 versions']})
							]
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
	optimization: {
		runtimeChunk: false,
    splitChunks: { chunks: 'all' }
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'public/index.html',
			favicon: 'public/favicon.ico',
			inject: true,
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				conservativeCollapse: false,
				preserveLineBreaks: false
			}
		}),
		new ExtractTextPlugin({
			filename: 'styles/styles.[hash].css',
			allChunks: true
		}),
		new webpack.DefinePlugin({
			'process.env.PUBLIC_URL': JSON.stringify(publicPath)
		}),
		new CompressionPlugin({
			asset: '[path].gz[query]',
			algorithm: 'gzip',
			test: /\.js$|\.css$|\.html$/,
			threshold: 0,
			minRation: 0.8
		})
	],
};
