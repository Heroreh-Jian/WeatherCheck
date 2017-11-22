import {FETCH_WEATHER} from "../actions/index";

export default function(state=[], action){
     switch (action.type){
       case FETCH_WEATHER:
        // concat dose not mutate state but create a new array
        // return state.concat([action.payload.data]);The same as below ES6 code 
        return [action.payload.data, ...state];
  }
    return state
}