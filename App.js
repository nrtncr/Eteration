/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import Stack from './src/navigation/Stack';

const App = () => {
  useEffect(()=>{
    SplashScreen.hide();
  },[])
  return (
    <NavigationContainer>
      <Stack/>
    </NavigationContainer>
  );
};




export default App;
