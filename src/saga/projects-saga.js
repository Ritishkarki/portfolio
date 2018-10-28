import { PROJECTS_API_CALL_FAILURE, PROJECTS_API_CALL_SUCCESS } from '../actions/types';
import { call, put } from "redux-saga/effects";
import Api from "../services/api-request";
import {setStorageItem, getStorageItem, checkItemsExistence} from "../services/ localStorage";

// function that makes the api request and returns a Promise for response
function fetchData(url) {
    return Api.get(url);
}

// projects saga: makes the api call when watcher saga sees the action
export default function* ProjectsSaga(action) {
    try {
        if(checkItemsExistence(action.url)){
            let projectsData = getStorageItem(action.url);
            // dispatch a success action to the store with the new Project Datas
             yield put({ type: PROJECTS_API_CALL_SUCCESS, projectsData });
        }else{
            const response = yield call(fetchData, action.url);
            let projectsData = response.body;
            // set item in localstorage for future usage
            setStorageItem(action.url, projectsData);
            // dispatch a success action to the store with the new Project Datas
            yield put({ type: PROJECTS_API_CALL_SUCCESS, projectsData });
        }
    } catch (error) {
        // dispatch a failure action to the store with the error
        yield put({ type: PROJECTS_API_CALL_FAILURE, error });
    }
}