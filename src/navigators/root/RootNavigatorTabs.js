import React from 'react';
import {colors} from '../../styles';
import {NavigatorMainTabs} from '../index';
import {Overlay1} from '../../screens';
import {DynamicHeaderIcon} from '../../components';
import {createStackNavigator} from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';

/**
 * Root navigator.
 *
 * Primary navigation: Tabs.
 * Secondary navigation: Stacks.
 */
export default RootNavigatorTabs = () => {
  
  return createStackNavigator({
    MainTabs: {screen: NavigatorMainTabs},
    
    //MainTabs overlays
    Overlay1: {screen: Overlay1},
  }, {
    navigationOptions: ({navigation}) => ({
      headerBackground: (
        <LinearGradient style={{flex: 1}}
                        colors={colors.regularGradient}
                        start={{x: 0, y: 1}}
                        end={{x: 1, y: 0}}/>
      ),
      headerStyle: {borderBottomWidth: 0},
      headerTitleStyle: {fontWeight: 'bold'},
      headerBackTitle: null,
      headerTintColor: colors.secondary,
      headerRight: <DynamicHeaderIcon navigation={navigation}/>
    })
  })
  
};