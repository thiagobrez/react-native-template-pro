import {INITIAL_STATE} from '../util/reducer';
import {
	REQUEST_GET_SOMETHING,
	SUCCESS_GET_SOMETHING,
	FAILURE_GET_SOMETHING,
} from '../util/actionTypes';

/**
 * @author Thiago Brezinski
 *
 * Modelo de reducer.
 *
 * Altera o estado da store com base no tipo de resposta recebida.
 *
 * @param state: estado atual da propriedade 'something' na store
 * @param action: ação recebida diretamente ou através da saga
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