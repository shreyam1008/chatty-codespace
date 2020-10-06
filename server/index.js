const express = require("express");
const socketio = require("socket.io");
const http = require("http");

const PORT = process.env.PORT || 5000;

const router = require("./router");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

//socket.io code

io.on("connection", (socket) => {
  console.log("we have a connection to socket");
  socket.in("join", ({ name, room }) => {
    console.log(name, room);
  });

  socket.on("disconnect", () => {
    console.log("user left");
  });
});

app.use(router);

server.listen(PORT, () => console.log("server started yeppie "));
