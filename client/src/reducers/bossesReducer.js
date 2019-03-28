import {ADD_BOSS} from '../constants';

const initialState = {
  bosses:[]
}

export default function(state = initialState, action){
    switch(action.type){
        case ADD_BOSS:
          console.log(state);
          return Object.assign({}, state, {
            bosses:[...state.bosses, action.payload]
          });
        default: return state;
    }
};
