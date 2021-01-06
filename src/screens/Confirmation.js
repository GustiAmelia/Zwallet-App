import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { View, Text, StyleSheet, StatusBar, TextInput,TouchableOpacity,TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';
import {colors} from '../components/colors';
import Feather from 'react-native-vector-icons/Feather';
import Card from '../components/Card';
import moment from 'moment';

const Confirmation = ({route,navigation}) => {

  const authData = useSelector((state)=>state.auth.data);
  const user = useSelector((state)=>state.user.user.filter((item)=>{return item.id === authData.id;}));
  const {item} = route.params;
  let {form} = route.params;
  const date = moment(new Date()).format('MMMM D,YYYY');
  const time = moment(new Date()).format('HH:mm');
  form = {...form,date,time};

  const handleContinue = ()=>{
    navigation.navigate('PinConfirmation',{...{item},form});
  };

  return (
    <>
      <StatusBar backgroundColor={colors.primary}/>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.back} onPress={()=>navigation.navigate('InputAmount')}>
            <Feather style={styles.iconBack} name="arrow-left" size={30} color="#FFFFFF"/>
            <Text style={styles.text}>Confirmation</Text>
          </TouchableOpacity>
          <Card style={styles.card}>
            <View style={styles.content}>
              <Feather
              style={styles.imageNoPict}
              name="user" size={40} color="#6379F4"
              />
              <View style={styles.textContent}>
                <Text style={styles.textName}>{item.username}</Text>
                <Text style={styles.phone}>{item.phone}</Text>
              </View>
            </View>
          </Card>
        </View>
        <View style={styles.footer}>
          <View style={styles.footerContent}>
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
                <Text style={styles.info}>{date}</Text>
              </Card>
              <Card style={styles.infomationCard}>
                <Text style={styles.titleInfo}>Time</Text>
                <Text style={styles.info}>{time}</Text>
              </Card>
            </View>
            <Card style={styles.cardNote}>
              <Text style={styles.titleInfo}>Notes</Text>
              <Text style={styles.info}>{form.note}</Text>
            </Card>
            <View style={styles.buttonWrapper}>
              <TouchableOpacity
              onPress={handleContinue}
              style={false ? styles.buttonBlank : styles.buttonFilled}>
                <Text style={false ? styles.textButtonBlank : styles.textButtonFilled}>Continue</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default Confirmation;

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
    fontSize:15,
    lineHeight:22,
    color:'#7A7886',
    marginBottom:10,
  },
  info:{
    fontSize:17,
    lineHeight:25,
    color:'#514F5B',
    fontWeight:'bold',
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

