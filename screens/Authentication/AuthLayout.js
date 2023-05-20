import React from 'react';

import {
  View,
  TouchableWithoutFeedback,
  Animated,
  ScrollView,
  Text,
  Image,
} from 'react-native';
import {COLORS, FONTS, SIZES, icons, images} from '../../constants';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const AuthLayout = ({title, subtitle, titleContainerStyle, children}) => {
  return (
    <View
      style={{
        flex: 1,
        paddingVertical: SIZES.radius,
        backgroundColor: COLORS.white,
      }}>
      <KeyboardAwareScrollView
        keyboardDismissMode="on-drag"
        contentContainerStyle={{
          flex: 1,
          paddingHorizontal: SIZES.padding,
        }}>
        {/* Icon */}
        <View
          style={{
            alignItems: 'center',
          }}>
          <Image
            source={images.logo_02}
            resizeMode="contain"
            style={{
              height: 90,
              width: 180,
            }}
          />
        </View>

        {/* Title & Section */}
        <View
          style={{
            // marginTop: SIZES.padding,
            ...titleContainerStyle,
          }}>
          <Text
            style={{
              textAlign: 'center',
              ...FONTS.h2,
              fontWeight: 'bold',
              color: COLORS.black,
            }}>
            {title}
          </Text>
          <Text
            style={{
              textAlign: 'center',
              ...FONTS.body3,
              color: COLORS.darkGray,
              //marginTop: SIZES.base,
            }}>
            {subtitle}
          </Text>
        </View>

        {/* Content/children */}
        {children}
      </KeyboardAwareScrollView>
    </View>
  );
};

export default AuthLayout;
