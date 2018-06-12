import {SET_CURRENT_ROUTE_NAME} from '../util/actionTypes';
import {NAVIGATION_INITIAL_STATE} from '../util/reducer';

/**
 * Changes current navigator route at the store.
 *
 * @param state: current state of property 'navigation'
 * @param action: action dispatched on 'onNavigationStateChange' of AppNavigator
 */
export default function navigation(state = NAVIGATION_INITIAL_STATE, action) {
	switch (action.type) {
		case SET_CURRENT_ROUTE_NAME:
			return {data: action.payload.data};
		default:
			return state;
	}
}