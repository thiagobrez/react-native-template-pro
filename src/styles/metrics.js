import {Platform} from 'react-native';

/**
 * App default metrics.
 */
export default {
	padding: 15,
	headerRightPadding: 10,
	tabBarHeight: 50,
	...Platform.select({
		ios: {headerHeight: 64, headerPadding: 20},
		android: {headerHeight: 44, headerPadding: 0},
	})
};