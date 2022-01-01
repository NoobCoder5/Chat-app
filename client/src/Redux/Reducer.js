
  const Array = (state = null ,action) => {
    switch (action.type) {
        case "array" :
            return action.payload
       default: return state
    }
  }
  const Reducer = (state = null,action) => {
    switch (action.type) {
        case "user" :
            return action.payload
       default: return state
    }
  }
  const Receiver = (state = null ,action) => {
    switch (action.type) {
        case "receive" :
            return action.payload
       default: return state
    }
  }
  // const Arr = (state = null ,action) => {
  //   switch (action.type) {
  //       case "messages" :
  //           return action.payload
  //      default: return state
  //   }
  // }
  

  export  {Reducer,Array,Receiver}