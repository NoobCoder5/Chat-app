import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { array } from "../Redux/Action";
const Person = ({ name }) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <>
      <li class="flex py-4 justify-between first:pt-0  last:pb-0">
        <img
          class="h-10 w-10 rounded-full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRowos5MZ39GXVJWBqN2-CMvuR3UPoxDbhoRCeeUP18VtTCVkizW3RsF-uTYA6Qk29xF3Q&usqp=CAU"
          alt=""
        />
        <div class="ml-3  overflow-hidden">
          <p class="text-sm  font-medium ">{name}</p>
        </div>
        <div
          onClick={() => {
            const arr = JSON.parse(localStorage.getItem(user));
            const obj1 = arr[1];
            const obj2 = arr[2];
            const obj3 = arr[3];

            console.log(arr);
            const newarr = [];
            arr[0].friends.map((e) => {
              if (name != e) {
                newarr.push(e);
              }
            });
            console.log(newarr);
            localStorage.setItem(user, JSON.stringify([{ friends: newarr },obj1,obj2,obj3]));
            const arrr = JSON.parse(localStorage.getItem(user));
            dispatch(array(arrr));
          }}
          className="mx-3 "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 hover:text-red-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </li>
    </>
  );
};

export default Person;
