import { FETCH_EXPERIENCE } from '../actions/index';
export default function (state={}, action) {
    switch(action.type){
        case FETCH_EXPERIENCE:
            return action.payload;
        default:
            return state;
    }
}