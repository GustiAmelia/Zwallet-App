import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { View, Text, StyleSheet, StatusBar, TextInput,TouchableOpacity,TouchableWithoutFeedback, Keyboard, ScrollView, ActivityIndicator} from 'react-native';
import {colors} from '../components/colors';
import {Formik} from 'formik';
import * as yup from 'yup';
import {IconButton} from 'react-native-paper';
import {registerCreator} from '../redux/actions/auth';

const SignUp = ({navigation}) => {

  const schema = yup.object({
    username:yup.string().required(),
    email:yup.string().required().email(),
    password:yup.string().required(),
  });

  const [secureTextEntry,setSecureTextEntry] = useState(true);
  const handleSecureText = ()=>{
    setSecureTextEntry(!secureTextEntry);
  };

  const dispatch = useDispatch();
  const isLoading = useSelector((state)=>state.auth.isLoading);

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
                username:'',
                email:'',
                password:'',
              }}
              onSubmit={(values,actions)=>{
                actions.resetForm();
                dispatch(registerCreator(values));
              }}
              validationSchema={schema}
            >
            {(props)=>(
              <ScrollView style={styles.footerContent}>
                <Text style={styles.titleFooter}>Sign Up</Text>
                <Text style={styles.textFooter}>Create your account to access Zwallet.</Text>
                <View style={props.values.username ? styles.textWrapperFilled : styles.textWrapperBlank}>
                  <IconButton icon="account-outline" color={props.values.username ? colors.primary : colors.textDescription}/>
                  <TextInput
                    style={styles.textForm}
                    placeholder="Enter your username"
                    onChangeText={props.handleChange('username')}
                    value={props.values.username}
                    onBlur={props.handleBlur('username')}
                  />
                </View>
                <Text style={styles.isValidInput}>{props.touched.username && props.errors.username}</Text>
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
                <View style={props.values.password ? styles.textWrapperPasswordFilled : styles.textWrapperPasswordBlank}>
                  <View style={styles.passwordForm}>
                    <IconButton icon="lock-outline" color={props.values.password ? colors.primary : colors.textDescription}/>
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
                      <IconButton icon="eye-off" color={colors.textDescription}/>
                      :
                      <IconButton icon="eye" color={colors.textDescription}/>
                    }
                  </TouchableOpacity>
                </View>
                <Text style={styles.isValidInput}>{props.touched.password && props.errors.password}</Text>
                <View style={styles.buttonWrapper}>
                  {isLoading ?
                    <View style={styles.buttonFilled}>
                      <ActivityIndicator color="white" size={30} style={styles.textButtonFilled}/>
                    </View>
                    :
                    <TouchableOpacity onPress={props.handleSubmit} disabled={!props.values.email || !props.values.password} style={!props.values.email || !props.values.password ? styles.buttonBlank : styles.buttonFilled}>
                      <Text style={!props.values.email || !props.values.password ? styles.textButtonBlank : styles.textButtonFilled}>Sign Up</Text>
                    </TouchableOpacity>
                  }
                  <View style={styles.questions}>
                    <Text style={styles.textQuestions}>Already have an account? Let’s </Text>
                    <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                      <Text style={styles.link}>Login</Text>
                    </TouchableOpacity>
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

export default SignUp;

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
    paddingVertical:10,
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
  questions:{
    flexDirection:'row',
    justifyContent:'center',
    marginTop:20,
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

