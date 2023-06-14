import React from 'react';
import {View, Text, TouchableOpacity, Image, Alert} from 'react-native';

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

const SignUp = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [showPass, setshowPass] = React.useState(false);

  const [emailError, setEmailError] = React.useState('');
  const [usernameError, setUsernameError] = React.useState('');
  const [passError, setPassError] = React.useState('');

  function isEnableSignUp() {
    return (
      email != '' &&
      password != '' &&
      password != '' &&
      emailError == '' &&
      passError == '' &&
      usernameError == ''
    );
  }

  const TrySignUp = async () => {
    // console.log("rnv dtstud ",env.REACT_APP_BACKEND_URL)
    console.log('Hello');
    await axios
      .post(`${envURL.REACT_APP_BACKEND_URL}/account/createaccount`, {
        Email: email,
        Password: password,
        UserName: username,
      })
      .then(res => {
        console.log(res.data);
        navigation.navigate('Otp', {
          email,
          password,
          username,
          userid: res.data.userid,
        });
      })
      .catch(err => {
        console.log(err);
        Alert.alert(
          'Title',
          err.response.data.msg
            ? err.response.data.msg
            : 'Something Went Wrong! Try Again',
        );
      });
  };

  return (
    <AuthLayout
      title="Getting Started"
      subtitle="Create an account to continue"
      //   titleContainerStyle={{
      //     marginTop: SIZES.radius,
      //   }}
    >
      <View
        style={{
          flex: 1,
          marginTop: SIZES.radius,
        }}>
        {/* Inputs */}
        <FormInput
          label="Username"
          onChange={value => {
            //validate Email
            //utils.validateEmail(value, setEmailError);
            setUsername(value);
          }}
          errorMsg={usernameError}
          appendComponent={
            <View
              style={{
                justifyContent: 'center',
              }}>
              <Image
                source={
                  username == '' || (username != '' && usernameError == '')
                    ? icons.correct
                    : icons.cross
                }
                style={{
                  height: 20,
                  width: 20,
                  tintColor:
                    username == ''
                      ? COLORS.gray
                      : username != '' && usernameError == ''
                      ? COLORS.green
                      : COLORS.red,
                }}
              />
            </View>
          }
        />
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
            //validate Password
            utils.validatePassword(value, setPassError);
            setPassword(value);
          }}
          errorMsg={passError}
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

        {/* Sign Up */}
        <TextButton
          label="Sign Up"
          disabled={isEnableSignUp() ? false : true}
          buttonStyle={{
            height: 55,
            alignItems: 'center',
            marginTop: SIZES.padding,
            borderRadius: SIZES.radius,
            backgroundColor: isEnableSignUp()
              ? COLORS.primary
              : COLORS.transparentPrimary,
          }}
          onPress={() => TrySignUp()}
        />
        {/* Sign In */}
        <View
          style={{
            flexDirection: 'row',
            marginTop: SIZES.radius,
            justifyContent: 'center',
          }}>
          <Text style={{color: COLORS.darkGray, ...FONTS.body3}}>
            Already have an account?
          </Text>
          <TextButton
            label="Sign In"
            buttonStyle={{
              marginLeft: 3,
              backgroundColor: null,
            }}
            labelStyle={{
              color: COLORS.primary,
              ...FONTS.h3,
            }}
            onPress={() => navigation.goBack()}
          />
        </View>
      </View>
    </AuthLayout>
  );
};

export default SignUp;
