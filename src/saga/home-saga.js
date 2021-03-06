import { HOME_API_CALL_FAILURE, HOME_API_CALL_SUCCESS } from '../actions/types';
import { call, put } from "redux-saga/effects";
import Api from "../services/api-request";

// function that makes the api request and returns a Promise for response
function fetchData(url) {
    return Api.get(url);
}

// home saga: makes the api call when watcher saga sees the action
export default function* HomeSaga(action) {
    try {
        const response = yield call(fetchData, action.url);
        const homeDatas = response.body;
        // dispatch a success action to the store with the new homeDatas
        yield put({ type: HOME_API_CALL_SUCCESS, homeDatas });

    } catch (error) {
        // dispatch a failure action to the store with the error
        yield put({ type: HOME_API_CALL_FAILURE, error });
    }
}