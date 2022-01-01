import { Reducer,Array,Receiver } from "./Reducer";

import { combineReducers } from "redux";

const allReducers = combineReducers({
  user: Reducer,
  array: Array,
  receiver:Receiver
});

export default allReducers;
