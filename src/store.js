import {createStore, applyMiddleware} from 'redux';
import Reactotron from 'reactotron-react-native';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import rootSaga from './sagas';

/**
 * @author Thiago Brezinski
 *
 * Configuração do Reactotron.
 */
const sagaMonitor = Reactotron.createSagaMonitor();
const sagaMiddleware = createSagaMiddleware({sagaMonitor});

/**
 * @author Thiago Brezinski
 *
 * Criação da store do Redux.
 */
const store = Reactotron.createStore(
	reducers,
	applyMiddleware(sagaMiddleware)
);

/**
 * @author Thiago Brezinski
 *
 * Inicia o listener da saga root do Redux-Saga.
 */
sagaMiddleware.run(rootSaga);

export default store;