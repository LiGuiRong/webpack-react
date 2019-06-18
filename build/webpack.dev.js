const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackConfig = require('./webpack.base');

module.exports = merge(webpackConfig, {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, '../dist'),
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
})