import React from "react";

const Top = () => {
  return (
    <>
      <div className="flex justify-between w-4/5 m-auto ">
        <h1
          style={{
            fontFamily: "Yanone Kaffeesatz",
          }}
          className="bg-gray-900   px-5 py-2 text-lg tracking-widest m-2 rounded-lg"
        >
          Chat App
        </h1>
        <div className="flex m-2">
          <div
            style={{
              fontFamily: "Poppins",
            }}
            className=" px-5 py-2 text-lg"
          >
            Home
          </div>
          <div
            style={{
              fontFamily: "Poppins",
            }}
            className="px-5 py-2 text-lg"
          >
            Me
          </div>
        </div>
      </div>
    </>
  );
};

export default Top;
