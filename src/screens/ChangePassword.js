import React, {useState} from 'react';
import { View, Text, StyleSheet, StatusBar, TextInput,TouchableOpacity,TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';
import {colors} from '../components/colors';
import Feather from 'react-native-vector-icons/Feather';
import Card from '../components/Card';
import {IconButton} from 'react-native-paper';
import {Formik} from 'formik';
import * as yup from 'yup';

const ChangePassword = () => {

  const schema = yup.object({
    currentPassword:yup.string().required(),
    newPassword:yup.string().required(),
    repeatPassword:yup.string().required(),
  });

  const [secureTextEntryCurrentPass,setSecureTextEntryCurrentPass] = useState(true);
  const [secureTextEntryNewPass,setSecureTextEntryNewPass] = useState(true);
  const [secureTextEntryRepeatPass,setSecureTextEntryRepeatPass] = useState(true);

  const handleSecureTextCurrentPass = ()=>{
    setSecureTextEntryCurrentPass(!secureTextEntryCurrentPass);
  };

  const handleSecureTextNewPass = ()=>{
    setSecureTextEntryNewPass(!secureTextEntryNewPass);
  };

  const handleSecureTextRepeatPass = ()=>{
    setSecureTextEntryRepeatPass(!secureTextEntryRepeatPass);
  };


  return (
    <>
      <StatusBar backgroundColor={colors.primary}/>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.back}>
            <Feather style={styles.iconBack} name="arrow-left" size={30} color="#FFFFFF"/>
            <Text style={styles.text}>Change Password</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <Formik
            initialValues={{
              currentPassword:'',
              newPassword:'',
              repeatPassword:'',
            }}
            onSubmit={(values,actions)=>{
              actions.resetForm();
            }}
            validationSchema={schema}
          >
          {(props)=>(
            <View style={styles.footerContent}>
              <Text style={styles.description}>You must enter your current password and then type your new password twice.</Text>
              <View style={props.values.currentPassword ? styles.textWrapperPasswordFilled : styles.textWrapperPasswordBlank}>
                <View style={styles.passwordForm}>
                  <IconButton icon="lock-outline" color={props.values.currentPassword ? colors.primary : colors.textDescription}/>
                  <TextInput
                    style={styles.textForm}
                    placeholder="Current Password"
                    onChangeText={props.handleChange('currentPassword')}
                    value={props.values.currentPassword}
                    onBlur={props.handleBlur('currentPassword')}
                    secureTextEntry={secureTextEntryCurrentPass ? true : false}
                  />
                </View>
                <TouchableOpacity onPress={handleSecureTextCurrentPass}>
                  {secureTextEntryCurrentPass ?
                    <IconButton icon="eye-off" color={colors.textDescription}/>
                    :
                    <IconButton icon="eye" color={colors.textDescription}/>
                  }
                </TouchableOpacity>
              </View>
              <Text style={styles.isValidInput}>{props.touched.currentPassword && props.errors.currentPassword}</Text>
              <View style={props.values.newPassword ? styles.textWrapperPasswordFilled : styles.textWrapperPasswordBlank}>
                <View style={styles.passwordForm}>
                  <IconButton icon="lock-outline" color={props.values.newPassword ? colors.primary : colors.textDescription}/>
                  <TextInput
                    style={styles.textForm}
                    placeholder="New Password"
                    onChangeText={props.handleChange('newPassword')}
                    value={props.values.newPassword}
                    onBlur={props.handleBlur('newPassword')}
                    secureTextEntry={secureTextEntryNewPass ? true : false}
                  />
                </View>
                <TouchableOpacity onPress={handleSecureTextNewPass}>
                  {secureTextEntryNewPass ?
                    <IconButton icon="eye-off" color={colors.textDescription}/>
                    :
                    <IconButton icon="eye" color={colors.textDescription}/>
                  }
                </TouchableOpacity>
              </View>
              <Text style={styles.isValidInput}>{props.touched.newPassword && props.errors.newPassword}</Text>
              <View style={props.values.repeatPassword ? styles.textWrapperPasswordFilled : styles.textWrapperPasswordBlank}>
                <View style={styles.passwordForm}>
                  <IconButton icon="lock-outline" color={props.values.repeatPassword ? colors.primary : colors.textDescription}/>
                  <TextInput
                    style={styles.textForm}
                    placeholder="Repeat Password"
                    onChangeText={props.handleChange('repeatPassword')}
                    value={props.values.repeatPassword}
                    onBlur={props.handleBlur('repeatPassword')}
                    secureTextEntry={secureTextEntryRepeatPass ? true : false}
                  />
                </View>
                <TouchableOpacity onPress={handleSecureTextRepeatPass}>
                  {secureTextEntryRepeatPass ?
                    <IconButton icon="eye-off" color={colors.textDescription}/>
                    :
                    <IconButton icon="eye" color={colors.textDescription}/>
                  }
                </TouchableOpacity>
              </View>
              <Text style={styles.isValidInput}>{props.touched.repeatPassword && props.errors.repeatPassword}</Text>
              <View style={styles.buttonWrapper}>
                <TouchableOpacity onPress={props.handleSubmit} disabled={!props.values.currentPassword || !props.values.newPassword || !props.values.repeatPassword} style={!props.values.currentPassword || !props.values.newPassword || !props.values.repeatPassword ? styles.buttonBlank : styles.buttonFilled}>
                  <Text style={!props.values.currentPassword || !props.values.newPassword || !props.values.repeatPassword ? styles.textButtonBlank : styles.textButtonFilled}>Change Password</Text>
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

export default ChangePassword;

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
  textWrapperPasswordBlank:{
    borderBottomWidth:1.5,
    borderColor:'rgba(169, 169, 169, 0.6)',
    flexDirection:'row',
    justifyContent:'space-between',
  },
  textWrapperPasswordFilled:{
    borderBottomWidth:1.5,
    borderColor:colors.primary,
    flexDirection:'row',
    justifyContent:'space-between',
  },
  passwordForm:{
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

