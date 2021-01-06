import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './Login';
import CreatePin from './CreatePin';
import PinSuccess from './PinSuccess';
import ForgotPassword from './ForgotPassword';
import SignUp from './SignUp';

const AuthStackScreen = ({navigation})=> {

  const AuthStack = createStackNavigator();
  const registered = useSelector((state)=>state.auth.isRegister);

  return (
    <AuthStack.Navigator headerMode="none">
      {registered ?
      <>
        <AuthStack.Screen name="CreatePin" component={CreatePin}/>
        <AuthStack.Screen name="PinSuccess" component={PinSuccess}/>
      </>
      :
      <>
        <AuthStack.Screen name="Login" component={Login}/>
        <AuthStack.Screen name="SignUp" component={SignUp}/>
        <AuthStack.Screen name="ForgotPassword" component={ForgotPassword}/>
      </>
      }
    </AuthStack.Navigator>
  );
};

export default AuthStackScreen;