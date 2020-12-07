import React from 'react';
import { View, Text, StyleSheet,StatusBar } from 'react-native';
import {colors} from '../components/colors';

const Splashscreen = () => {
  return (
    <>
      <StatusBar barStyle="default" backgroundColor={colors.primary}/>
      <View style={styles.splashscreen}>
        <Text style={styles.text}>Zwallet</Text>
      </View>
    </>
  );
};

export default Splashscreen;

const styles = StyleSheet.create({
  splashscreen:{
    backgroundColor:colors.primary,
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  text:{
    color:colors.white,
    fontWeight:'bold',
    fontSize:32,
    lineHeight:44,
  },
});
