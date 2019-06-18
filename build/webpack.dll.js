const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'production',
    entry: {
        react: ['react', 'react-dom', 'react-router-dom']
    },
    output: {
        path: path.resolve(__dirname, '../dll'),
        filename: '[name].dll.js',
        library: '[name]'
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.resolve(__dirname, '..', 'dll/[name]-manifest.json'),
            name: '[name]'
        })
    ]
}