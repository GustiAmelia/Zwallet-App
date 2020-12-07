import React, {useState} from 'react';
import { View, Text, StyleSheet, StatusBar, TextInput,TouchableOpacity,TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';
import {colors} from '../components/colors';
import {Formik} from 'formik';
import * as yup from 'yup';
import {List} from 'react-native-paper';

const Login = () => {

  const schema = yup.object({
    email:yup.string().required().email(),
    password:yup.string().required(),
  });

  const [secureTextEntry,setSecureTextEntry] = useState(true);
  const handleSecureText = ()=>{
    setSecureTextEntry(!secureTextEntry);
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
                email:'',
                password:'',
              }}
              onSubmit={(values,actions)=>{
                actions.resetForm();
              }}
              validationSchema={schema}
            >
            {(props)=>(
              <ScrollView>
                <View style={styles.footerContent}>
                  <Text style={styles.titleFooter}>Login</Text>
                  <Text style={styles.textFooter}>Login to your existing account to access all the features in Zwallet.</Text>
                  <View style={props.values.email ? styles.textWrapperFilled : styles.textWrapperBlank}>
                    <List.Icon icon="email-outline" color={props.values.email ? colors.primary : colors.textDescription}/>
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
                  <View style={props.values.password ? styles.textWrapperPasswordFilled : styles.textWrapperPasswordBlank}>
                    <View style={styles.passwordForm}>
                      <List.Icon icon="lock-outline" color={props.values.password ? colors.primary : colors.textDescription}/>
                      <TextInput
                        style={styles.textForm}
                        placeholder="Enter your password"
                        onChangeText={props.handleChange('password')}
                        value={props.values.password}
                        onBlur={props.handleBlur('password')}
                        secureTextEntry={secureTextEntry ? true : false}
                      />
                    </View>
                    <TouchableOpacity onPress={handleSecureText}>
                      {secureTextEntry ?
                        <List.Icon icon="eye-off" color={colors.textDescription}/>
                        :
                        <List.Icon icon="eye" color={colors.textDescription}/>
                      }
                    </TouchableOpacity>
                  </View>
                  <Text style={styles.isValidInput}>{props.touched.password && props.errors.password}</Text>
                  <TouchableOpacity>
                    <Text style={styles.textForgot}>Forgot password?</Text>
                  </TouchableOpacity>
                  <View style={styles.buttonWrapper}>
                    <TouchableOpacity disabled={!props.values.email || !props.values.password} style={!props.values.email || !props.values.password ? styles.buttonBlank : styles.buttonFilled}>
                      <Text style={!props.values.email || !props.values.password ? styles.textButtonBlank : styles.textButtonFilled}>Login</Text>
                    </TouchableOpacity>
                    <View style={styles.questions}>
                      <Text style={styles.textQuestions}>Don’t have an account? Let’s </Text>
                      <TouchableOpacity>
                        <Text style={styles.link}>Sign Up</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </ScrollView>
            )}
            </Formik>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

export default Login;

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
  },
  buttonBlank:{
    alignItems:'center',
    backgroundColor:colors.btn,
    borderRadius:10,
  },
  textButtonFilled:{
    fontSize:18,
    lineHeight:25,
    marginVertical:16,
    color:colors.white,
  },
  textButtonBlank:{
    fontSize:18,
    lineHeight:25,
    marginVertical:16,
    color:colors.grey,
  },
  textForgot:{
    color:colors.dark,
    fontSize:14,
    lineHeight:24,
    textAlign:'right',
    marginTop:10,
  },
  isValidInput :{
    color:colors.error,
    marginTop:5,
  },
  questions:{
    flexDirection:'row',
    justifyContent:'center',
    marginTop:25,
  },
  textQuestions:{
    color:colors.grey,
    fontSize:16,
    lineHeight:23,
  },
  link:{
    color:colors.primary,
    fontWeight:'bold',
    fontSize:16,
    lineHeight:23,
  },
});

