import {REQUEST_GET_SOMETHING} from '../util/actionTypes';

/**
 * @author Thiago Brezinski
 *
 * Modelo de ação a ser disparada.
 *
 * @param param: parâmetro a ser passado junto com a ação
 */
export function getSomething(param) {
	return {
		type: REQUEST_GET_SOMETHING,
		payload: {param}
	}
}