const Reducer = (state = null,action) => {
    switch (action.type) {
        case "ARRAY" :
            return action.payload
       default: return state
    }
  }
  const Reducer_two = (state = null,action) => {
    switch (action.type) {
        case "CONTAINER" :
            return action.payload
       default: return state
    }
  }
  const Reducer_third = (state = null,action) => {
    switch (action.type) {
        case "CHECK" :
            return action.payload
       default: return state
    }
  }

  export  {Reducer,Reducer_two,Reducer_third}