import { FETCH_HOMEDATA } from '../actions/index';
export default function (state={}, action) {
    switch(action.type){
        case FETCH_HOMEDATA:
           return action.payload; 
        default: 
            return state;
    }
}