/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React,{useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthStackScreen from './src/screens/AuthStackScreen';
import MainStackScreen from './src/screens/MainStackScreen';
import {getUserCreator} from './src/redux/actions/user';
import {colors} from './src/components/colors';


const App = () => {

  const login = useSelector((state)=>state.auth.isLogin);

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getUserCreator());
  },[]);


  return (
    <NavigationContainer>
      {login ?
      <MainStackScreen/>
      :
      <AuthStackScreen/>
      }
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
