/**
 * @format
 */
import 'react-native-gesture-handler';

import App from './App';
import {AppRegistry} from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import React from 'react';
import {name as appName} from './app.json';
import configureStore from '~/redux/store';

const {store,persistor} = configureStore();

const Redux = () => {
   return( 
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}
      >
        <App/>
      </PersistGate>
    </Provider>
    )
}

AppRegistry.registerComponent(appName, () => Redux);
