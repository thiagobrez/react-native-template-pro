import React from 'react';
import {createStackNavigator} from 'react-navigation';
import {Home} from '../../screens';

/**
 * Root navigator.
 *
 * Primary navigation: stacks.
 */
export default RootNavigatorSignedIn = () => {
  
  return createStackNavigator({
    Home: {screen: Home}
  }, {
    initialRouteName: 'Home',
  })
  
};