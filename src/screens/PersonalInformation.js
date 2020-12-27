import React, {useState} from 'react';
import { View, Text, StyleSheet, StatusBar,TouchableOpacity, ScrollView } from 'react-native';
import {colors} from '../components/colors';
import Feather from 'react-native-vector-icons/Feather';
import Card from '../components/Card';

const PersonalInformation = () => {

  return (
    <>
      <StatusBar backgroundColor={colors.primary}/>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.back}>
            <Feather style={styles.iconBack} name="arrow-left" size={30} color="#FFFFFF"/>
            <Text style={styles.text}>Personal Information</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <Text style={styles.description}>We got your personal information from the sign up proccess. If you want to make changes on your information, contact our support.</Text>
          <Card style={styles.card}>
            <Text style={styles.titleInfo}>First Name</Text>
            <Text style={styles.info}>Joen</Text>
          </Card>
          <Card  style={styles.card}>
            <Text style={styles.titleInfo}>Last Name</Text>
            <Text style={styles.info}>Jungkook</Text>
          </Card>
          <Card  style={styles.card}>
            <Text style={styles.titleInfo}>Verified E-mail</Text>
            <Text style={styles.info}>Jungkook@gmail.com</Text>
          </Card>
          <Card style={styles.cardPhone}>
            <View>
              <Text style={styles.titleInfo}>Phone Number</Text>
              <Text style={styles.info}>+62 813-9387-7946</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.link}>Manage</Text>
            </TouchableOpacity>
          </Card>
        </View>
      </View>
    </>
  );
};

export default PersonalInformation;

const styles = StyleSheet.create({
  container:{
    backgroundColor:colors.secondry,
    flex:1,
  },
  header:{
    flex:1,
    justifyContent:'center',
    backgroundColor:colors.primary,
    borderBottomLeftRadius:15,
    borderBottomRightRadius:15,
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
  footer:{
    flex:6,
    paddingHorizontal:16,
    paddingTop:20,
  },
  description:{
    textAlign:'center',
    fontSize:15,
    lineHeight:27,
    color:'#7A7886',
    marginBottom:5,
  },
  card:{
    marginVertical:10,
  },
  cardPhone:{
    marginVertical:10,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },
  titleInfo:{
    fontSize:16,
    lineHeight:22,
    color:'#7A7886',
    marginBottom:2,
  },
  info:{
    fontSize:22,
    lineHeight:30,
    fontWeight:'bold',
    color:'#514F5B',
  },
  link:{
    color:colors.primary,
    fontSize:14,
    lineHeight:19,
  },
});
