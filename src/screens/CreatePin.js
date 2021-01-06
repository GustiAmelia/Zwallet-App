import React, {useState, useEffect, useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { View, Text, StyleSheet, StatusBar, TextInput,TouchableOpacity,TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';
import {colors} from '../components/colors';
import Axios from 'axios';

const CreatePin = ({navigation}) => {

  const linkAPI = 'http://192.168.1.37:5000/';
  const email = useSelector((state)=>state.auth.data.email);
  const [pinSuccess, setPinSuccess] = useState(false);

  const [interval, setInterval] = useState('');
  let textInput = useRef(null);
  const lengthInput = 6;

  const onChangeText = (e)=>{
    setInterval(e);
  };

  useEffect(()=>{
    textInput.focus();
  },[]);

  const buttonConfrim = ()=>{
    Axios.patch(`${linkAPI}user/updatePin`,{
      email,
      pin:interval,
    }).then((res) => {
      setPinSuccess(res.data.isSuccess);
    }).catch(err => console.log(err));
  };

  useEffect(()=>{
    if (pinSuccess){
      navigation.navigate('PinSuccess');
    }
  },[pinSuccess]);

  return (
    <>
      <StatusBar backgroundColor={colors.secondry}/>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.textHeader}>Zwallet</Text>
          </View>
          <View style={styles.footer}>
            <View style={styles.footerContent}>
              <Text style={styles.titleFooter}>Create Security PIN</Text>
              <Text style={styles.textFooter}>Create a PIN that’s contain 6 digits number for security purpose in Zwallet.</Text>
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
                <TouchableOpacity
                  disabled={interval.length !== 6}
                  style={interval.length !== 6 ? styles.buttonBlank : styles.buttonFilled}
                  onPress={buttonConfrim}
                  >
                  <Text style={interval.length !== 6 ? styles.textButtonBlank : styles.textButtonFilled}>Confirm</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

export default CreatePin;

const styles = StyleSheet.create({
  container:{
    backgroundColor:colors.secondry,
    flex:1,
  },
  header:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  textHeader:{
    fontSize:26,
    fontWeight:'bold',
    color:colors.primary,
    lineHeight:35,
  },
  footer:{
    backgroundColor:colors.white,
    flex:3,
    borderTopLeftRadius:35,
    borderTopRightRadius:35,
    elevation:150,
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
  titleFooter:{
    fontSize:24,
    fontWeight:'bold',
    color:colors.dark,
    textAlign:'center',
    lineHeight:33,
    marginBottom:15,
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

