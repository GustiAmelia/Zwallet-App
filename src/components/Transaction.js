import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { View, Text,Image, StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Card from './Card';

const Transaction = ({item}) => {

  const authData = useSelector((state)=>state.auth.data);
  const linkAPI = 'http://192.168.1.37:5000/';

  return (
    <Card style={Styles.card}>
      <View style={Styles.leftContent}>
        {item.avatar === null ?
          <Feather
          style={Styles.imageNoPict}
          name="user" size={40} color="#6379F4"
          />
          :
          <Image
          style={Styles.image}
          source={{uri:linkAPI + item.avatar}}
          />
        }
        <View style={Styles.textLeftContent}>
          <Text style={Styles.textName}>{item.username}</Text>
          <Text style={Styles.description}>Transfer</Text>
        </View>
      </View>
      <View style={Styles.rightContent}>
      {authData.id === item.receiver_id
        ?
        <Text style={Styles.nominalIn}>+{item.amount.toLocaleString('id',{style:'currency',currency:'IDR'})}</Text>
        :
        <Text style={Styles.nominalOut}>-{item.amount.toLocaleString('id',{style:'currency',currency:'IDR'})}</Text>
        }
      </View>
    </Card>
  );
};

export default Transaction;

const Styles = StyleSheet.create({
  card:{
    marginVertical:10,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },
  contenCard:{
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor:'#ffffff',
    marginVertical:10,
    paddingVertical:10,
    borderRadius:10,
    elevation:5,

  },
  leftContent:{
    flexDirection:'row',
  },
  textLeftContent:{
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
  description:{
    fontSize:14,
    color:'#7A7886',
    marginTop:9,
  },
  rightContent:{
    justifyContent:'center',
  },
  nominalIn:{
    fontSize:18,
    fontWeight:'bold',
    color:'#1EC15F',
  },
  nominalOut:{
    fontSize:18,
    fontWeight:'bold',
    color:'#FF5B37',
  },
});