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
  import {FONTS, COLORS, SIZES, icons, images, dummyData} from '../../constants';

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
    PaymentMethod,
    FormInput,
  } from '../../components';
import { utils } from '../../utils';
import Animated from 'react-native-reanimated';

const MyCard = ({ navigation }) => {

  //  const [selectedCard, setSelectedCard] = React.useState(null)
    const [selectedCard, setSelectedCard] = React.useState(false)
    const [accountNumber, setAccountNumber] = React.useState("")
    const [accountNumberError, setAccountNumberError] = React.useState("")
    function renderHeader() {
        return (
          <ScndHeader
            title="PAY METHOD"
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
                onPress={() => navigation.navigate('MainLayout')}
              />
            }
            rightComponent={
            <View style={{width:40}}></View>
            }
          />
        );
      }
      function renderPaymentMethods(){
        return(
            <View>
                {dummyData.myCards.map((item, index)=>{
                    return(
                        <PaymentMethod
                        key={`MyCard─${item.id}`}
                        item={item}
                        //isSelected={`${selectedCard.key}─${selectedCard.id}` == `MyCard-${item.id}`}
                        isSelected={selectedCard==true}
                        onPress={()=>setSelectedCard(true)}
                        />
                    )
                })}
            </View>
        )
      }
      function renderNumber(){
        return(
            <View style={{
                marginTop: SIZES.padding*2
            }}>
                <FormInput 
                label="Account Number"
                keyboardType='number-pad'
                maxLength={11}
                value={accountNumber}
                onChange={value=> {
                    setAccountNumber(value);
                    utils.validateInput (value, 11, setAccountNumberError);
                        
                    
                }}
                errorMsg={accountNumberError}
                appendComponent={
                    <View
                      style={{
                        justifyContent: 'center',
                      }}>
                      <Image
                        source={
                          accountNumber == '' || (accountNumber != '' && accountNumberError == '')
                            ? icons.correct
                            : icons.cancel
                        }
                        style={{
                          height: 20,
                          width: 20,
                          tintColor:
                          accountNumber == ''
                              ? COLORS.gray
                              : accountNumber != '' && accountNumberError == ''
                              ? COLORS.green
                              : COLORS.red,
                        }}
                      />
                    </View>
                  }
                />
                
            </View>
        )
      }
      function renderAddress(){
        return(
            <View style={{
                marginTop: SIZES.padding
            }}>
                <Text style={{...FONTS.h3}}>Delivery Address</Text>
                <View 
                style={{
                    flexDirection:"row",
                    alignItems: "center",
                    marginTop: SIZES.radius,
                    paddingVertical: SIZES.radius,
                    paddingHorizontal: SIZES.padding,
                    borderWidth: 2,
                    borderRadius: SIZES.radius,
                    borderColor: COLORS.lightGray2
                }}>
                    <Image
                    source={icons.location1}
                    style={{
                        width:40,
                        height:40
                    }}
                    />
                    <Text style={{
                        marginLeft: SIZES.radius,
                        width: "85%",
                        ...FONTS.body3
                    }}>Sabri Chowk Ratta Road Near Al Markaz Bait ul Quran, GRW</Text>
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
            {/* Cards */}
            <ScrollView 
            contentContainerStyle={{
                flexGrow: 1,
                marginTop: SIZES.radius,
                paddingHorizontal: SIZES.padding,
                paddingBottom: SIZES.radius
            }}
            >
                {/* PaymentMethod */}
                {renderPaymentMethods()}
                {/* Acc Number */}
                {renderNumber()}
                {/* Address */}
                {renderAddress()}
                
            </ScrollView>
            {/* Footer */}
            {/* <FooterTotal
            subTotal={37.97}
            shippingFee={0.00}
            total={50.00}
            onPress={()=> navigation.replace("Success")}
            /> */}
            
            <TextButton
            
            buttonStyle={{
                height:55,
                alignItems: 'center',
                marginBottom: SIZES.radius,
                marginHorizontal: SIZES.padding,
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.primary
            }}
            label="Confirm Order"
           onPress={() => navigation.replace('Success')}
            />
           
            

        </View>
    )
}

export default MyCard;