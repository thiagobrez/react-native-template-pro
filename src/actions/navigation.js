import {SET_CURRENT_ROUTE_NAME} from '../util/actionTypes';

/**
 * @author Thiago Brezinski
 *
 * Ação ao trocar de rota.
 *
 * @param routeName: nome da nova rota atual
 */
export function setCurrentRouteName(routeName) {
	return {
		type: SET_CURRENT_ROUTE_NAME,
		payload: {data: routeName}
	}
}