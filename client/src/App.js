import React from "react";
import "./index.css";
import Chat from "./components/Chat";
import Top from "./components/Top";

const App = () => {
  return (
    <>
      <div className="bg-gray-800 w-screen text-white h-screen">
        <Top />
        <Chat />
      </div>
    </>
  );
};

export default App;
