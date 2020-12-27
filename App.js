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
import SignUp from './src/screens/SignUp';
import PinSuccess from './src/screens/PinSuccess';
import ForgotPassword from './src/screens/ForgotPassword';
import ResetPassword from './src/screens/ResetPassword';
import Home from './src/screens/Home';
import History from './src/screens/History';
import Search from './src/screens/Search';
import InputAmount from './src/screens/InputAmount';
import Confirmation from './src/screens/Confirmation';
import Success from './src/screens/Success';
import Failed from './src/screens/Failed';
import Profile from './src/screens/Profile';
import PersonalInformation from './src/screens/PersonalInformation';
import ChangePassword from './src/screens/ChangePassword';
import AddPhoneNumber from './src/screens/AddPhoneNumber';
import ManagePhone from './src/screens/ManagePhone';
import CreatePin from './src/screens/CreatePin';
import PinConfirmation from './src/screens/PinConfirmation';
import ChangePin from './src/screens/ChangePin';
import NewPin from './src/screens/NewPin';
import Notification from './src/screens/Notification';

const App = () => {
  return (
    <>
      {/* <Splashscreen/> */}
      <Login/>
      {/* <SignUp/> */}
      {/* <PinSuccess/> */}
      {/* <ForgotPassword/> */}
      {/* <ResetPassword/> */}
      {/* <Home/> */}
      {/* <History/> */}
      {/* <Search/> */}
      {/* <InputAmount/> */}
      {/* <Confirmation/> */}
      {/* <Success/> */}
      {/* <Failed/> */}
      {/* <Profile/> */}
      {/* <PersonalInformation/> */}
      {/* <ChangePassword/> */}
      {/* <AddPhoneNumber/> */}
      {/* <ManagePhone/> */}
      {/* <CreatePin/> */}
      {/* <PinConfirmation/> */}
      {/* <ChangePin/> */}
      {/* <NewPin/> */}
      {/* <Notification/> */}
    </>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
