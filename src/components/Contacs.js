import React from 'react';
import { View, Text,Image, StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Card from './Card';

const Contacs = ({item}) => {


  return (
      <Card style={Styles.card}>
        <View style={Styles.content}>
          <Feather
          style={Styles.imageNoPict}
          name="user" size={40} color="#6379F4"
          />
          <View style={Styles.textContent}>
            <Text style={Styles.textName}>{item.username}</Text>
            <Text style={Styles.phone}>{item.phone}</Text>
          </View>
        </View>
      </Card>
  );
};

export default Contacs;

const Styles = StyleSheet.create({
  card:{
    marginVertical:10,
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
});
