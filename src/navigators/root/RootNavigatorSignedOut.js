import React from 'react';
import {createStackNavigator} from 'react-navigation';
import RootNavigatorTabs from './RootNavigatorTabs';
import {SignedOut} from '../../screens';

/**
 * Root navigator.
 *
 * Primary navigation: stacks.
 */
export default RootNavigatorSignedOut = () => {
  
  return createStackNavigator({
    SignedOut: {screen: SignedOut},
    SignedIn: {screen: RootNavigatorTabs()},
  }, {
    mode: 'modal',
    headerMode: 'none',
    navigationOptions: {
      gesturesEnabled: false
    }
  })
  
};