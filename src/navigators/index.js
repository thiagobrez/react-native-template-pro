import {AsyncStorage} from 'react-native';
import RootNavigatorTabs from './root/RootNavigatorTabs';
import RootNavigatorSignedOut from './root/RootNavigatorSignedOut';
import RootNavigatorSignedIn from './root/RootNavigatorSignedIn';
import NavigatorMainTabs from './NavigatorMainTabs';
import NavigatorLoginTabs from './NavigatorLoginTabs';

const rootNavigators = {
  RootNavigatorTabs,
  RootNavigatorSignedOut,
  RootNavigatorSignedIn
};

/**
 * Creates RootNavigator chosen at App.js config.
 */
const createRootNavigator = async rootNavigator => {
  const user = JSON.parse(await AsyncStorage.getItem('user'));
  
  if(user?.authenticationKey) {
    
    //Add more validation
    
    return rootNavigators[rootNavigator]();
  } else {
    return RootNavigatorSignedOut();
  }
};

export {
  createRootNavigator,
  NavigatorMainTabs,
  NavigatorLoginTabs
}
