const webpack = require('webpack');
const webpackConfig = require('./webpack.prod');

webpack(webpackConfig, (err, stats) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(stats.toString({
        chunks: false,
        colors: true
    }));
});
