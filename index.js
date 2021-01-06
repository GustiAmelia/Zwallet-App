/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider as PaperProvider } from 'react-native-paper';
import {PersistGate} from 'redux-persist/integration/react';
import configureStore from './src/redux/store';
import {Provider} from 'react-redux';

import { Platform } from 'react-native';

if (Platform.OS === 'android') {
  // only android needs polyfill
  require('intl'); // import intl object
  require('intl/locale-data/jsonp/id-ID'); // load the required locale details
}

const {persistore,store} = configureStore();

const Main = ()=>{
  return (
    <Provider store={store}>
      <PaperProvider>
        <App/>
      </PaperProvider>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => Main);
