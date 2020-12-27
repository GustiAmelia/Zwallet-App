import React, {useState} from 'react';
import { View, Text, StyleSheet, StatusBar,TouchableOpacity } from 'react-native';
import {colors} from '../components/colors';
import {IconButton} from 'react-native-paper';

const PinSuccess = () => {

  return (
    <>
      <StatusBar backgroundColor={colors.secondry}/>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>Zwallet</Text>
        </View>
        <View style={styles.footer}>
          <View style={styles.footerContent}>
            <IconButton icon="check-circle" color={colors.success} style={styles.checklist} size={50}/>
            <Text style={styles.titleFooter}>PIN Successfully Created</Text>
            <Text style={styles.textFooter}>Your PIN was successfully created and you can now access all the features in Zwallet. Login to your new account and start exploring!</Text>
            <View style={styles.buttonWrapper}>
              <TouchableOpacity   style={styles.button}>
                <Text style={styles.textButton}>Login Now</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default PinSuccess;

const styles = StyleSheet.create({
  container:{
    backgroundColor:colors.secondry,
    flex:1,
  },
  header:{
    flex:2,
    justifyContent:'center',
    alignItems:'center',
  },
  textHeader:{
    fontSize:26,
    fontWeight:'bold',
    color:colors.primary,
    lineHeight:35,
  },
  footer:{
    backgroundColor:colors.white,
    flex:3,
    borderTopLeftRadius:35,
    borderTopRightRadius:35,
    elevation:150,
    paddingHorizontal:16,
    paddingTop:30,
  },
  footerContent:{
    flex:1,
  },
  buttonWrapper:{
    flex:1,
    justifyContent:'flex-end',
    paddingVertical:25,
  },
  checklist:{
    alignSelf:'center',
  },
  titleFooter:{
    fontSize:24,
    fontWeight:'bold',
    color:colors.dark,
    textAlign:'center',
    lineHeight:33,
    marginBottom:15,
  },
  textFooter:{
    fontSize:16,
    lineHeight:23,
    color:colors.textDescription,
    textAlign:'center',
    marginHorizontal:20,
    marginBottom:20,
  },
  button:{
    alignItems:'center',
    backgroundColor:colors.primary,
    borderRadius:10,
    elevation:3,
  },
  textButton:{
    fontSize:18,
    lineHeight:25,
    marginVertical:16,
    color:colors.white,
    fontWeight:'bold',
  },
});

