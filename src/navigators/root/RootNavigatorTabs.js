import React from 'react';
import {colors} from '../../styles';
import {MainTabs} from '../index';
import {Overlay1} from '../../screens';
import {HeaderRight} from '../../components';
import {createStackNavigator} from 'react-navigation';

/**
 * @author Thiago Brezinski
 *
 * Root navigator.
 *
 * Navegação primária: Tabs.
 * Navegação secundária: Stacks.
 */
export default RootNavigatorTabs = () => {
  
  return createStackNavigator({
    MainTabs: {screen: MainTabs},
    
    // Telas que sobrepõem as MainTabs
    
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
      headerRight: <HeaderRight navigation={navigation}/>
    })
  })
  
};