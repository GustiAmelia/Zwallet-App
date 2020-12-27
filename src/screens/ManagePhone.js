import React, {useState} from 'react';
import { View, Text, StyleSheet, StatusBar,TouchableOpacity, ScrollView } from 'react-native';
import {colors} from '../components/colors';
import Feather from 'react-native-vector-icons/Feather';
import Card from '../components/Card';
import {IconButton} from 'react-native-paper';

const ManagePhone = () => {

  return (
    <>
      <StatusBar backgroundColor={colors.primary}/>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.back}>
            <Feather style={styles.iconBack} name="arrow-left" size={30} color="#FFFFFF"/>
            <Text style={styles.text}>Manage Phone Number</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <Text style={styles.description}>You can only delete the phone number and then you must add another phone number.</Text>
          <Card style={styles.cardPhone}>
            <View>
              <Text style={styles.titleInfo}>Primary</Text>
              <Text style={styles.info}>+62 813-9387-7946</Text>
            </View>
            <TouchableOpacity>
              <IconButton icon="delete-outline" color={colors.textDescription} size={40}/>
            </TouchableOpacity>
          </Card>
        </View>
      </View>
    </>
  );
};

export default ManagePhone;

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
  cardPhone:{
    marginVertical:30,
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
