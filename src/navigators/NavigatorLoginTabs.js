import React from 'react';
import {createTabNavigator} from 'react-navigation';
import LoginTabs from '../components/general/LoginTabs';
import {
  SignIn,
  SignUp
} from '../screens';

export default NavigatorLoginTabs = createTabNavigator({
    SignIn: {screen: SignIn},
    SignUp: {screen: SignUp},
  },
  {
    tabBarComponent: ({navigation}) => <LoginTabs navigation={navigation}/>,
    initialRouteName: 'SignIn',
    tabBarPosition: 'top'
  }
);