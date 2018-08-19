import { FETCH_PROJECTS, PROJECTS_API_CALL_FAILURE, PROJECTS_API_CALL_SUCCESS } from '../actions/types';

// initial state 
const initialState = {
    fetching: false,
    projectsData: null,
    error: null
};

export default function (state={initialState}, action) {
    switch(action.type){
        case FETCH_PROJECTS:
            return {...state, fetching:true, error:null};
        case PROJECTS_API_CALL_SUCCESS:
            return {...state, fetching: false, projectsData: action.projectsData};
        case PROJECTS_API_CALL_FAILURE:
            return {...state, fetching:false, error: action.error};
        default:
            return state;
    }
}