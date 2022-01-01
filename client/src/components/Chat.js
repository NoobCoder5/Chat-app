import React, { useState, useEffect } from "react";
import Person from "./Person";
import Message from "./Message";
import { arr_message } from "../Redux/Action";
import { socket, set_id } from "./Socket";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { receiver } from "../Redux/Action";
import "./style.css";
const Chat = () => {
  const user = useSelector((state) => state.user);
  const [messages, setmessages] = useState([]);
  const dispatch = useDispatch();
  const friends = useSelector((state) => state.array);
  const object = useSelector((state) => state.receiver);
  // const messages = useSelector((state) => state.message_array);

  const [message, setmessage] = useState("");
  const [a, seta] = useState("");

  useEffect(() => {
    set_id(user);
  }, [a]);
  function populate(d) {
    const y = JSON.parse(localStorage.getItem(user));
    const z = y[3];
    setmessages(z[d]);
  }

  function send_message(e) {
    e.preventDefault();

    const array = JSON.parse(localStorage.getItem(user));
    const obj1 = array[0];
    const obj2 = array[1];
    const obj3 = array[2];
    const obj = {};
    const sended_message = { sender: "me", message: message, id: object.id };
    if (array[3]) {
      const a = array[3];
      const obj = { ...a };

      if (obj[object.name]) {
        const x = a[object.name];
        const newobj = [...x, sended_message];
        obj[object.name] = newobj;
        const newarr = [obj1, obj2, obj3, obj];
        localStorage.setItem(user, JSON.stringify(newarr));
      } else {
        obj[object.name] = [sended_message];
        const newarr = [obj1, obj2, obj3, obj];
        localStorage.setItem(user, JSON.stringify(newarr));
      }
    } else {
      obj[object.name] = [sended_message];
      const newarr = [obj1, obj2, obj3, obj];
      localStorage.setItem(user, JSON.stringify(newarr));
    }

    socket.emit("message", {
      sender: user,
      message: message,
      id: object.id,
      receiver: object.name,
    });
    setmessage("");
    populate(object.name);
  }
  useEffect(() => {
    socket.on("receive", (data) => {
      console.log("received");
      const array = JSON.parse(localStorage.getItem(user));
      const obj1 = array[0];
      const obj2 = array[1];
      const obj3 = array[2];
      let obj = {};

      if (array[3]) {
        const obj = { ...array[3] };
        console.log("befrore");

        if (obj[data.sender]) {
          console.log("true");
          const x = obj[data.sender];
          const newobj = [...x, data];
          obj[data.sender] = newobj;

          const newarr = [obj1, obj2, obj3, obj];
          localStorage.setItem(user, JSON.stringify(newarr));
        } else {
          console.log("False");
          obj[data.sender] = [data];

          const newarr = [obj1, obj2, obj3, obj];
          localStorage.setItem(user, JSON.stringify(newarr));
        }
      } else {
        console.log("False");
        obj[data.sender] = [data];

        const newarr = [obj1, obj2, obj3, obj];
        localStorage.setItem(user, JSON.stringify(newarr));
      }
      populate(data.sender);
    });
  }, [user]);
  return (
    <>
      <div className="flex h-5/6 p-3 justify-evenly  items-center  flex-row">
        <div className="h-full">
          <ul className=" p-2 px-6 remove-bars h-full overflow-auto border-solid border rounded-lg border-gray-700 divide-y divide-gray-700">
            {friends
              ? friends[0].friends.map((e) => {
                  return (
                    <a
                      onClick={() => {
                        if (localStorage.getItem(e)) {
                          const arr = JSON.parse(localStorage.getItem(e));
                          const id = arr[1].id;
                          dispatch(receiver({ name: e, id: id }));
                          const array = JSON.parse(localStorage.getItem(user));
                          if (array[3]) {
                            const obj = array[3];
                            setmessages(obj[e]);
                          }
                        }
                      }}
                      href="#"
                    >
                      <Person name={e} />
                    </a>
                  );
                })
              : ""}
          </ul>
        </div>
        <div className="h-full remove-bars overflow-y-scroll border-solid border p-3 rounded-lg border-gray-700 w-9/12">
          {messages
            ? messages.map((e) => {
                return <Message sender={e.sender} message={e.message} />;
              })
            : ""}
        </div>
        <form
          action="

        "
          className="absolute w-6/12 right-3 bottom-3"
        >
          <input
            style={{
              fontFamily: "Poppins",
            }}
            type="text"
            name=""
            id=""
            value={message}
            onChange={(e) => {
              setmessage(e.target.value);
            }}
            className=" rounded-lg px-3 py-1 mx-1 input  text-black"
          />
          <button
            onClick={(e) => {
              const input = document.querySelector(".input");

              send_message(e);
            }}
            style={{
              fontFamily: "Poppins",
            }}
            className="bg-purple-600 p-1 rounded-lg"
          >
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default Chat;
