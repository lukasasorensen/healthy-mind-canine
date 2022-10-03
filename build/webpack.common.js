'use strict';

let path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        app: ['./client/app/main.js']
    },
    output: {
        path: path.resolve(__dirname, '..', 'dist'),
        filename: '[name].js',
        chunkFilename: '[chunkhash].js',
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            // ES6/7 syntax and JSX transpiling out of the box
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: [/node_modules/, /vendor/]
            },
            {
                test: /\.(ttf|eot)$/,
                loader: 'file-loader',
                options: {
                    prefix: 'font/'
                }
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },

    resolve: {
        extensions: ['.vue', '.js', '.json'],
        mainFiles: ['index'],
        alias: {
            assets: path.resolve(__dirname, '..', 'client', 'assets'),
            '@': path.resolve(__dirname, '..', 'client', 'app')
        }
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '..', 'client/app/index.html')
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, '..', 'client/assets/hmc-social-metatag-image.png'),
                    to: path.resolve(__dirname, '..', 'dist/hmc-social-metatag-image.png')
                }
            ]
        })
    ]
};
