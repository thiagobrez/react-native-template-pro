import './ReactotronConfig';
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createRootNavigator} from './src/navigators';
import {getCurrentRouteName} from './src/util/navigation';
import {StatusBar, YellowBox} from 'react-native';
import store from './src/store';

/**
 * App configuration.
 */
const config = {
	//Selectable from /navigators/root
  rootNavigator: 'RootNavigatorTabs',
  statusBarLightContent: true
};

const AppNavigator = createRootNavigator(config.rootNavigator);

export default class App extends Component {
	
	constructor(props) {
		super(props);
		
		StatusBar.setBarStyle('light-content', config.statusBarLightContent);
		YellowBox.ignoreWarnings([
			'Warning: isMounted(...) is deprecated',
			'createTabNavigator is deprecated',
		]);
		
	}
	
	render() {
		return (
			<Provider store={store}>
				<AppNavigator onNavigationStateChange={(prevState, newState) => getCurrentRouteName(newState)}/>
			</Provider>
		);
	}
}