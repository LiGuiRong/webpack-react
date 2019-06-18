const path = require('path');
const express = require('express');
const webpack = require('webpack');
const WebpackHotMiddleware = require('webpack-hot-middleware');
const WebpackDevMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('./webpack.dev');

const app = express();
const compiler = webpack(webpackConfig);

app.use(WebpackDevMiddleware(compiler, {
    publicPath: '',
    quite: true
}));

app.use(WebpackHotMiddleware(compiler));

app.use('/mock', express.static(path.resolve(__dirname, '../mock')));

app.listen(3002, () => {
    console.log('~~~~~~successfully!~~~~~~');
});
