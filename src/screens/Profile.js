import React,{useState} from 'react';
import { View, Text,StatusBar, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {colors} from '../components/colors';


const Profile = () => {

  const makeSureSingOut = () =>
    Alert.alert(
      'Sing Out',
      'Are you sure?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('oke'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => console.log('yes')},
      ],
      { cancelable: false }
    );

  const handleSingOutButton = ()=>{
    return makeSureSingOut();
  };

  return (
    <View style={Styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="rgba(99, 121, 244, 0.2)" />
      <View style={Styles.header}>
        <TouchableOpacity
          style={Styles.back}>
          <Feather name="arrow-left" size={30} color="#4D4B57"/>
        </TouchableOpacity>
      </View>
      <View style={Styles.footer}>
        <Feather
        style={Styles.imageNoPict}
        name="user" size={70} color="#6379F4"
        />
        <TouchableOpacity
        style={Styles.edit}>
          <Feather name="edit-2" size={20} color="#7A7886"/>
          <Text style={Styles.textEdit}>Edit</Text>
        </TouchableOpacity>
        <Text style={Styles.name}>Joen Jungkook</Text>
        <Text style={Styles.phone}>98238529852</Text>
        <TouchableOpacity
          style={Styles.detailProfile}>
          <Text style={Styles.textDetail}>Personal Information</Text>
          <Feather name="arrow-right" size={25} color="#7E7D84"/>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.detailProfile}>
          <Text style={Styles.textDetail}>Change Password</Text>
          <Feather name="arrow-right" size={25} color="#7E7D84"/>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.detailProfile}>
          <Text style={Styles.textDetail}>Change PIN</Text>
          <Feather name="arrow-right" size={25} color="#7E7D84"/>
        </TouchableOpacity>
        <View style={Styles.detailProfile}>
          <Text style={Styles.textDetail}>Notification</Text>
        </View>
        <TouchableOpacity
          onPress={handleSingOutButton}
          style={Styles.logout}>
          <Text style={Styles.textDetail}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;

const Styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:colors.secondry,
  },
  header:{
    flex:1,
    justifyContent:'center',
  },
  back:{
    marginHorizontal:16,
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
  },
  headerButton: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginVertical:10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#6379F4',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  footer:{
    flex:10,
  },
  image:{
    width:90,
    height:90,
    borderRadius:10,
    alignSelf:'center',
  },
  imageNoPict:{
    width:90,
    height:90,
    backgroundColor:'#EBEEF2',
    borderRadius:10,
    textAlignVertical:'center',
    alignSelf:'center',
    textAlign:'center',
  },
  edit:{
    marginVertical:15,
    flexDirection:'row',
    justifyContent:'center',
  },
  textEdit:{
    color:'#7A7886',
    fontSize:16,
    marginLeft:10,
  },
  name:{
    textAlign:'center',
    fontSize:24,
    fontWeight:'bold',
    color:'#4D4B57',
    marginVertical:5,
  },
  phone:{
    textAlign:'center',
    fontSize:16,
    color:'#7A7886',
    marginBottom:15,
  },
  detailProfile:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:16,
    marginVertical:10,
    paddingVertical:10,
    paddingHorizontal:15,
    backgroundColor:'#E5E8ED',
    borderRadius:10,
    elevation:2,
  },
  textDetail:{
    color:'#4D4B57',
    fontSize:16,
    fontWeight:'bold',
  },
  logout:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:16,
    marginTop:10,
    marginBottom:40,
    paddingVertical:10,
    paddingHorizontal:15,
    backgroundColor:'#E5E8ED',
    borderRadius:10,
    elevation:2,
  },
});
