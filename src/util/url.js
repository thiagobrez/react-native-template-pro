// import SafariView from 'react-native-safari-view';
// import {Linking, Platform} from 'react-native';

/**
 * @author Thiago Brezinski
 *
 * Abre uma WebView e carrega algum URL. No iOS, abre uma SafariView.
 *
 * @param url: url a ser carregado
 */
// export const openURL = url => {
// 	if (Platform.OS === 'ios') {
// 		SafariView.show({
// 			url: url,
// 			fromBottom: true,
// 		});
// 	} else {
// 		Linking.openURL(url);
// 	}
// };