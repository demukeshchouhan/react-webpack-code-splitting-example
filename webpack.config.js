const path 						= require("path");
const webpack 					= require("webpack");
const ExtractTextPlugin 		= require("extract-text-webpack-plugin");
const HtmlWebpackPlugin 		= require("html-webpack-plugin");
const BundleAnalyzerPlugin 		= require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const VENDOR_LIBS = [
	"axios", "lodash", "react", "react-dom","react-redux",
	"react-router-dom","redux","redux-thunk"
];


const config = {
	entry : {
		bundle : "./src/index.js",
		vendor : VENDOR_LIBS
	},
	output: {
		path: path.resolve(__dirname, "public"),
		filename : "[name].[chunkhash].js",
		publicPath : "/"
	},
	module: {
		rules: [
			{
				use : "babel-loader",
				test : /\.js$/,
				exclude : /node_modules/
			},
			{
				test : /\.css$/,
				use : ExtractTextPlugin.extract({
					fallback: "style-loader",
					use : ["css-loader"]
				}),
			},
			{
				test : /\.(jpe?g|png|gif|svg)$/,
				use : [
					{
						loader : "url-loader",
						options : {
							limit : 40000
						}
					},
					"image-webpack-loader"
				]
				
			}
		]
	},
	plugins : [
		new ExtractTextPlugin("style.css"),
		new webpack.optimize.CommonsChunkPlugin({
			names : ["vendor", "manifest"]
		}),
		new HtmlWebpackPlugin({
			template : "./src/index.html"
		}),
		new BundleAnalyzerPlugin(),
		new webpack.DefinePlugin({
			"process.env.NODE_ENV" : JSON.stringify(process.env.NODE_ENV)
		})
	],
	devServer: {
		historyApiFallback: true,
		contentBase: './',
		hot: true
	}
}

module.exports = config;