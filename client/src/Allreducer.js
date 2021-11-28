import {Reducer,Reducer_two,Reducer_third} from './Reducer';


import {combineReducers} from 'redux'

const allReducers = combineReducers({
    array:Reducer,
    container:Reducer_two,
    check:Reducer_third
   
})

export default allReducers