import React from "react";
import Person from "./Person";
import Message from "./Message";
import "./style.css";
const Chat = () => {
  return (
    <>
      <div className="flex h-5/6 p-3 justify-evenly  items-center  flex-row">
        <div className="h-full">
          <ul className=" p-2 px-6 remove-bars h-full overflow-auto border-solid border rounded-lg border-gray-700 divide-y divide-gray-700">
            <Person />
            <Person />
            <Person />
            <Person />
            <Person />
            <Person />
            <Person />
            <Person />
            <Person />
            <Person />
          </ul>
        </div>
        <div className="h-full remove-bars overflow-y-scroll border-solid border p-3 rounded-lg border-gray-700 w-9/12">
          <Message position="justify-start" />
          <Message position="justify-end" />
          <Message position="justify-start" />
          <Message position="justify-end" />
          <Message position="justify-start" />
          <Message position="justify-end" />
        </div>
      </div>
    </>
  );
};

export default Chat;
