import { FETCH_HOMEDATA, HOME_API_CALL_FAILURE, HOME_API_CALL_SUCCESS } from '../actions/types';

// reducer with initial state
const initialState = {
    fetching: false,
    homeDatas: null,
    error: null
};

export default function (state={initialState}, action) {
    switch(action.type){
        case FETCH_HOMEDATA:
           return {...state, fetching:true, error:null}
        case HOME_API_CALL_SUCCESS:
            return {...state, fetching:false, homeDatas: action.homeDatas}
        case HOME_API_CALL_FAILURE:
            return {...state, fetching:false, error: action.error}
        default: 
            return state;
    }
}