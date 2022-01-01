import { io } from "socket.io-client";

export const socket = io("http://localhost:5000");
socket.on("connect", () => {
  socketID = socket.id;
});
socket.on("receive", (data) => {
  // console.log(data);
});

export let socketID = "";
export const set_id = (user) => {
  const a = JSON.parse(localStorage.getItem(user));
  const obj2 = { status: "online" };
  const obj = a[0];
  const id = { id: socket.id };
  const newarr = [obj, id, obj2];
  localStorage.setItem(user, JSON.stringify(newarr));
};
