import {INITIAL_STATE} from '../util/reducer';
import {
	REQUEST_GET_SOMETHING,
	SUCCESS_GET_SOMETHING,
	FAILURE_GET_SOMETHING,
} from '../util/actionTypes';

/**
 * Reducer template.
 *
 * Changes store state based on response action type.
 *
 * @param state: current state of property 'something'
 * @param action: action dispatched (directly or via saga)
 */
export default function something(state = INITIAL_STATE, action) {
	switch (action.type) {
		case REQUEST_GET_SOMETHING:
			return {...state, loading: true};
		case SUCCESS_GET_SOMETHING:
			return {data: action.payload.data, loading: false, error: false};
		case FAILURE_GET_SOMETHING:
			return {data: [], loading: false, error: true};
		default:
			return state;
	}
}