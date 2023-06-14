import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, Alert} from 'react-native';

import AuthLayout from './AuthLayout';
import {COLORS, SIZES, FONTS} from '../../constants';

import OTPInputView from '@twotalltotems/react-native-otp-input';
import {TextButton} from '../../components';
import axios from 'axios';
import envURL from '../../envURL';

const Otp = ({navigation, route}) => {
  const [timer, setTimer] = React.useState(60);
  const {email, password, username, userid} = route.params;
  const [otp, setOtp] = useState(null);
  React.useEffect(() => {
    let interval = setInterval(() => {
      setTimer(prevTimer => {
        if (prevTimer > 0) {
          return prevTimer - 1;
        } else {
          return prevTimer;
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const VerifyOTP = async () => {
    // console.log("rnv dtstud ",env.REACT_APP_BACKEND_URL)
    console.log(userid);
    await axios
      .post(`${envURL.REACT_APP_BACKEND_URL}/account/verifyemail`, {
        userid: userid,
        Token: otp,
        Email: email,
        Password: password,
        UserName: username,
      })
      .then(res => {
        console.log(res.data);
        navigation.navigate('MainLayout');
      })
      .catch(err => {
        // console.log(err.response);
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
      title="OTP Autication"
      subtitle="An authentication Code is sent to abdulmutakabirayaz@gmail.com"
      titleContainerStyle={{
        marginTop: SIZES.padding * 2,
      }}>
      {/* OTPInput */}
      <View
        style={{
          flex: 1,
          marginTop: SIZES.padding * 2,
        }}>
        <OTPInputView
          pinCount={4}
          style={{
            width: '100%',
            height: 50,
          }}
          codeInputFieldStyle={{
            width: 65,
            height: 65,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.lightGray2,
            color: COLORS.black,
          }}
          onCodeFilled={code => {
            setOtp(code);
          }}
        />
        {/* CountDown */}
        <View
          style={{
            flexDirection: 'row',
            marginTop: SIZES.radius,
            justifyContent: 'center',
          }}>
          <Text style={{color: COLORS.darkGray, ...FONTS.body3}}>
            Didn't received code?
          </Text>
          <TextButton
            label={`Resend(${timer}s)`}
            disabled={timer == 0 ? false : true}
            buttonStyle={{
              marginLeft: SIZES.base,
              backgroundColor: null,
            }}
            labelStyle={{
              color: COLORS.primary,
              ...FONTS.h3,
            }}
            onPress={() => setTimer(60)}
          />
        </View>
      </View>
      {/* Footer */}
      <TextButton
        label="Continue"
        buttonStyle={{
          height: 55,
          alignItems: 'center',
          marginTop: SIZES.padding,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.primary,
        }}
        onPress={() => VerifyOTP()}
      />
      <View
        style={{
          marginTop: SIZES.radius,
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: COLORS.darkGray,
            ...FONTS.body3,
          }}>
          By signing up, you agree to our
        </Text>
        <TextButton
          label={'Terms & Conditions'}
          buttonStyle={{
            backgroundColor: null,
          }}
          labelStyle={{
            color: COLORS.primary,
            ...FONTS.h3,
          }}
          onPress={() => console.log('T&C')}
        />
      </View>
    </AuthLayout>
  );
};

export default Otp;
