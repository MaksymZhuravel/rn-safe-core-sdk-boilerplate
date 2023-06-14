/**
 * @format
 */

import {AppRegistry, LogBox} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// Виключення, щоб приховати певні помилки
// LogBox.ignoreLogs(['Warning: ...']);

AppRegistry.registerComponent(appName, () => App);
