import {REQUEST_GET_SOMETHING} from '../util/actionTypes';

/**
 * Redux action template.
 *
 * @param param: action payload
 */
export function getSomething(param) {
	return {
		type: REQUEST_GET_SOMETHING,
		payload: {param}
	}
}