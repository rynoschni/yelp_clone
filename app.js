'use strict';
const http = require('http');

const hostname = '127.0.0.1';
const port = 3333;

const express = require('express');
const es6Renderer = require('express-es6-template-engine');
const app = express();
const path = require('path');

app.engine("html", es6Renderer);
app.set('views', './views');
app.set('view engine', 'html');
// app.use('images','./images');

app.use(express.static(path.join(__dirname, "public"))); //bullet proof needs path library
// app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`)
});

const rootController = require('./routes/index');
const locationController = require('./routes/business')
const userController = require('./routes/users');

app.use('/', rootController); //<- ROOT route
app.use('/business', locationController);
app.use('/user', userController);