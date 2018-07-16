import React from 'react';
import {colors} from '../../styles';
import {MainTabs} from '../index';
import {Overlay1} from '../../screens';
import {HeaderIcon} from '../../components';
import {createStackNavigator} from 'react-navigation';

/**
 * Root navigator.
 *
 * Primary navigation: Tabs.
 * Secondary navigation: Stacks.
 */
export default RootNavigatorTabs = () => {
  
  return createStackNavigator({
    MainTabs: {screen: MainTabs},
    
    //MainTabs overlays
    Overlay1: {screen: Overlay1},
  }, {
    navigationOptions: ({navigation}) => ({
      headerStyle: {
        backgroundColor: colors.primary,
        borderBottomWidth: 0,
      },
      headerTitleStyle: {
        fontWeight: 'bold'
      },
      headerBackTitle: null,
      headerTintColor: colors.secondary,
      headerRight: <HeaderIcon navigation={navigation}/>
    })
  })
  
};