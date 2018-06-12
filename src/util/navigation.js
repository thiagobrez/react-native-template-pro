import {NavigationActions} from 'react-navigation';
import {setCurrentRouteName} from '../actions/navigation';
import store from '../store';

/**
 * Receives a navigation state and returns current route name.
 *
 * @param navState: navigation state
 */
export const getCurrentRouteName = navState => {
  if (navState.hasOwnProperty('index')) {
    getCurrentRouteName(navState.routes[navState.index])
  } else {
    store.dispatch(setCurrentRouteName(navState.routeName))
  }
};

/**
 * Resets stack navigation to routeName.
 */
export const resetToRoute = routeName => NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({routeName})
  ]
});