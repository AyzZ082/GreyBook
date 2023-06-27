import React from 'react';
import {TouchableOpacity, Image, View, Text} from 'react-native';
import {COLORS, FONTS, Images, SIZES, dummyData, icons} from '../constants';
import TextIconButton from './TextIconButton';

const MyBook = ({containerStyle, imageStyle, item, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.lightGray2,
        marginTop: SIZES.radius,
        ...containerStyle,
      }}>
      {/* Image */}
      <Image source={item.image} style={imageStyle} />
      {/* Info */}
      <View style={{flex: 1}}>
        <Text
          style={{
            ...FONTS.h3,
            fontSize: 17,

            color: COLORS.black,
          }}>
          {item.name}
        </Text>
        <Text
          style={{
            ...FONTS.body4,
            marginTop: 2,
            fontSize: 16,
            color: COLORS.black,
          }}>
          Rs. {item.price}
        </Text>
        <View
          style={{
            marginTop: 4,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text
            style={{
              ...FONTS.h4,

              color: COLORS.darkGray,
            }}>
            Category:
          </Text>
          <Text
            style={{
              ...FONTS.body4,
              color: COLORS.darkGray,
              paddingLeft: 4,
            }}>
            Motivation
          </Text>
        </View>

        <TextIconButton
          containerStyle={{
            marginTop: SIZES.base,
            height: 42,
            borderRadius: SIZES.base,
            backgroundColor: COLORS.primary,
          }}
          label="Delete"
          labelStyle={{
            color: COLORS.white,
            ...FONTS.h3,
          }}
          icon={icons.delete_icon}
          iconPosition="LEFT"
          iconStyle={{
            width: 18,
            height: 18,
            marginRight: SIZES.base,
            tintColor: COLORS.white,
          }}
          onPress={() => console.log('Del')}
        />
      </View>

      {/* Fav
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
      </View> */}
    </TouchableOpacity>
  );
};

export default MyBook;
