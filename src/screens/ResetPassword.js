import React, {useState} from 'react';
import { View, Text, StyleSheet, StatusBar, TextInput,TouchableOpacity,TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';
import {colors} from '../components/colors';
import {Formik} from 'formik';
import * as yup from 'yup';
import {IconButton} from 'react-native-paper';

const ResetPassword = () => {

  const schema = yup.object({
    newPassword:yup.string().required(),
    confirmPassword:yup.string().required(),
  });

  const [secureTextEntryNewPass,setSecureTextEntryNewPass] = useState(true);
  const [secureTextEntryConfirm,setSecureTextEntryConfirm] = useState(true);

  const handleSecureTextNewPass = ()=>{
    setSecureTextEntryNewPass(!secureTextEntryNewPass);
  };

  const handleSecureTextConfirm = ()=>{
    setSecureTextEntryConfirm(!secureTextEntryConfirm);
  };

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
                newPassword:'',
                confirmPassword:'',
              }}
              onSubmit={(values,actions)=>{
                actions.resetForm();
              }}
              validationSchema={schema}
            >
            {(props)=>(
              <View style={styles.footerContent}>
                <Text style={styles.titleFooter}>Reset Password</Text>
                <Text style={styles.textFooter}>Create and confirm your new password so you can login to Zwallet.</Text>
                <View style={props.values.newPassword ? styles.textWrapperPasswordFilled : styles.textWrapperPasswordBlank}>
                  <View style={styles.passwordForm}>
                    <IconButton icon="lock-outline" color={props.values.newPassword ? colors.primary : colors.textDescription}/>
                    <TextInput
                      style={styles.textForm}
                      placeholder="Create new password"
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
                <View style={props.values.confirmPassword ? styles.textWrapperPasswordFilled : styles.textWrapperPasswordBlank}>
                  <View style={styles.passwordForm}>
                    <IconButton icon="lock-outline" color={props.values.confirmPassword ? colors.primary : colors.textDescription}/>
                    <TextInput
                      style={styles.textForm}
                      placeholder="Confirm new password"
                      onChangeText={props.handleChange('confirmPassword')}
                      value={props.values.confirmPassword}
                      onBlur={props.handleBlur('confirmPassword')}
                      secureTextEntry={secureTextEntryConfirm ? true : false}
                    />
                  </View>
                  <TouchableOpacity onPress={handleSecureTextConfirm}>
                    {secureTextEntryConfirm ?
                      <IconButton icon="eye-off" color={colors.textDescription}/>
                      :
                      <IconButton icon="eye" color={colors.textDescription}/>
                    }
                  </TouchableOpacity>
                </View>
                <Text style={styles.isValidInput}>{props.touched.confirmPassword && props.errors.confirmPassword}</Text>
                <View style={styles.buttonWrapper}>
                  <TouchableOpacity onPress={props.handleSubmit} style={styles.button}>
                    <Text style={styles.textButton}>Reset Password</Text>
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

export default ResetPassword;

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
    marginBottom:20,
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

