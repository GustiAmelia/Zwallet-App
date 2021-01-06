import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { View, Text, StyleSheet, StatusBar, TextInput,TouchableOpacity,Image,TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';
import {colors} from '../components/colors';
import Feather from 'react-native-vector-icons/Feather';
import Card from '../components/Card';
import {IconButton} from 'react-native-paper';

const InputAmount = ({route,navigation}) => {

  const authData = useSelector((state)=>state.auth.data);
  const user = useSelector((state)=>state.user.user.filter((item)=>{return item.id === authData.id;}));
  const {item} = route.params;
  const linkAPI = 'http://192.168.1.37:5000/';

  const [form,setForm] = useState({
    amount:'',
    note:'',
    zeroBalance :'',
  });

  const handleInputAmount = (val)=>{
    setForm({...form,amount:val});
  };

  const handleInputNote = (val)=>{
    setForm({...form,note:val});
  };

  const handleContinue = ()=>{
    user[0].balance === 0 ? setForm({...form,zeroBalance:'sorry your balance is not enough!'})
    :
    navigation.navigate('Confirmation',{...{item},form});
  };


  return (
    <>
      <StatusBar backgroundColor={colors.primary}/>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.back} onPress={()=>navigation.navigate('Search')}>
            <Feather style={styles.iconBack} name="arrow-left" size={30} color="#FFFFFF"/>
            <Text style={styles.text}>Transfer</Text>
          </TouchableOpacity>
          <Card style={styles.card}>
            <View style={styles.content}>
              { item.avatar === null ?
                <Feather
                style={styles.imageNoPict}
                name="user" size={40} color="#6379F4"
                />
                :
                <Image
                style={styles.image}
                source={{uri:linkAPI + item.avatar}}
                />
              }
              <View style={styles.textContent}>
                <Text style={styles.textName}>{item.username}</Text>
                <Text style={styles.phone}>{item.phone}</Text>
              </View>
            </View>
          </Card>
        </View>
        <View style={styles.footer}>
          <View style={styles.footerContent}>
            <Text style={styles.noBallance}>{form.zeroBalance}</Text>
            <View style={styles.formInput}>
              <Text style={styles.currency}>{form.amount === '' ? '' : 'Rp '}</Text>
              <TextInput
                placeholder="0.00"
                style={styles.inputAmount}
                keyboardType="numeric"
                placeholderTextColor="#B5BDCC"
                onChangeText={handleInputAmount}
                value={form.amount}
              />
            </View>
            <Text style={styles.saldo}>{user[0].balance.toLocaleString('id',{style:'currency',currency:'IDR'})} Available</Text>
            <View style={[styles.formInputNote,
              {
                borderBottomColor: form.note === '' ? colors.grey : colors.primary,
              },
            ]}>
              <IconButton icon="pencil-outline" color={form.note !== '' ? colors.primary : colors.textDescription}/>
              <TextInput
                placeholder="Add some notes"
                style={styles.inputNote}
                onChangeText={handleInputNote}
                value={form.note}
              />
            </View>
            <View style={styles.buttonWrapper}>
              <TouchableOpacity
              onPress={handleContinue}
              style={form.amount === '' ? styles.buttonBlank : styles.buttonFilled} disabled={form.amount === ''}>
                <Text style={form.amount === '' ? styles.textButtonBlank : styles.textButtonFilled}>Continue</Text>
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
  formInput:{
    flexDirection:'row',
    justifyContent:'center',
  },
  currency:{
    fontSize:42,
    lineHeight:56,
    color:colors.primary,
    fontWeight:'bold',
    textAlignVertical:'center',
    marginRight:-5,
  },
  inputAmount:{
    fontSize:42,
    lineHeight:56,
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
  noBallance:{
    color:colors.error,
    textAlign:'center',
    fontSize:18,
  },
});

