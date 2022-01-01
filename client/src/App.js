import React, { useState } from "react";
import "./index.css";
import Chat from "./components/Chat";
import Top from "./components/Top";
import SignUp from "./components/SignUp";
import User from "./components/User";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  const user = useSelector((state) => state.user);
  
  return (
    <>
      {user ? (
        <div className="bg-gray-800  text-white w-screen h-screen">
          <Router>
                <Top />
            <Switch>
              <Route path="/user">
                 <User/>
              </Route>
              <Route path="/">
                <Chat />
              </Route>
            </Switch>
          </Router>
        </div>
      ) : (
        <SignUp />
      )}
    </>
  );
};

export default App;
