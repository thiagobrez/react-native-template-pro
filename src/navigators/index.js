import RootNavigatorTabs from './root/RootNavigatorTabs';
import MainTabs from './MainTabs';

const rootNavigators = {
  RootNavigatorTabs,
};

/**
 * Creates RootNavigator chosen at App.js config.
 */
const createRootNavigator = rootNavigator => {
	return rootNavigators[rootNavigator]();
};

export {
  createRootNavigator,
  MainTabs
}
