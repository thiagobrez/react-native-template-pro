import {combineReducers} from 'redux';
import navigation from './navigation';
import something from './something';

/**
 * Combines every reducer to send to store creation.
 */
export default combineReducers({
	navigation,
	something,
})