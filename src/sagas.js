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
 * Saga template.
 *
 * Receives an action, calls the request passing it's parameters and, at the function
 * return, sends the result to the reducer.
 *
 * @param action: dispatched action
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
 * Links actions to sagas.
 */
export default function* root() {
	yield [
		takeLatest(REQUEST_GET_SOMETHING, requestGetSomething),
	];
}