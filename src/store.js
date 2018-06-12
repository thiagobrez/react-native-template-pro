import {createStore, applyMiddleware} from 'redux';
import Reactotron from 'reactotron-react-native';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import rootSaga from './sagas';

/**
 * Reactotron linking for Redux-Saga.
 */
const sagaMonitor = Reactotron.createSagaMonitor();
const sagaMiddleware = createSagaMiddleware({sagaMonitor});

/**
 * Redux store creation.
 */
const store = Reactotron.createStore(
	reducers,
	applyMiddleware(sagaMiddleware)
);

/**
 * Starts root saga listener.
 */
sagaMiddleware.run(rootSaga);

export default store;