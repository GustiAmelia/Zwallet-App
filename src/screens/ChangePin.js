import React, {useState, useEffect, useRef} from 'react';
import { View, Text, StyleSheet, StatusBar, TextInput,TouchableOpacity,TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';
import {colors} from '../components/colors';
import Feather from 'react-native-vector-icons/Feather';


const ChangePin = () => {

  const [interval, setInterval] = useState('');
  let textInput = useRef(null);
  const lengthInput = 6;

  const onChangeText = (e)=>{
    setInterval(e);
  };

  useEffect(()=>{
    textInput.focus();
  },[]);

  return (
    <>
      <StatusBar backgroundColor={colors.primary}/>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity style={styles.contentHeader}>
              <Feather style={styles.iconBack} name="arrow-left" size={30} color="#FFFFFF"/>
              <Text style={styles.textHeader}>Change PIN</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.footer}>
            <View style={styles.footerContent}>
              <Text style={styles.textFooter}>Enter your current 6 digits Zwallet PIN below to continue to the next steps.</Text>
              <TextInput
                ref={(input)=> textInput = input}
                style={{width:0,height:0}}
                maxLength={lengthInput}
                onChangeText={onChangeText}
                value={interval}
                keyboardType="numeric"
              />
              <View style={styles.containerInput}>
                {
                  Array(lengthInput).fill().map((data,index)=>(
                    <View
                      key={index}
                      style={[styles.cellView ,
                        {
                          borderColor: index === interval.length || interval.length === 6 ? colors.primary : 'rgba(169, 169, 169, 0.6)'
                        },
                      ]}>
                      <Text
                        style={styles.cellText}
                        onPress={()=>textInput.focus()}>
                          {interval && interval.length > 0 ? interval[index] : ' '}
                      </Text>
                    </View>
                  ))
                }
              </View>
              <View style={styles.buttonWrapper}>
                <TouchableOpacity disabled={interval.length !== 6} style={interval.length !== 6 ? styles.buttonBlank : styles.buttonFilled}>
                  <Text style={interval.length !== 6 ? styles.textButtonBlank : styles.textButtonFilled}>Continue</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

export default ChangePin;

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
  contentHeader:{
    marginHorizontal:16,
    flexDirection:'row',
  },
  textHeader:{
    textAlign:'center',
    color:'#FFFFFF',
    fontSize:20,
    fontWeight:'bold',
    textAlignVertical:'center',
    marginLeft:15,
  },
  iconBack:{
    textAlignVertical:'center',
  },
  footer:{
    flex:5,
    paddingHorizontal:16,
    paddingTop:30,
  },
  footerContent:{
    flex:1,
  },
  buttonWrapper:{
    flex:1,
    justifyContent:'flex-end',
    paddingVertical:20,
  },
  textFooter:{
    fontSize:16,
    lineHeight:23,
    color:colors.textDescription,
    textAlign:'center',
    marginBottom:20,
  },
  containerInput:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
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
  isValidInput :{
    color:colors.error,
    marginTop:5,
  },
  cellView:{
    borderWidth:1.5,
    justifyContent:'center',
    alignItems:'center',
    paddingVertical:10,
    width:45,
    margin:5,
    borderRadius:10,
    borderColor:'rgba(169, 169, 169, 0.6)',
  },
  cellText:{
    textAlign:'center',
    fontSize:24,
  },
});

