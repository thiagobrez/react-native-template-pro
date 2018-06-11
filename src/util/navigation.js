import {NavigationActions} from 'react-navigation';
import {setCurrentRouteName} from '../actions/navigation';
import store from '../store';

/**
 * @author Thiago Brezinski
 *
 * Recebe um estado do navigator e retorna o nome da rota atual.
 *
 * @param navState: estado do navigator
 */
export const getCurrentRouteName = navState => {
  if (navState.hasOwnProperty('index')) {
    getCurrentRouteName(navState.routes[navState.index])
  } else {
    store.dispatch(setCurrentRouteName(navState.routeName))
  }
};

/**
 * @author Thiago Brezinski
 *
 * Reseta o stack de navegação à rota definida em routeName.
 */
export const resetToRoute = routeName => NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({routeName})
  ]
});