import {takeLatest, put, all, call} from 'redux-saga/effects';
import {
	REQUEST_GET_SOMETHING,
	SUCCESS_GET_SOMETHING,
	FAILURE_GET_SOMETHING,
} from './util/actionTypes';
import {
	getSomething
} from './rest/requests';

/**
 * @author Thiago Brezinski
 *
 * Modelo de saga.
 *
 * Recebe uma ação, chama uma requisição passando seus parâmetros,
 * e, no retorno da requisição, devolve o resultado ao reducer.
 *
 * @param action: ação despachada
 */
function* requestGetSomething(action) {
	
	const {param} = action.payload;
	
	try {
		const res = yield call(getSomething, param);
		res.success ?
			yield put({type: SUCCESS_GET_SOMETHING, payload: {data: res.data}}) :
			yield put({type: FAILURE_GET_SOMETHING})
	} catch(err) {
		yield put({type: FAILURE_GET_SOMETHING})
	}
}

/**
 * @author Thiago Brezinski
 *
 * Vincula ações às suas sagas.
 */
export default function* root() {
	yield [
		takeLatest(REQUEST_GET_SOMETHING, requestGetSomething),
	];
}