import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Login from './component/Login/Login';
import Register from './component/Register/Register';
import MyStack from './navigation/App';
import Setting from './component/Setting/Setting'
AppRegistry.registerComponent(appName, () => MyStack);
