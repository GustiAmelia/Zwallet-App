import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import History from './History';
import Search from './Search';
import InputAmount from './InputAmount';
import Confirmation from './Confirmation';
import Success from './Success';
import Failed from './Failed';
import Profile from './Profile';
import PersonalInformation from './PersonalInformation';
import ChangePassword from './ChangePassword';
import AddPhoneNumber from './AddPhoneNumber';
import ManagePhone from './ManagePhone';
import PinConfirmation from './PinConfirmation';
import NewPin from './NewPin';
import Notification from './Notification';

const MainStackScreen = ({navigation})=> {

  const MainStack = createStackNavigator();

  return (
    <MainStack.Navigator headerMode="none" initialRouteName="Home">
      <MainStack.Screen name="Home" component={Home}/>
      <MainStack.Screen name="History" component={History}/>
      <MainStack.Screen name="Search" component={Search}/>
      <MainStack.Screen name="InputAmount" component={InputAmount}/>
      <MainStack.Screen name="Confirmation" component={Confirmation}/>
      <MainStack.Screen name="Success" component={Success}/>
      <MainStack.Screen name="Failed" component={Failed}/>
      <MainStack.Screen name="Profile" component={Profile}/>
      <MainStack.Screen name="PersonalInformation" component={PersonalInformation}/>
      <MainStack.Screen name="ChangePassword" component={ChangePassword}/>
      <MainStack.Screen name="AddPhoneNumber" component={AddPhoneNumber}/>
      <MainStack.Screen name="ManagePhone" component={ManagePhone}/>
      <MainStack.Screen name="NewPin" component={NewPin}/>
      <MainStack.Screen name="PinConfirmation" component={PinConfirmation}/>
      <MainStack.Screen name="Notification" component={Notification}/>
    </MainStack.Navigator>
  );
};

export default MainStackScreen;
