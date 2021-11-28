import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Bars from "./components/Bars";
import { Container } from "./Action";
import { Element } from "./Action";

import "./index.css";
import { useDispatch } from "react-redux";
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const container = document.querySelector("#bars");

    const nav = document.querySelector("#Nav");
    dispatch(Container(container));

    dispatch(Element(nav));
  }, []);
  return (
    <>
      <Navbar />
      <Bars />
    </>
  );
};

export default App;
