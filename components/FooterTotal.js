import React from 'react';
import {Text, TouchableWithoutFeedback, View, StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../constants';
import LinearGradient from 'react-native-linear-gradient';
import LineDivider from './LineDivider';
import TextButton from './TextButton';


const FooterTotal = ({subTotal, shippingFee, total, onPress}) => {
    return(
        <View>
            <LinearGradient
            start={{x:0, y:0}}
            end={{x:0,y:1}}
            colors={[COLORS.transparent, COLORS.lightGray1]}
            style={{
                position: 'absolute',
                top: -15,
                left: 0,
                right: 0,
                height: Platform.OS === 'ios' ? 200 : 50,
                borderTopRightRadius: 15,
                borderTopLeftRadius: 15,
            }}
            />
            {/* Order Details */}
            <View style={{padding:SIZES.padding,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            backgroundColor: COLORS.white}}>
                {/* Subtotal */}
                <View style={{flexDirection: 'row'}}>
                    <Text style={{flex:1, ...FONTS.body3}}>Subtotal</Text>
                    <Text style={{...FONTS.h3}}>Rs. {subTotal.toFixed(2)}</Text>
                </View>
                {/* shippingFee */}
                <View style={{
                    flexDirection: 'row',
                    marginTop: SIZES.base,
                    marginBottom: SIZES.radius,
                }}>
                    <Text style={{flex:1, ...FONTS.body3}}>Shipping Fee</Text>
                    <Text style={{...FONTS.h3}}>Rs. {shippingFee.toFixed(2)}</Text>
                </View>
                {/* Line */}
                <LineDivider/>
                {/* Total */}
                <View style={{
                    flexDirection: 'row',
                    marginTop: SIZES.radius,
                    marginBottom: SIZES.padding,
                }}>
                    <Text style={{flex:1, ...FONTS.h2}}>Total</Text>
                    <Text style={{...FONTS.h2}}>Rs. {total.toFixed(2)}</Text>
                </View>
                {/* Order */}
                <TextButton
                buttonStyle={{
                    height:60,
                    
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS.primary
                }}
                label="Place your Order"
                onPress={onPress}
                />
            </View>

        </View>
    )
}

export default FooterTotal;