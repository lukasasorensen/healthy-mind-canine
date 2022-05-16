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
		chunkFilename: "[chunkhash].js"
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
			// required for font-awesome icons
			{
				test: /\.(woff2?|svg)$/,
				loader: "url-loader",
				options: {
					limit: 10000,
					prefix: "font/"
				}
			},
			{
				test: /\.(ttf|eot)$/,
				loader: "file-loader",
				options: {
					prefix: "font/"
				}
			}
		]
	},

	resolve: {
		extensions: [".vue", ".js", ".json"],
		mainFiles: ["index"],
		alias: {
			"images": path.resolve(__dirname, "..", "client", "images"),
			'vue': '@vue/runtime-dom'
		}
	},
	plugins: [
		new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "..", "client/app/index.html")
        })
	]
};
