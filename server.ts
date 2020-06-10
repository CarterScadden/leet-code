import * as express from 'express';
import * as http from 'http';
import * as WebSocket from 'ws';
import * as fs from 'fs';
import * as hound from 'hound';

const folder = __dirname + '/static/src' //this watches a file, but I want to watch a directory instead

const app = express();
app.use(express.static('static'));

app.get('/reload', (req, res) => {
  res.sendFile('index.html');
});

//initialize a simple http server
const server = http.createServer(app);

//initialize the WebSocket server instance
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws: WebSocket) => {
  console.log(`[Socket Connection -> ${Date.now()}]`);
    // //connection is up, let's add a simple simple event
    // ws.on('message', (message: string) => {
    //
    //
    // });



    // Create a directory tree watcher.
    const watcher = hound.watch(folder);

    watcher.on('create', function(file, stats) {
      console.log(file + ' was created')
      ws.send('reload')
    })
    watcher.on('change', function(file, stats) {
      console.log(file + ' was changed')
      ws.send('reload')
    })
    watcher.on('delete', function(file) {
      console.log(file + ' was deleted')
      ws.send('reload')
    });
});

//start our server
server.listen(3000, () => {
    console.log(`Server started on port ${3000} :)`);
});
