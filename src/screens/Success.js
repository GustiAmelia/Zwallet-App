import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { View, Text, StyleSheet, StatusBar,TouchableOpacity, ScrollView, Image } from 'react-native';
import {colors} from '../components/colors';
import Card from '../components/Card';
import {IconButton} from 'react-native-paper';
import {getUserCreator} from '../redux/actions/user';

const Success = ({route,navigation}) => {

  const authData = useSelector((state)=>state.auth.data);
  const user = useSelector((state)=>state.user.user.filter((item)=>{return item.id === authData.id;}));
  const {item} = route.params;
  let {form} = route.params;

  const dispatch = useDispatch();

  const buttonBackToHome = ()=>{
    dispatch(getUserCreator());
    navigation.navigate('Home');
  };

  return (
    <>
      <StatusBar backgroundColor={colors.primary}/>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>Transfer Details</Text>
        </View>
        <View style={styles.footer}>
          <ScrollView style={styles.footerContent}>
            <IconButton icon="check-circle" color={colors.success} style={styles.checklist} size={50}/>
            <Text style={styles.titleFooter}>Transfer Success</Text>
            <View style={styles.cardWrapper}>
              <Card style={styles.infomationCard}>
                <Text style={styles.titleInfo}>Amount</Text>
                <Text style={styles.info}>{Number(form.amount).toLocaleString('id',{style:'currency',currency:'IDR'})}</Text>
              </Card>
              <Card style={styles.infomationCard}>
                <Text style={styles.titleInfo}>Balance Left</Text>
                <Text style={styles.info}>{(user[0].balance - Number(form.amount)).toLocaleString('id',{style:'currency',currency:'IDR'})}</Text>
              </Card>
            </View>
            <View style={styles.cardWrapper}>
              <Card style={styles.infomationCard}>
                <Text style={styles.titleInfo}>Date</Text>
                <Text style={styles.info}>{form.date}</Text>
              </Card>
              <Card style={styles.infomationCard}>
                <Text style={styles.titleInfo}>Time</Text>
                <Text style={styles.info}>{form.time}</Text>
              </Card>
            </View>
            <Card style={styles.cardNote}>
              <Text style={styles.titleInfo}>Notes</Text>
              <Text style={styles.info}>{form.note}</Text>
            </Card>
            <Text style={styles.text}>From</Text>
            <Card style={styles.cardContact}>
              <Image source={require('../../assets/images/suga.jpg')} style={styles.image}/>
              <View style={styles.textContent}>
                <Text style={styles.textName}>{user[0].username}</Text>
                <Text style={styles.phone}>{user[0].phone}</Text>
              </View>
            </Card>
            <Text style={styles.text}>To</Text>
            <Card style={styles.cardContact}>
              <Image source={require('../../assets/images/suga.jpg')} style={styles.image}/>
              <View style={styles.textContent}>
                <Text style={styles.textName}>{item.username}</Text>
                <Text style={styles.phone}>{item.phone}</Text>
              </View>
            </Card>
            <View style={styles.buttonWrapper}>
              <TouchableOpacity
              onPress={buttonBackToHome}
               style={false ? styles.buttonBlank : styles.buttonFilled}>
                <Text style={false ? styles.textButtonBlank : styles.textButtonFilled}>Back to Home</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    </>
  );
};

export default Success;

const styles = StyleSheet.create({
  container:{
    backgroundColor:colors.secondry,
    flex:1,
  },
  header:{
    flex:1,
    justifyContent:'center',
    backgroundColor:colors.primary,
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
  },
  textHeader:{
    color:colors.white,
    fontWeight:'bold',
    fontSize:20,
    lineHeight:30,
    textAlign:'center',
  },
  footer:{
    flex:5,
    paddingHorizontal:16,
    paddingTop:20,
  },
  footerContent:{
    flex:1,
  },
  titleFooter:{
    textAlign:'center',
    fontSize:22,
    lineHeight:30,
    fontWeight:'bold',
    color:'#4D4B57',
    marginBottom:20,
  },
  checklist:{
    alignSelf:'center',
  },
  buttonWrapper:{
    flex:1,
    justifyContent:'flex-end',
    paddingVertical:15,
  },
  cardWrapper:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginVertical:10,
  },
  infomationCard:{
    width:'48%',
  },
  cardNote:{
    marginVertical:10,
  },
  titleInfo:{
    fontSize:16,
    lineHeight:22,
    color:'#7A7886',
    marginBottom:10,
  },
  info:{
    fontSize:18,
    lineHeight:25,
    color:'#514F5B',
    fontWeight:'bold',
  },
  cardContact:{
    flexDirection:'row',
  },
  textContent:{
    marginLeft:20,
    justifyContent:'center',
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
  image:{
    width:52,
    height:52,
    borderRadius:10,
  },
  text:{
    fontSize:18,
    lineHeight:25,
    fontWeight:'bold',
    color:'#514F5B',
    marginVertical:15,
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

