import React, {useState} from 'react';
import { View, Text, StyleSheet, StatusBar, TextInput,TouchableOpacity,TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';
import {colors} from '../components/colors';
import {Formik} from 'formik';
import * as yup from 'yup';
import {IconButton} from 'react-native-paper';

const ForgotPassword = () => {

  const schema = yup.object({
    email:yup.string().required().email(),
  });

  return (
    <>
      <StatusBar backgroundColor={colors.secondry}/>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.textHeader}>Zwallet</Text>
          </View>
          <View style={styles.footer}>
            <Formik
              initialValues={{
                email:'',
              }}
              onSubmit={(values,actions)=>{
                actions.resetForm();
              }}
              validationSchema={schema}
            >
            {(props)=>(
              <View style={styles.footerContent}>
                <Text style={styles.titleFooter}>Reset Password</Text>
                <Text style={styles.textFooter}>Enter your Zwallet e-mail so we can send you a password reset link.</Text>
                <View style={props.values.email ? styles.textWrapperFilled : styles.textWrapperBlank}>
                  <IconButton icon="email-outline" color={props.values.email ? colors.primary : colors.textDescription}/>
                  <TextInput
                    style={styles.textForm}
                    placeholder="Enter your e-mail"
                    onChangeText={props.handleChange('email')}
                    value={props.values.email}
                    autoCapitalize="none"
                    onBlur={props.handleBlur('email')}
                  />
                </View>
                <Text style={styles.isValidInput}>{props.touched.email && props.errors.email}</Text>
                <View style={styles.buttonWrapper}>
                  <TouchableOpacity onPress={props.handleSubmit} style={styles.button}>
                    <Text style={styles.textButton}>Confirm</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
            </Formik>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

export default ForgotPassword;

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
    marginHorizontal:20,
    marginBottom:40,
  },
  textWrapperFilled:{
    borderBottomWidth:1.5,
    borderColor:colors.primary,
    flexDirection:'row',
  },
  textWrapperBlank:{
    borderBottomWidth:1.5,
    borderColor:'rgba(169, 169, 169, 0.6)',
    flexDirection:'row',
  },
  textForm:{
    fontSize:16,
    lineHeight:27,
  },
  button:{
    alignItems:'center',
    backgroundColor:colors.primary,
    borderRadius:10,
    elevation:3,
  },
  textButton:{
    fontSize:18,
    lineHeight:25,
    marginVertical:16,
    color:colors.white,
    fontWeight:'bold',
  },
  isValidInput :{
    color:colors.error,
    marginTop:5,
  },
});

