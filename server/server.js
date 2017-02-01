var express = require('express');
var path = require('path');
var webpackConfig = require('../webpack.config.js');
var webpack = require('webpack');
var webpackDev = require('webpack-dev-middleware');
var webpackHot = require('webpack-hot-middleware');

var app = express();

var compiler = webpack(webpackConfig);
app.use(webpackDev(compiler, {noInfo: true, publicPath: webpackConfig.output.publicPath}));
app.use(webpackHot(compiler));

app.use(express.static('./dist'));

app.use('/', function (req, res) {
    res.sendFile(path.resolve('client/index.html'));
});

var port = 3000;

app.listen(port, function(error) {
  if (error) throw error;
  console.log("Express server listening on port", port);
});
