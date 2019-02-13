var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
io.on('connection', function(socket){
  console.log('a user connected');
});

server.listen(process.env.SOCKET_SERVER_PORT, () => console.log(`Socket server is listening on port ${process.env.SOCKET_SERVER_PORT}!`))
