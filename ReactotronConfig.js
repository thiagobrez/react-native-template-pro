import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga'

/**
 * @author Thiago Brezinski
 *
 * Configura o Reactotron.
 */
Reactotron
  .configure({name: 'HelloWorld'})
  .useReactNative()
  .use(reactotronRedux())
  .use(sagaPlugin())
  .connect();

/**
 * @author Thiago Brezinski
 *
 * Limpa o debugger toda vez que recarrega o app.
 */
Reactotron.clear();

/**
 * @author Thiago Brezinski
 *
 * Funções úteis de log.
 */
console.tron = Reactotron.log;
console.display = (name, value) => Reactotron.display({
  name,
  value,
  // important: true,
});