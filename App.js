import './ReactotronConfig';
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createRootNavigator} from './src/navigators';
import {getCurrentRouteName} from './src/util/navigation';
import {StatusBar, YellowBox} from 'react-native';
import Realm from 'realm';
import store from './src/store';

/**
 * App configuration.
 */
const config = {
  //Selectable from /navigators/root
  rootNavigator: 'RootNavigatorTabs',
  statusBarLightContent: true,
  eraseDB: true,
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
    
    this.state = {
      realm: new Realm()
    };
    
  }
  
  componentWillMount() {
    //Erases database
    if(config.eraseDB) {
      try {
        this.state.realm.write(() => this.state.realm.deleteAll());
      } catch (e) {
        console.display('Database write error');
      }
    }
    
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
    console.display(
      'Database',
      this.state.realm.objects('Something'),
      true
    )
  };
  
  render() {
    return (
      <Provider store={store}>
        <AppNavigator onNavigationStateChange={(prevState, newState) => getCurrentRouteName(newState)}/>
      </Provider>
    );
  }
}