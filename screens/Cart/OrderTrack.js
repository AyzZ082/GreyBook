import React from 'react';
import {
    View,
    Text,
    ScrollView
} from 'react-native';
import { COLORS, SIZES, icons, FONTS } from '../../constants';
import { ScndHeader, IconButton, FormInput ,TextIconButton } from '../../components';


const OrderTrack = ({ navigation, route }) => {

    const [orderNumber, setOrderNumber] = React.useState("")
    function renderHeader() {
        return (
            
          <ScndHeader
            title="TRACK YOUR ORDER"
            containerStyle={{
              height: 50,
              marginHorizontal: SIZES.padding,
              marginTop: 20,
            }}
            leftComponent={
              <IconButton
                icon={icons.back}
                containerStyle={{
                  width: 40,
                  height: 40,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderColor: COLORS.gray2,
                  borderWidth: 1,
                  borderRadius: SIZES.radius,
                }}
                iconStyle={{
                  width: 20,
                  height: 20,
                  tintColor: COLORS.gray2,
                }}
                //onPress={() => console.log('Back')}
                onPress={() => navigation.goBack()}
              />
            }
            rightComponent={
              <View style={{width:40}}></View>
              }
            //rightComponent={<CartQuantityButton quantity={4} />}
          />
        );
      }
      function renderTrackForm(){
        return(
          <View >
            
            <FormInput 
            containerStyle={{
              marginTop: SIZES.padding,
            }}
            label="Enter Tracking Number"
            value={orderNumber}
            onChange={value=> {
              setOrderNumber(value);
            }}
            />
            <View style={{
                marginTop: SIZES.radius,
          flexDirection: 'row',
          height: 55
        }}>
          <TextIconButton
          containerStyle={{
            flex: 1,
            borderRadius: SIZES.base,
            backgroundColor: COLORS.primary
          }}
          label="Track My Number"
          labelStyle={{
            color: COLORS.white,
            ...FONTS.h3
          }}
          icon={icons.location}
          iconPosition="LEFT"
          iconStyle={{
            width: 25,
            height: 25,
            marginRight: SIZES.base,
            tintColor: COLORS.white
          }}
          onPress={()=> navigation.navigate("DeliveryStatus")}
          />
        </View>
        </View>
        )
      }
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.white
            }}
        >
            {/* Header */}
            {renderHeader()}
            
            <ScrollView contentContainerStyle={{
      paddingHorizontal:SIZES.padding,
      paddingBottom:150
    }}>
{renderTrackForm()}
    </ScrollView>
            
        </View>
    )
}

export default OrderTrack;