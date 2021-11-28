export const data = (arr) => {
    return {
      type: "ARRAY",
      payload: arr,
    };
  };
  export const Container = (data) => {
    return {
      type: "CONTAINER",
      payload: data,
    };
  };
  export const Element = (data) => {
    return {
      type: "CHECK",
      payload: data,
    };
  };