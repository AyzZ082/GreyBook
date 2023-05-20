import React from 'react';
import {Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {COLORS, FONTS} from '../constants';

const TextIconButton = ({
  containerStyle,
  label,
  labelStyle,
  icon,
  iconPosition,
  iconStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        ...containerStyle,
      }}
      onPress={onPress}>
      {iconPosition == 'LEFT' && (
        <Image
          source={icon}
          style={{
            ...styles.image,
            ...iconStyle,
          }}
        />
      )}
      <Text style={{...FONTS.body3, ...labelStyle}}>{label}</Text>
      {iconPosition == 'RIGHT' && (
        <Image
          source={icon}
          style={{
            ...styles.image,
            ...iconStyle,
          }}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 20,
    height: 20,
    tintColor: COLORS.black,
    marginLeft: 5,
  },
});

export default TextIconButton;
