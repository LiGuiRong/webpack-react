const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        index: path.resolve(__dirname, '..', 'src/index.js')
    },
    output: {
        filename: '[name].[hash:8].js',
        path: path.resolve(__dirname, '..', 'dist')
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                loader: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader'
                ],
                exclude: /node_modules/,
                include: path.resolve(__dirname, '..', 'src/')
            },
            {
                test: /\.(png|jpg|svg|gif|jpeg)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        outputPath: 'images/',
                        limit: 3 * 1024
                    }
                }
            },
            {
                test: /\.(eot|woff2?|ttf|svg)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: '[name].[hash:8].min.[ext]',
                        limit: 5000,
                        outputPath: 'fonts/'
                    }
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.DllReferencePlugin({
            manifest: path.resolve(__dirname, '..', 'dll/react-manifest.json')
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '..', 'src/index.html'),
            filename: 'index.html'
        }),
        new AddAssetHtmlWebpackPlugin({
            filepath: path.resolve(__dirname, '..', 'dll/react.dll.js')
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            outputPath: 'css/',
            chunkFilename: '[id].css'
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            "@": path.resolve(__dirname, 'src')
        }
    }
}