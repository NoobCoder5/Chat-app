import React, { useState, useEffect } from "react";
import Person from "./Person";
import "./style.css";
import { NavLink } from "react-router-dom";
import util from "../request";
import { array } from "../Redux/Action";

import { useSelector, useDispatch } from "react-redux";

const Top = () => {
  const [all_users, setall_users] = useState([]);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    util.all_users().then((data) => setall_users(data.data));
  }, []);

  return (
    <>
      <div className="flex justify-between w-4/5 m-auto ">
        <h1
          style={{
            fontFamily: "Yanone Kaffeesatz",
          }}
          className="bg-gray-900   px-5 py-2 text-lg tracking-widest m-2 rounded-lg"
        >
          {`Hello ${user}`}
        </h1>
        <label class="relative my-2 block">
          <input
            class="placeholder:italic placeholder:text-black block text-black bg-white w-full border border-gray-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Search for anyuser..."
            type="text"
            name="search"
            onChange={(e) => {
              const ele = document.querySelector(".ele");
              ele.classList.remove("hidden");
            }}
          />
          <div className="border my-2 ele hidden overflow-auto remove-bars border-solid bg-gray-900 divide-y divide-gray-200 rounded-lg border-gray-700 absolute w-full h-80">
            <ul
              role="list"
              class="p-1 px-4  overflow-auto remove-bars divide-y divide-gray-200"
            >
              {all_users?.map((e) => {
                return (
                  <a
                    href="#"
                    onClick={() => {
                      const ele = document.querySelector(".ele");
                      ele.classList.add("hidden");
                      const old = localStorage.getItem(user);

                      if (!old) {
                        localStorage.setItem(
                          user,
                          JSON.stringify([{ friends: [e.username] }])
                        );
                        const arr = JSON.parse(localStorage.getItem(user));
                        dispatch(array(arr));
                      } else {
                        const arr = JSON.parse(old);
                        const obj1 = arr[1];
                        const obj2 = arr[2];
                        const obj3 = arr[3];

                        localStorage.setItem(
                          user,
                          JSON.stringify([
                            { friends: [...arr[0].friends, e.username] },
                            obj1,obj2,obj3
                          ])
                        );
                        const arrr = JSON.parse(localStorage.getItem(user));
                        dispatch(array(arrr));
                      }
                    }}
                  >
                    <Person key={e.username} name={e.username} />
                  </a>
                );
              })}
            </ul>
          </div>
        </label>
        <div className="flex m-2">
          <NavLink
            to="/"
            style={{
              fontFamily: "Poppins",
            }}
            className=" bg-purple-700 mx-2 hover:bg-transparent rounded-lg px-5 py-2 text-lg"
          >
            Home
          </NavLink>

          <NavLink
            to="/user"
            style={{
              fontFamily: "Poppins",
            }}
            className="bg-purple-700 hover:bg-transparent rounded-lg px-5 py-2 text-lg"
          >
            Me
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Top;
