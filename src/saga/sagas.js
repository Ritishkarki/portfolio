import { FETCH_HOMEDATA, FETCH_PROJECTS, FETCH_EXPERIENCE} from '../actions/types';
import { takeLatest } from "redux-saga/effects";
import HomeSaga from './home-saga';
import projectsSaga from './projects-saga.js';

export function* watcherSaga() {
    yield takeLatest(FETCH_HOMEDATA, HomeSaga);
    yield takeLatest(FETCH_PROJECTS, projectsSaga);
}