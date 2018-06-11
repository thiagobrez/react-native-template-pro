import {combineReducers} from 'redux';
import navigation from './navigation';
import something from './something';

/**
 * @author Thiago Brezinski
 *
 * Recebe todos os reducers e combina em um só, para enviar à criação da store.
 */
export default combineReducers({
	navigation,
	something,
})