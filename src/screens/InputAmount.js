import React, {useState} from 'react';
import { View, Text, StyleSheet, StatusBar, TextInput,TouchableOpacity,TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';
import {colors} from '../components/colors';
import Feather from 'react-native-vector-icons/Feather';
import Card from '../components/Card';
import {IconButton} from 'react-native-paper';

const InputAmount = () => {

  return (
    <>
      <StatusBar backgroundColor={colors.primary}/>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.back}>
            <Feather style={styles.iconBack} name="arrow-left" size={30} color="#FFFFFF"/>
            <Text style={styles.text}>Transfer</Text>
          </TouchableOpacity>
          <Card style={styles.card}>
            <View style={styles.content}>
              <Feather
              style={styles.imageNoPict}
              name="user" size={40} color="#6379F4"
              />
              <View style={styles.textContent}>
                <Text style={styles.textName}>jungkook</Text>
                <Text style={styles.phone}>39845398</Text>
              </View>
            </View>
          </Card>
        </View>
        <View style={styles.footer}>
          <View style={styles.footerContent}>
            <TextInput
              placeholder="0.00"
              style={styles.inputAmount}
              keyboardType="numeric"
              placeholderTextColor="#B5BDCC"
            />
            <Text style={styles.saldo}>Rp120.000 Available</Text>
            <View style={styles.formInputNote}>
              <IconButton icon="pencil-outline" color={true ? colors.primary : colors.textDescription}/>
              <TextInput
                placeholder="Add some notes"
                style={styles.inputNote}
              />
            </View>
            <View style={styles.buttonWrapper}>
              <TouchableOpacity  style={false ? styles.buttonBlank : styles.buttonFilled}>
                <Text style={false ? styles.textButtonBlank : styles.textButtonFilled}>Continue</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default InputAmount;

const styles = StyleSheet.create({
  container:{
    backgroundColor:colors.secondry,
    flex:1,
  },
  header:{
    flex:1,
    justifyContent:'center',
    backgroundColor:colors.primary,
    borderBottomLeftRadius:25,
    borderBottomRightRadius:25,
    paddingBottom:30,
  },
  back:{
    flexDirection:'row',
    marginHorizontal:16,
    marginVertical:20,
  },
  text:{
    color:'#FFFFFF',
    fontSize:20,
    fontWeight:'bold',
  },
  iconBack:{
    textAlignVertical:'center',
    marginRight:15,
  },
  card:{
    marginHorizontal:16,
  },
  content:{
    flexDirection:'row',
  },
  textContent:{
    marginLeft:20,
    justifyContent:'center',
  },
  image:{
    width:52,
    height:52,
    borderRadius:10,
  },
  imageNoPict:{
    width:52,
    height:52,
    backgroundColor:'#EBEEF2',
    borderRadius:10,
    textAlignVertical:'center',
    textAlign:'center',
  },
  textName:{
    fontSize:16,
    fontWeight:'bold',
    color:'#4D4B57',
  },
  phone:{
    fontSize:14,
    color:'#7A7886',
    marginTop:9,
  },
  footer:{
    flex:3,
    paddingHorizontal:16,
    paddingTop:20,
  },
  footerContent:{
    flex:1,
  },
  buttonWrapper:{
    flex:1,
    justifyContent:'flex-end',
    paddingVertical:15,
  },
  inputAmount:{
    fontSize:42,
    lineHeight:56,
    textAlign:'center',
    color:colors.primary,
    fontWeight:'bold',
  },
  saldo:{
    textAlign:'center',
    fontSize:16,
    lineHeight:22,
    color:'#7C7895',
    marginTop:5,
  },
  formInputNote:{
    flexDirection:'row',
    borderBottomWidth:1.5,
    borderBottomColor:colors.primary,
    marginTop:20,
  },
  inputNote:{
    fontSize:16,
    lineHeight:27,
    color:colors.dark,
  },
  buttonFilled:{
    alignItems:'center',
    backgroundColor:colors.primary,
    borderRadius:10,
    elevation:3,
  },
  buttonBlank:{
    alignItems:'center',
    backgroundColor:colors.btn,
    borderRadius:10,
    elevation:3,
  },
  textButtonFilled:{
    fontSize:18,
    lineHeight:25,
    marginVertical:16,
    color:colors.white,
    fontWeight:'bold',
  },
  textButtonBlank:{
    fontSize:18,
    lineHeight:25,
    marginVertical:16,
    color:colors.grey,
    fontWeight:'bold',
  },
});

