import RootNavigatorTabs from './root/RootNavigatorTabs';
import MainTabs from './MainTabs';

const rootNavigators = {
  RootNavigatorTabs,
};

/**
 * @author Thiago Brezinski
 *
 * Cria o Root Navigator escolhido para ser usado pelo app.
 */
const createRootNavigator = rootNavigator => {
	return rootNavigators[rootNavigator]();
};

export {
  createRootNavigator,
  MainTabs
}
