"use strict";

let path = require("path");
let webpack = require("webpack");
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		app: ["./client/app/main.js"],
	},
	output: {
		path: path.resolve(__dirname, "..", "dist"),
		filename: "[name].js",
		chunkFilename: "[chunkhash].js",
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			},
			// ES6/7 syntax and JSX transpiling out of the box
			{
				test: /\.js$/,
				loader: "babel-loader",
				exclude: [/node_modules/, /vendor/]
			},
			{
				test: /\.(ttf|eot)$/,
				loader: "file-loader",
				options: {
					prefix: "font/"
				}
			},
			{
				test: /\.scss$/,
				use: [
					"style-loader", 
					"css-loader", 
					"postcss-loader", 
					"sass-loader"
				]
			},
			{
				test: /\.vue$/,
				loader: "vue-loader"
			}
		],
	},

	resolve: {
		extensions: [".vue", ".js", ".json"],
		mainFiles: ["index"],
		alias: {
			"assets": path.resolve(__dirname, "..", "client", "assets"),
			'@': path.resolve(__dirname, "..", "client", "app")
		}
	},
	plugins: [
		new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "..", "client/app/index.html")
        })
	]
};
