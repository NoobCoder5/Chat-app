import React,{useEffect} from "react";
import { useSelector } from "react-redux";
import "./style.css"
const Bars = () => {
  const array = useSelector(state => state.array)
  
  return (
    <>
      <div className="container flex flex-row justify-center md">
        <div id="bars" className="flex w-3/5  p-5">
        {
         array ? 
         array.map((e,index) => {
          return <div id={`a${index}`} style={{height:`${e * 2}px` }} className=" blue transition-all flex-grow text-center ml-1 h-72 w-4"></div>
        })
        :
        ""
        }
        </div>
      </div>
    </>
  );
};

export default Bars;
