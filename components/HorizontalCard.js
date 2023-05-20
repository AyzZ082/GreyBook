import React from 'react';
import {TouchableOpacity, Image, View, Text} from 'react-native';
import {COLORS, FONTS, Images, SIZES, icons} from '../constants';

const HorizontalCard = ({containerStyle, imageStyle, item, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.lightGray2,
        ...containerStyle,
      }}>
      {/* Image */}
      <Image source={item.image} style={imageStyle} />
      {/* Info */}
      <View style={{flex: 1}}>
        <Text
          style={{
            ...FONTS.h3,
            fontSize: 18,
            color: COLORS.black,
            fontWeight: 'bold',
          }}>
          {item.name}
        </Text>
        <Text style={{...FONTS.body4, color: COLORS.darkGray}}>
          {item.description}
        </Text>
        <Text
          style={{
            ...FONTS.h3,
            marginTop: SIZES.base,
            color: COLORS.black,
            fontWeight: 'bold',
          }}>
          Rs.{item.price}
        </Text>
      </View>

      {/* Fav */}
      <View
        style={{
          flexDirection: 'row',
          position: 'absolute',
          top: 12,
          right: SIZES.radius,
        }}>
        <TouchableOpacity>
          <Image
            source={icons.favourite}
            style={{width: 20, height: 20, tintColor: COLORS.darkGray2}}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default HorizontalCard;
