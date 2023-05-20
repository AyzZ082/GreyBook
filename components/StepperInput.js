import React from 'react';
import {Text, TouchableOpacity, View, Image, StyleSheet} from 'react-native';
import {icons, COLORS, FONTS, SIZES} from '../constants';
import IconButton from './IconButton';

const StepperInput = ({containerStyle, value = 1, onAdd, onMinus}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 60,
        width: 130,
        backgroundColor: COLORS.lightGray2,
        borderRadius: SIZES.radius,
        ...containerStyle,
      }}>
      <IconButton
        containerStyle={{
          width: 50,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        icon={icons.star}
        // iconStyle={}
      />
    </View>
  );
};

export default StepperInput;
