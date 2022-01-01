import React, { useState } from "react";
import "./style.css";
import util from "../request";
import { useDispatch } from "react-redux";
import { user } from "../Redux/Action";
import { array } from "../Redux/Action";

const SignUp = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();
  
  return (
    <>
      <div className="flex justify-start items-center img h-screen">
        <div className="w-full m-14 max-w-xs">
          <form className="bg-transparent   rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
                for="username"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                value={username}
                placeholder="Username"
                onChange={(e) => {
                  setusername(e.target.value);
                }}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-white text-sm font-bold mb-2"
                for="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                value={password}
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
                type="password"
                placeholder="******************"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                onClick={async () => {
                  if (localStorage.getItem(username)) {
                    const arr = JSON.parse(localStorage.getItem(username));
                    dispatch(user(username));
                    dispatch(array(arr))
                  } else {
                    const arr = localStorage.setItem(username, JSON.stringify([{friends:[]}]))
                    const a = await util.user_data(username, password);
                    dispatch(user(username));
                  }
                  setpassword("");
                  setusername("");
                }}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
