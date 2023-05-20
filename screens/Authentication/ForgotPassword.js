import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import AuthLayout from './AuthLayout';
import {COLORS, SIZES, FONTS, icons} from '../../constants';

import {TextButton, FormInput} from '../../components';
import {utils} from '../../utils';

const ForgotPassword = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [emailError, setEmailError] = React.useState('');

  function isEnableSendEmail() {
    return email != '' && emailError == '';
  }
  return (
    <AuthLayout
      title="Forgot Password"
      subtitle="Please enter your email to recover password"
      titleContainerStyle={{
        marginTop: SIZES.padding * 2,
      }}>
      {/* Input */}
      <View
        style={{
          flex: 1,
          marginTop: SIZES.padding * 2,
        }}>
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
                    : icons.cross
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
        <TextButton
          label="Send Email"
          disabled={isEnableSendEmail() ? false : true}
          buttonStyle={{
            height: 55,

            alignItems: 'center',
            marginTop: SIZES.padding,
            borderRadius: SIZES.radius,
            backgroundColor: isEnableSendEmail()
              ? COLORS.primary
              : COLORS.transparentPrimary,
          }}
          onPress={() => navigation.goBack()}
        />
      </View>
    </AuthLayout>
  );
};

export default ForgotPassword;
