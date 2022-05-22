"use strict";

let path = require("path");
let webpack = require("webpack");

const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
	mode: 'development',
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin()
	]
});
