const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyjsPlugin = require('uglifyjs-webpack-plugin');
const webpackConfig = require('./webpack.base');

module.exports = merge(webpackConfig, {
    mode: 'production',
    devtool: 'cheap-module-source-map',
    optimization: {
        splitChunks: {
            chunks: 'initial',
            cacheGroups: {
                vendor: {
                    test: '/[\\/]node_modules[\\/]/',
                    priority: -10
                },
                common: {
                    minSize: 3000,
                    minChunks: 2,
                    reuseExistingChunk: true
                }
            }
        },
        minimizer: [
            new UglifyjsPlugin({
                cache: true,
                parallel: true
            }),
            new OptimizeCssAssetsPlugin()
        ]
    }
})