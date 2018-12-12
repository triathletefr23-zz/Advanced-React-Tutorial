'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _config = require('./config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_express2.default.static('public'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('index', { answer: 25 });
});

app.listen(_config.port, function listenHandler() {
    console.info('Running on ' + _config.port);
});