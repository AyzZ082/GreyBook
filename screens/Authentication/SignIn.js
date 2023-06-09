import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ToastAndroid,
  Platform,
  Alert,
} from 'react-native';

import AuthLayout from './AuthLayout';

import {
  FormInput,
  CustomSwitch,
  TextButton,
  TextIconButton,
} from '../../components';
import {COLORS, FONTS, SIZES, icons} from '../../constants';
import {utils} from '../../utils';
import axios from 'axios';
import envURL from '../../envURL';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Footer

//        <View>
//         {/* FB */}
//         <TextIconButton
//           containerStyle={{
//             height: 50,
//             alignItems: 'center',
//             borderRadius: SIZES.radius,
//             backgroundColor: COLORS.blue,
//           }}
//           icon={icons.fb}
//           iconPosition="LEFT"
//           iconStyle={{
//             tintColor: COLORS.white,
//           }}
//           label="Continue With Facebook"
//           labelStyle={{
//             marginLeft: SIZES.radius,
//             color: COLORS.white,
//           }}
//           onPress={() => console.log('FB')}
//         />
//         {/* Google */}
//         <TextIconButton
//           containerStyle={{
//             height: 50,
//             alignItems: 'center',
//             marginTop: SIZES.radius,
//             borderRadius: SIZES.radius,
//             backgroundColor: COLORS.lightGray2,
//           }}
//           icon={icons.google}
//           iconPosition="LEFT"
//           iconStyle={{
//             tintColor: null,
//           }}
//           label="Continue With Google"
//           labelStyle={{
//             marginLeft: SIZES.radius,
//             color: COLORS.black,
//           }}
//           onPress={() => console.log('Google')}
//         />
//       </View>

const SignIn = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [emailError, setEmailError] = React.useState('');
  const [showPass, setshowPass] = React.useState(false);
  const [saveMe, setSaveMe] = React.useState(false);

  function isEnableSignIn() {
    return email != '' && password != '' && emailError == '';
  }
  const showToast = msg => {
    Alert.alert('Title', msg);
  };
  const TrySignin = async () => {
    // console.log("rnv dtstud ",env.REACT_APP_BACKEND_URL)
    await axios
      .post(`${envURL.REACT_APP_BACKEND_URL}/account/login`, {
        Email: email,
        Password: password,
      })
      .then(async res => {
        console.log('user signed in successfully');
        await AsyncStorage.setItem('token', res.data.authtoken);
        navigation.navigate('MainLayout');
      })
      .catch(err => {
        Alert.alert(
          'Title',
          err.response.data.error
            ? err.response.data.error
            : 'Something Went Wrong! Try Again',
        );
      });
  };
  return (
    <AuthLayout
      title="Let's Sign You In"
      subtitle="Welcome back, you've been missed">
      <View
        style={{
          flex: 1,
          marginTop: SIZES.padding,
        }}>
        {/* Inputs */}
        <FormInput
          label="Email"
          keyboardType="email-address"
          autoCompleteType="email"
          onChange={value => {
            //validate Email
            utils.validateEmail(value, setEmailError);
            setEmail(value);
          }}
          errorMsg={emailError}
          appendComponent={
            <View
              style={{
                justifyContent: 'center',
              }}>
              <Image
                source={
                  email == '' || (email != '' && emailError == '')
                    ? icons.correct
                    : icons.cancel
                }
                style={{
                  height: 20,
                  width: 20,
                  tintColor:
                    email == ''
                      ? COLORS.gray
                      : email != '' && emailError == ''
                      ? COLORS.green
                      : COLORS.red,
                }}
              />
            </View>
          }
        />
        <FormInput
          label="Password"
          // keyboardType="password"
          secureTextEntry={!showPass}
          autoCompleteType="password"
          onChange={value => {
            //validate Email
            setPassword(value);
          }}
          //errorMsg={emailError}
          appendComponent={
            <TouchableOpacity
              style={{
                width: 40,
                alignItems: 'flex-end',
                justifyContent: 'center',
              }}
              onPress={() => setshowPass(!showPass)}>
              <Image
                source={showPass ? icons.eye_close : icons.eye}
                style={{height: 20, width: 20, tintColor: COLORS.gray}}
              />
            </TouchableOpacity>
          }
        />
        {/* Save me & Forgot */}
        <View
          style={{
            flexDirection: 'row',
            marginTop: SIZES.radius,
            justifyContent: 'space-between',
          }}>
          <CustomSwitch value={saveMe} onChange={value => setSaveMe(value)} />
          <TextButton
            label="Forgot Password?"
            buttonStyle={{
              backgroundColor: null,
            }}
            labelStyle={{
              color: COLORS.gray,
              ...FONTS.body4,
            }}
            onPress={() => navigation.navigate('ForgotPassword')}
          />
        </View>
        {/* Sign In */}
        <TextButton
          label="Sign In"
          disabled={isEnableSignIn() ? false : true}
          buttonStyle={{
            height: 55,
            alignItems: 'center',
            marginTop: SIZES.padding,
            borderRadius: SIZES.radius,
            backgroundColor: isEnableSignIn()
              ? COLORS.primary
              : COLORS.transparentPrimary,
          }}
          onPress={() => TrySignin()}
        />
        {/* CreateAccount */}
        <View
          style={{
            flexDirection: 'row',
            marginTop: SIZES.radius,
            justifyContent: 'center',
          }}>
          <Text style={{color: COLORS.darkGray, ...FONTS.body3}}>
            Don't have an account?
          </Text>
          <TextButton
            label="Sign Up"
            buttonStyle={{
              marginLeft: 3,
              backgroundColor: null,
            }}
            labelStyle={{
              color: COLORS.primary,
              ...FONTS.h3,
            }}
            onPress={() => navigation.navigate('SignUp')}
          />
        </View>
      </View>
    </AuthLayout>
  );
};

export default SignIn;
