/**
 * @format
 */

import {AppRegistry, LogBox} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import PersonalInfo from './sourceCode/screens/allScreens/Wantjob/PersonalInfo';
import EduDetails from './sourceCode/screens/allScreens/Intenship/Education';
import InternHome from './sourceCode/screens/allScreens/Intenship/InternHome';
import Selection from './sourceCode/screens/allScreens/StartingScreens/YouWanted';
LogBox.ignoreAllLogs();
AppRegistry.registerComponent(appName, () => App);
