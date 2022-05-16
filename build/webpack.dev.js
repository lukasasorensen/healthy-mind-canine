"use strict";

let path = require("path");
let webpack = require("webpack");

const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"]
			},
			{
				test: /\.vue$/,
				loader: "vue-loader"
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin()
	]
});
