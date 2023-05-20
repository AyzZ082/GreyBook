import React from 'react';
import {TouchableOpacity, Image, View, Text} from 'react-native';
import {COLORS, FONTS, Images, SIZES, icons} from '../constants';

const VerticalCard = ({containerStyle, item, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        width: 200,
        padding: SIZES.radius,
        alignitems: 'center',
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.lightGray2,
        ...containerStyle,
      }}>
      {/* Favoruite & Category */}
      <View style={{flexDirection: 'row'}}>
        {/* Category */}
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Image source={icons.calories} style={{width: 30, height: 30}} />
          <Text style={{color: COLORS.darkGray2, ...FONTS.body5}}>
            {item.calories} Reviews
          </Text>
        </View>
        {/* Favoruite */}
        <Image
          source={icons.love}
          style={{
            width: 20,
            height: 20,
            tintColor: item.isFavorite ? COLORS.primary : COLORS.gray,
          }}></Image>
      </View>
      {/* Image */}
      <View
        style={{
          height: 150,
          widht: 150,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image source={item.image} style={{height: '100%', width: '100%'}} />
      </View>
      {/* Info */}
      <Text style={{...FONTS.h3, fontWeight: 'bold', textAlign: 'center'}}>
        {item.name}
      </Text>
      <Text
        style={{color: COLORS.darkGray2, textAlign: 'center', ...FONTS.body5}}>
        {item.description}
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontWeight: 'bold',
          marginTop: SIZES.radius,
          ...FONTS.h3,
        }}>
        PKR {item.price}
      </Text>
    </TouchableOpacity>
  );
};

export default VerticalCard;
