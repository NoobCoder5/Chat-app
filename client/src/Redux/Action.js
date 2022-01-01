export const user = (state) => {
  return {
    type: "user",
    payload: state
  };
};

export const array = (state) => {
  return {
    type: "array",
    payload: state
  };
};
export const receiver = (state) => {
  return {
    type: "receive",
    payload: state
  };
};
// export const arr_messages = (state) => {
//   return {
//     type: "messages",
//     payload: state
//   };
// };
