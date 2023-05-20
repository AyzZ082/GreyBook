import React from 'react';
import {Text, TouchableOpacity, View, Image} from 'react-native';
import {COLORS, FONTS} from '../constants';

const TextButton = ({label, buttonStyle, labelStyle, onPress, disabled}) => {
  return (
    <TouchableOpacity
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.primary,
        ...buttonStyle,
      }}
      disabled={disabled}
      onPress={onPress}>
      <Text style={{color: COLORS.white, ...FONTS.h3, ...labelStyle}}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default TextButton;
