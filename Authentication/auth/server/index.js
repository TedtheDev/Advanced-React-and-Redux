// Main starting point of our application
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');
const config = require('./config/config');

// DB Setup
mongoose.connect(config.mongdb.url);

// App setup
app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*'} ));
router(app);

// Server setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:' + port);


// another way to start server
/*
// this is the same as http.createServer
// but express has this function built in
// to create the server
app.listen(() => {
    console.log('Server listening on: ' + port);
})
*/