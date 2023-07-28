/**
 * @format
 */
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import MainNavigator from './src/navigators/main';

AppRegistry.registerComponent(appName, () => MainNavigator);
