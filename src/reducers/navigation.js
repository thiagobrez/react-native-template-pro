import {SET_CURRENT_ROUTE_NAME} from '../util/actionTypes';
import {NAVIGATION_INITIAL_STATE} from '../util/reducer';

/**
 * @author Thiago Brezinski
 *
 * Altera a rota atual do navigator na store.
 *
 * @param state: estado atual da propriedade 'navigation' na store
 * @param action: ação recebida no onNavigationStateChange do AppNavigator
 */
export default function navigation(state = NAVIGATION_INITIAL_STATE, action) {
	switch (action.type) {
		case SET_CURRENT_ROUTE_NAME:
			return {data: action.payload.data};
		default:
			return state;
	}
}