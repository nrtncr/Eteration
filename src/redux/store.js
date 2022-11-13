import { persistReducer, persistStore } from 'redux-persist';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {configureStore} from '@reduxjs/toolkit'
import {createStore} from 'redux'
import reducers from './reducers/index'

const persistConfig = {
    key:'root',
    storage: AsyncStorage,
    whitelist: [],
};


const persistedReducer = persistReducer(persistConfig,reducers);

export default () =>{

    const store = configureStore({
        reducer: persistedReducer,
        middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
          serializableCheck: false
        })
    }); 

    let persistor = persistStore(store);
    return {store, persistor};

}