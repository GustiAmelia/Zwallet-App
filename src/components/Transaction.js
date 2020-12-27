import React from 'react';
import { View, Text,Image, StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Card from './Card';

const Transaction = ({item}) => {

  return (
    <Card style={Styles.card}>
      <View style={Styles.leftContent}>
        <Feather
        style={Styles.imageNoPict}
        name="user" size={40} color="#6379F4"
        />
        <View style={Styles.textLeftContent}>
          <Text style={Styles.textName}>{item.name}</Text>
          <Text style={Styles.description}>Transfer</Text>
        </View>
      </View>
      <View style={Styles.rightContent}>
        <Text style={Styles.nominalOut}>{item.total.toLocaleString('id',{style:'currency',currency:'IDR'})}</Text>
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