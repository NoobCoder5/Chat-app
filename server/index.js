const express = require('express');
const app = express();

const io = require("socket.io")(8000,{cors:{
    origin:["http://localhost:3000"]
}});

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

io.on('connection', (socket) => {
     
    socket.on("message",(data) => {
       io.emit("data",data);
    })
    socket.on("join", () => {
      socket.join("first")
    })
    socket.on("room", (data) => {
       socket.to("first").emit("take",data);
    })
    
});

  

app.listen(5000, () => {
  console.log('listening on *:3000');
});