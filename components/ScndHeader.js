import React from 'react';
import {View, Text} from 'react-native';
import {FONTS} from '../constants';
const ScndHeader = ({
  containerStyle,
  title,
  titleStyle,
  leftComponent,
  rightComponent,
}) => {
  return (
    // <View
    //   style={{
    //     //height: 60,
    //     flexDirection: 'row',
    //     ...containerStyle,
    //   }}>
    //   {leftComponent}
    //   <View
    //     style={{
    //       flex: 1,
    //       alignItems: 'center',
    //       justifyContent: 'center',
    //     }}>
    //     <Text style={{...FONTS.h3}}>{title}</Text>
    //   </View>
    //   {rightComponent}
    // </View>
    <View style={{flexDirection: 'row', ...containerStyle}}>
      {/* Left */}
      {leftComponent}

      {/* Title */}
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{...FONTS.h3}}>{title}</Text>
      </View>
      {/* Right */}
      {rightComponent}
    </View>
  );
};
export default ScndHeader;
