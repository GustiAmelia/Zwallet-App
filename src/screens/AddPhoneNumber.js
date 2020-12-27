import React, {useState} from 'react';
import { View, Text, StyleSheet, StatusBar, TextInput,TouchableOpacity,TouchableWithoutFeedback, Keyboard } from 'react-native';
import {colors} from '../components/colors';
import Feather from 'react-native-vector-icons/Feather';
import {IconButton} from 'react-native-paper';
import {Formik} from 'formik';
import * as yup from 'yup';

const AddPhoneNumber = () => {

  const schema = yup.object({
    phoneNumber:yup.string().required(),
  });

  return (
    <>
      <StatusBar backgroundColor={colors.primary}/>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.back}>
            <Feather style={styles.iconBack} name="arrow-left" size={30} color="#FFFFFF"/>
            <Text style={styles.text}>Add Phone Number</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <Formik
            initialValues={{
              phoneNumber:'',
            }}
            onSubmit={(values,actions)=>{
              actions.resetForm();
            }}
            validationSchema={schema}
          >
          {(props)=>(
            <View style={styles.footerContent}>
              <Text style={styles.description}>Add at least one phone number for the transfer ID so you can start transfering your money to another user.</Text>
              <View style={props.values.phoneNumber ? styles.inputFormFilled : styles.inputFormBlank}>
                <IconButton icon="phone-outline" color={props.values.phoneNumber ? colors.primary : colors.textDescription}/>
                <TextInput
                  style={styles.textForm}
                  placeholder="Current Password"
                  onChangeText={props.handleChange('phoneNumber')}
                  value={props.values.phoneNumber}
                  onBlur={props.handleBlur('phoneNumber')}
                />
              </View>
              <Text style={styles.isValidInput}>{props.touched.phoneNumber && props.errors.phoneNumber}</Text>
              <View style={styles.buttonWrapper}>
                <TouchableOpacity onPress={props.handleSubmit} disabled={!props.values.phoneNumber} style={!props.values.phoneNumber ? styles.buttonBlank : styles.buttonFilled}>
                  <Text style={!props.values.phoneNumber ? styles.textButtonBlank : styles.textButtonFilled}>Submit</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
          </Formik>
        </View>
      </View>
    </>
  );
};

export default AddPhoneNumber;

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
  footer:{
    flex:5,
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
  description:{
    textAlign:'center',
    fontSize:16,
    lineHeight:27,
    color:'#7A7886',
    marginBottom:30,
  },
  inputFormBlank:{
    borderBottomWidth:1.5,
    borderColor:'rgba(169, 169, 169, 0.6)',
    flexDirection:'row',
  },
  inputFormFilled:{
    borderBottomWidth:1.5,
    borderColor:colors.primary,
    flexDirection:'row',
  },
  textForm:{
    fontSize:16,
    lineHeight:27,
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
});

