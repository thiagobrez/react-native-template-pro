import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga'

/**
 * Reactotron initialization.
 */
Reactotron
  .configure({name: 'HelloWorld'})
  .useReactNative()
  .use(reactotronRedux())
  .use(sagaPlugin())
  .connect();

/**
 * Clears debugger on reload.
 */
Reactotron.clear();

/**
 * Util logging functions.
 */
console.tron = Reactotron.log;
console.display = (name, value, important = false) => Reactotron.display({
  name,
  value,
  important,
});