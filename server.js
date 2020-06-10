"use strict";
exports.__esModule = true;
var express = require("express");
var http = require("http");
var WebSocket = require("ws");
var hound = require("hound");
var folder = __dirname + '/static/src'; //this watches a file, but I want to watch a directory instead
var app = express();
app.use(express.static('static'));
app.get('/reload', function (req, res) {
    res.sendFile('index.html');
});
//initialize a simple http server
var server = http.createServer(app);
//initialize the WebSocket server instance
var wss = new WebSocket.Server({ server: server });
wss.on('connection', function (ws) {
    console.log("[Socket Connection -> " + Date.now() + "]");
    // //connection is up, let's add a simple simple event
    // ws.on('message', (message: string) => {
    //
    //
    // });
    // Create a directory tree watcher.
    var watcher = hound.watch(folder);
    watcher.on('create', function (file, stats) {
        console.log(file + ' was created');
        ws.send('reload');
    });
    watcher.on('change', function (file, stats) {
        console.log(file + ' was changed');
        ws.send('reload');
    });
    watcher.on('delete', function (file) {
        console.log(file + ' was deleted');
        ws.send('reload');
    });
});
//start our server
server.listen(3000, function () {
    console.log("Server started on port " + 3000 + " :)");
});
