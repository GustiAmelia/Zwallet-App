import React, {useState,useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { View, Text, StyleSheet, StatusBar,TouchableOpacity,Image,FlatList } from 'react-native';
import {colors} from '../components/colors';
import Feather from 'react-native-vector-icons/Feather';
import Transaction from '../components/Transaction';
import {historyCreator} from '../redux/actions/transaction';

const Home = ({navigation}) => {

  const authData = useSelector((state)=>state.auth.data);
  const data = useSelector((state)=>state.user.user);

  const userLogin = data.filter((item)=>{return item.id === authData.id;});
  const linkAPI = 'http://192.168.1.37:5000/';

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(historyCreator(authData.id));
  },[]);

  const history = useSelector((state)=>state.transaction.homeHistory);

  return (
    <>
      <StatusBar backgroundColor={colors.primary}/>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.contentHeader}>
            <TouchableOpacity
              style={styles.leftContent}>
              {userLogin[0].avatar === null ?
                <Feather
                style={styles.imageNoPict}
                name="user" size={40} color="#6379F4"
                />
                :
                <Image
                style={styles.image}
                source={{uri:linkAPI + userLogin[0].avatar}}
                />
              }
              <View style={styles.textLeftContent}>
                <Text style={styles.textHeader}>Balance</Text>
                <Text style={styles.nominalHeader}>{userLogin[0].balance.toLocaleString('id',{style:'currency',currency:'IDR'})}</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.rightContent}>
              <TouchableOpacity>
                <Feather name="bell" size={21} color="#FAFAFA"/>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.footer}>
          <View style={styles.button}>
            <TouchableOpacity
            onPress={()=>navigation.navigate('Search')}
            >
              <Text style={styles.textButton}><Feather
                name="arrow-up" size={25} color="#608DE2"
              />  Transfer</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.textButton}><Feather
                name="plus" size={25} color="#608DE2"
              />  Top Up</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.transaction}>
            <Text style={styles.title}>Transaction History</Text>
            <TouchableOpacity>
              <Text style={styles.linkAll}>See all</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={history}
            renderItem={({item})=>{
              return (
                <Transaction item={item}/>
              );
            }}
          />
        </View>
      </View>
    </>
  );
};

export default Home;

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
  },
  contentHeader:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:16,
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
  textHeader:{
    fontSize:14,
    color:'#D0D0D0',
    marginBottom:5,

  },
  nominalHeader:{
    fontSize:24,
    color:'#FFFFFF',
    fontWeight:'bold',
    marginTop:5,
  },
  rightContent:{
    marginRight:4,
    justifyContent:'center',
  },
  footer:{
    flex:3,
    paddingTop:30,
  },
  button:{
    flexDirection:'row',
    marginHorizontal:16,
    justifyContent:'space-between',
    marginBottom:30,
  },
  textButton:{
    color:'#514F5B',
    fontSize:18,
    fontWeight:'bold',
    paddingHorizontal:20,
    paddingVertical:10,
    borderRadius:10,
    backgroundColor:'#E5E8ED',
    elevation:10,
  },
  transaction:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:16,
  },
  title:{
    color:'#514F5B',
    fontSize:18,
    fontWeight:'bold',
  },
  linkAll:{
    color:'#6379F4',
    fontSize:16,
    fontWeight:'500',
  },
});

