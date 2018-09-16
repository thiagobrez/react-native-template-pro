import './ReactotronConfig';
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createRootNavigator} from './src/navigators';
import {getCurrentRouteName} from './src/util/navigation';
import {StatusBar, YellowBox, AsyncStorage} from 'react-native';
import Realm from 'realm';
import store from './src/store';

/**
 * App configuration.
 */
const config = {
  //Selectable from /navigators/root
  rootNavigator: 'RootNavigatorTabs',
  
  statusBarLightContent: false,
  eraseStorage: true,
  eraseDB: true,
};

export default class App extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      AppNavigator: null,
      rootNavigatorReady: false,
      realm: new Realm()
    };
    
    StatusBar.setBarStyle('light-content', config.statusBarLightContent);
    YellowBox.ignoreWarnings([
      'Warning: isMounted(...) is deprecated',
      'createTabNavigator is deprecated',
      'You should only render one navigator explicitly',
      'Method `jumpToIndex` is deprecated.',
      'Native TextInput'
    ]);
    
    //Erases database and async storage
    try {
      if(config.eraseDB) this.state.realm.write(() => this.state.realm.deleteAll());
      if (config.eraseStorage) AsyncStorage.clear();
    } catch (err) {
      console.display('Error clearing db or storage', err, true);
    }
    
  }
  
  componentWillMount() {
    
    createRootNavigator(config.rootNavigator)
      .then(AppNavigator => {
        // AppNavigator = navigator;
        this.setState({
          AppNavigator,
          rootNavigatorReady: true
        })
      })
      .catch(err => {
        console.display('Error creating root navigator', err, true);
      });
    
    //Starts listening to database changes
    this.state.realm.addListener('change', this.logDatabase)
  }
  
  componentWillUnmount() {
    //Stops listening to database changes
    this.state.realm.removeListener('change', this.logDatabase)
  }
  
  /**
   * Logs 'Something' database objects to Reactotron
   */
  logDatabase = () => {
    if(!this.state.realm.empty) {
      console.display('Database', this.state.realm.objects('Something'), true);
    }
  };
  
  render() {
    
    const {AppNavigator, rootNavigatorReady} = this.state;
    
    if(!rootNavigatorReady) return null;
    
    const prevGetStateForAction = AppNavigator.router.getStateForAction;
    
    AppNavigator.router.getStateForAction = (action, state) => {
      // Do not allow to go back from Home
      if (action.type === 'Navigation/BACK' && state && state.routes[state.index].routeName === 'Home') {
        return null;
      }
      
      // Do not allow to go back to Login
      if (action.type === 'Navigation/BACK' && state) {
        const newRoutes = state.routes.filter(r => r.routeName !== 'SignedOut');
        const newIndex = newRoutes.length - 1;
        return prevGetStateForAction(action, { index: newIndex, routes: newRoutes });
      }
      return prevGetStateForAction(action, state);
    };
    
    return (
      <Provider store={store}>
        <AppNavigator onNavigationStateChange={(prevState, newState) => getCurrentRouteName(newState)}/>
      </Provider>
    );
  }
}