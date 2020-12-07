/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {colors} from './src/components/colors';
import Splashscreen from './src/screens/Splashscreen';
import Login from './src/screens/Login';

const App = () => {
  return (
    <>
      {/* <Splashscreen/> */}
      <Login/>
    </>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
