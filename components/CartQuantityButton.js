import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {FONTS, COLORS, icons, SIZES} from '../constants';

const CartQuantityButton = ({containerStyle, quantity, iconStyle, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.transparentPrimary,
        ...containerStyle,
      }}
      onPress={onPress}>
      <Image
        source={icons.cart}
        style={{
          width: 20,
          height: 20,
          tintColor: COLORS.black,
          ...iconStyle,
        }}
      />
      <View
        style={{
          position: 'absolute',
          top: 5,
          right: 5,
          height: 15,
          width: 15,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: SIZES.radius,
          //backgroundColor: COLORS.transparentPrimary,
        }}>
        <Text
          style={{
            color: COLORS.white,
            ...FONTS.body5,
            lineHeight: 0,
            fontSize: 10,
          }}>
          {quantity}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export default CartQuantityButton;
