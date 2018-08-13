import React from 'react';
import {createStackNavigator} from 'react-navigation';
import RootNavigatorSignedIn from './RootNavigatorSignedIn';
import {SignedOut} from '../../screens';

/**
 * Root navigator.
 *
 * Primary navigation: stacks.
 */
export default RootNavigatorSignedOut = () => {
  
  return createStackNavigator({
    SignedOut: {screen: SignedOut},
    SignedIn: {screen: RootNavigatorSignedIn()},
  }, {
    mode: 'modal',
    headerMode: 'none',
    navigationOptions: {
      gesturesEnabled: false
    }
  })
  
};