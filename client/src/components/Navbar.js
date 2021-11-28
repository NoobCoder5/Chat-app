import React, { useState,useEffect } from "react";
import { data } from "../Action.js";
import { useDispatch ,useSelector } from "react-redux";
import BubbleSort from "./BubbleSort"
const Navbar = () => {
  const [size, setsize] = useState(6);
  const [speed, setspeed] = useState(10);
  const array = useSelector(state => state.array)
  const container = useSelector(state => state.container)
  const nav = useSelector(state => state.check)
  
  const dispatch = useDispatch();
  function generate_array() {
    const arr = [];
    for (let i = 0; i < size; i++) {
      const num = Math.floor(Math.random() * (200 - 20) + 1);
      arr.push(num);
    }
    dispatch(data(arr));
  }
  useEffect(() => {
   generate_array();
  }, [])
  return (
    <>
      <div  id="Nav"  className="container flex flex-row justify-around bg-gray-700 py-3">
        <div>
          <p className="red" className="text-white text-center text-bold">Set Array Size</p>
          <input
            min="5"
            max="60"
            value={size}
            onClick={(e) => {
              setsize(e.target.value);
              generate_array();
            }}
            onChange={(e) => {
              setsize(e.target.value);
              generate_array();
            }}
            type="range"
          />
        </div>
        <div>
          <button
            className="red"
            onClick={() => {
              generate_array();
            }}
            className="bg-blue-500 m-2 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
          >
            Generate Array
          </button>
          <button  className="red" onClick={() => {
            BubbleSort(array,dispatch,data,speed,container,nav);
          }} className="bg-blue-500 m-2 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded">
            Bubble Sort
          </button>
          <button  className="red" className="bg-blue-500 m-2 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded">
            Heap Sort
          </button>
          <button   className="red" className="bg-blue-500 m-2 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded">
            Merge Sort
          </button>
          <button   className="red" className="bg-blue-500 m-2 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded">
            Quick Sort
          </button>
        </div>
        <div>
          <p  className="red" className="text-white text-center"> Set Speed</p>
          <input
            min="10"
            max="100"
            onClick={(e) => {
              setspeed(e.target.value)
            }}
            onChange={(e) => {
              setspeed(e.target.value)
            }}
            type="range"
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
