import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware,compose } from 'redux';
import reducers from './reducers';
import createSagaMiddleWare from 'redux-saga';
import { watcherSaga } from "./saga/sagas";

const sagaMiddleware = createSagaMiddleWare();
const store = createStore(
    reducers,
    compose(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(watcherSaga);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider> 
,document.getElementById('root')
);
registerServiceWorker();
