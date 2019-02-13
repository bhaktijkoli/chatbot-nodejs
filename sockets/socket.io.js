const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const db = require('./../models');
const Visitor = require('./../mongo/visitor')
const VisitorMessage = require('./../mongo/visitor_message')


io.on('connection', (socket) => {
  socket.on('authenticate', async (data) => {
    var session = data.session;
    var visitor = await Visitor.findOne({session});
    if(visitor) {
      socket.emit('authenticate.successfull');
      socket.on('event.message', async (data) => {
        console.log(session, data);
        var count = await db.Inbox.count({where:{website: visitor.website}});
        count++;
        var inbox = await db.Inbox.create({
          name: 'Visitor'+count,
          website: visitor.website,
          user: 0,
          visitor_session: session,
        })
        var message = VisitorMessage.create({
          user: 0,
          session: session,
          sender: 0,
          message: data.message,
        })
      })
    }
  })
});

server.listen(process.env.SOCKET_SERVER_PORT, () => console.log(`Socket server is listening on port ${process.env.SOCKET_SERVER_PORT}!`))
