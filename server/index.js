const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server,{cors:{
  origin:["http://localhost:3000"]
}});
const db = require("./Firestore.js");
const bodyParser = require("body-parser");
const uniqid = require("uniqid");
const {
  collection,
  getDocs,
  doc,
  getDoc,
  setDoc,
  Timestamp,
  query,
  limit,
  where,
} = require("firebase/firestore");

const cors = require("cors");
app.use(cors());        
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/all", async (req, res) => {

  const arr = [];
  const querySnapshot = await getDocs(collection(db, "Users"));
  querySnapshot.forEach((doc) => {
    arr.push(doc.data());
  });
  res.send(arr)
});

app.get("/", (req, res) => {
  res.send("hello world\n");
});
app.post("/user", async (req, res) => {
  const a = req.body;
  const id = uniqid();
  await setDoc(doc(db, "Users", id), a);
  res.send(a);
});

io.on("connection", (socket) => {
  // console.log("a user connected");
  socket.on("disconnect", () =>{
    // console.log("disconnect");
    socket.emit("left",{status:"offline"})
  })
  socket.on("message", (obj) =>{
    console.log(obj);
    socket.broadcast.to(obj.id).emit( 'receive', {"sender" : obj.sender , message : obj.message});
  
  })
});

server.listen(5000, () => {
  console.log("listening on *:5000");
});
