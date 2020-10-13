const express = require("express");
const socketio = require("socket.io");
const http = require("http");

const {addUser, removeUser, getUser, getUsersInRoom} = require('./users.js')

const PORT = process.env.PORT || 5000;

const router = require("./router");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

//socket.io code
io.on("connection", (socket) => {
  console.log("we have a connection to socket");
  socket.on("join", ({ name, room }, callback) => {
    const {error, user } = addUser({id: socket.id, name, room})
    //if error. like username clash
    if (error) return callback(error)
    //admin message
    socket.emit(
      'message',
     {user:"admin", 
     text: `${user.name}, hello there general kenobi to ${user.room}`}
     )

     
     
    socket.join(user.room)

  });

  socket.on("disconnect", () => {
    console.log("user leftAAA");
  }); 
});

app.use(router);

server.listen(PORT, () => console.log("server started yeppie "));
