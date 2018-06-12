import {SET_CURRENT_ROUTE_NAME} from '../util/actionTypes';

/**
 * Action dispatched when a route changes.
 *
 * @param routeName: new current route name
 */
export function setCurrentRouteName(routeName) {
	return {
		type: SET_CURRENT_ROUTE_NAME,
		payload: {data: routeName}
	}
}