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
  import {FONTS, COLORS, SIZES, icons, images, dummyData, constants} from '../../constants';

  import { SwipeListView } from 'react-native-swipe-list-view';
  
  import {
    IconButton,
    ScndHeader,
    CartQuantityButton,
    IconLabel,
    LineDivider,
    Ratings,
    StepperInput,
    TextButton,
    FooterTotal,
    TextIconButton,
  } from '../../components';

const DeliveryStatus = ({ navigation }) => {

    const [currentStep, setCurrentStep] = React.useState(4
      )

    function renderHeader() {
        return (
          <ScndHeader
            title="Track Your Order"
            containerStyle={{
              height: 50,
              marginHorizontal: SIZES.padding,
              marginTop: 20,
            }}/>
        )}
    function renderInfo() {
        return (
          <View style={{
            marginTop: SIZES.radius,
            paddingHorizontal:SIZES.padding,
          }}>
            <Text style={{textAlign: 'center', color: COLORS.gray, ...FONTS.body4}}>Estimated Delivery</Text>
            <Text style={{textAlign: 'center',  ...FONTS.h2}}>21 Sept 2023 / 12:30PM</Text>
          </View>
        )}
        function renderTrackOrder(){
          return(
            <View style={{
              marginTop: SIZES.padding,
              paddingVertical: SIZES.padding,
              borderRadius: SIZES.radius,
              borderWidth: 2,
              borderColor: COLORS.lightGray2,
              backgroundColor: COLORS.white2
            }}>
              {/* Track Order */}
              <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 20,
                paddingHorizontal: SIZES.padding
              }}>
                <Text style={{...FONTS.h3}}>Track Order</Text>
                <Text style={{color: COLORS.gray, ...FONTS.body3}}>GRW01234</Text>
              </View>
              <LineDivider lineStyle={{
                backgroundColor: COLORS.lightGray2
              }}/>
              {/* Status */}
              <View style={{
                marginTop: SIZES.padding,
                paddingHorizontal: SIZES.padding
              }}>
                {constants.track_order_status.map((item, index)=>{
                  return(
                    <View key={`StatusList-${index}`}>
                      <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginVertical: -5
                      }}>
                        <Image
                        source={icons.check_circle}
                        style={{
                          width:40,
                          height: 40,
                          tintColor: index <= currentStep?COLORS.primary : COLORS.lightGray1
                        }}
                        />
                        <View style={{
                          marginLeft: SIZES.radius
                        }}>
                          <Text style={{...FONTS.h3}}>{item.title}</Text>
                          <Text style={{color:COLORS.gray, ...FONTS.body4}}>{item.sub_title}</Text>
                        </View>
                      </View>
                      {index < constants.track_order_status.length-1&&
                      <View>
                        {index < currentStep && 
                        <View style={{
                          height:50,
                          width:3,
                          marginLeft:18,
                          backgroundColor:COLORS.primary,
                          zIndex: -1
                        }}/>
                        }
                        {index>=currentStep &&
                        <Image
                        source={icons.dotted_line}
                        resizeMode='cover'
                        style={{
                          width:4,
                          height: 50,
                          marginLeft: 17
                        }}
                        />
                        }
                      </View>
                      }
                    </View>
                  )
                })}

              </View>
            </View>
          )
        }

        function renderFooter(){
          return(
            <View style={{
              marginTop: SIZES.radius,
              marginBottom: SIZES.padding,
            }}>
              {currentStep < constants.track_order_status.length-1 &&
              <View style={{
                flexDirection: 'row',
                height: 55
              }}>
                {/* Cancel */}
                {/* <TextButton
                buttonStyle={{
                  width: '40%',
                  borderRadius: SIZES.base,
                  backgroundColor: COLORS.lightGray2
                }}
                label="Cancel"
                labelStyle={{
                  color: COLORS.primary
                }}
                onPress={()=> navigation.navigate("FoodDetail")}
                /> */}
                {/* MapView */}
                <TextIconButton
                containerStyle={{
                  flex: 1,
                  borderRadius: SIZES.base,
                  backgroundColor: COLORS.lightGray2
                }}
                label="Cancel"
                labelStyle={{
                  color: COLORS.primary,
                  ...FONTS.h3
                }}
                icon={icons.map}
                iconPosition="LEFT"
                iconStyle={{
                  width: 25,
                  height: 25,
                  marginRight: SIZES.base,
                  tintColor: COLORS.primary
                }}
                onPress={()=> navigation.navigate("MainLayout")}
                />
              </View>
              }
              {currentStep == constants.track_order_status.length - 1 &&
              <TextButton
              buttonStyle={{
                height:55,
                borderRadius: SIZES.base
              }}
              label="DONE"
              onPress={()=> navigation.navigate("FoodDetail")}
              />
              }
            </View>
          )
        }
    return (
        <View
            style={{
                flex: 1,
                paddingHorizontal: SIZES.padding,
                backgroundColor: COLORS.white
            }}
        >
            {/* Header */}
            {renderHeader()}
            {/* Info */}
            {renderInfo()}
            {/* Track Order */}
            <ScrollView 
            showsVerticalScrollIndicator={false}
            >
              {renderTrackOrder()}
            </ScrollView>
            {/* Footer */}
            {renderFooter()}
        </View>
    )
}

export default DeliveryStatus;