import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {FONTS, COLORS, SIZES, icons, images, dummyData} from '../constants';

import {
  IconButton,
  ScndHeader,
  CartQuantityButton,
  IconLabel,
  LineDivider,
  Ratings,
  StepperInput,
  TextButton,
  TextIconButton,
} from '.';

const ProfileOption = ({icon, label, value, onPress}) => {
    return(
        <TouchableOpacity
        style={{
            flexDirection: 'row',
            height: 70,
            alignItems: 'center'
        }}
        onPress={onPress}
        >
            {/* Icons */}
            <View style={{
                width:40,
                height:40,
                alignItems:'center',
                justifyContent: 'center',
                borderRadius: 20,
                backgroundColor: COLORS.transparentPrimary
            }}>
                <Image
                source={icon}
                resizeMode='contain'
                style={{
                    width:25,
                    height: 25,
                    tintColor: COLORS.primary
                }}
                />
            </View>
            {/* Label & Value */}
            <View style={{
                flex:1,
                marginLeft: SIZES.radius
            }}>
                {label && 
                <Text style={{
                    color:COLORS.darkGray2,
                    ...FONTS.body3
                }}>
                    {label}</Text>}
                    <Text style={{...FONTS.h3, color: COLORS.black}}>{value}</Text>
            </View>
            {/* Icon */}
            <Image
            source={icons.back}
            style={{
                width:15,
                height:15
            }}
            />
        </TouchableOpacity>
    )
}

export default ProfileOption;