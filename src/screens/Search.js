import React, {useState} from 'react';
import { View, Text, StyleSheet, StatusBar, TextInput,TouchableOpacity,FlatList } from 'react-native';
import {colors} from '../components/colors';
import Feather from 'react-native-vector-icons/Feather';
import Contacs from '../components/Contacs';

const Search = () => {

  const data = [
    {username:'Jungkook', phone:'198658923569'},
    {username:'Jin', phone:'198658923569'},
    {username:'namjoon', phone:'198658923569'},
  ]

  return (
    <>
      <StatusBar backgroundColor={colors.primary}/>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.back}>
            <Feather style={styles.iconBack} name="arrow-left" size={30} color="#FFFFFF"/>
            <Text style={styles.text}>Find Receiver</Text>
          </TouchableOpacity>
          <View style={styles.formSearch}>
            <TouchableOpacity style={styles.iconSearch}>
              <Feather name="search" size={25} color="#A9A9A9"/>
            </TouchableOpacity>
            <TextInput
            placeholder="Search receiver here"
            />
          </View>
        </View>
        <View style={styles.footer}>
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>Contacs</Text>
              <Text style={styles.description}>6 contacs Found</Text>
          </View>
          <FlatList
            data={data}
            renderItem={({item})=>{
              return (
                <TouchableOpacity>
                  <Contacs item={item}/>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    </>
  );
};

export default Search;

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
  back:{
    flexDirection:'row',
    marginHorizontal:16,
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
  formSearch:{
    marginTop:20,
    marginBottom:5,
    flexDirection:'row',
    borderRadius:10,
    marginHorizontal:16,
    backgroundColor:'#FFFFFF',
  },
  iconSearch:{
    justifyContent:'center',
    marginHorizontal:16,
  },
  footer:{
    flex:3,
    paddingTop:30,
  },
  titleWrapper:{
    marginLeft:16,
    marginBottom:10,
  },
  title:{
    fontSize:18,
    fontWeight:'bold',
    color:'#514F5B',
    marginBottom:10,
  },
  description:{
    fontSize:14,
    color:'#8F8F8F',
  },
});

