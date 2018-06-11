import React from 'react';
import {TabBar} from '../components';
import {createTabNavigator} from 'react-navigation';
import {
  Tab1,
  Tab2,
  Tab3,
  Tab4
} from '../screens';

/**
 * @author Thiago Brezinski
 *
 * TabNavigator com 4 tabs e tab bar customizada.
 */
export default MainTabs = createTabNavigator({
    Tab1: {screen: Tab1},
    Tab2: {screen: Tab2},
    Tab3: {screen: Tab3},
    Tab4: {screen: Tab4},
  },
  {
    tabBarComponent: ({navigation}) => <TabBar navigation={navigation}/>,
    initialRouteName: 'Tab2',
    swipeEnabled: true,
    animationEnabled: true
  }
);