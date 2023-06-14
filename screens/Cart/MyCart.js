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
  } from '../../components';

  import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
  } from 'react-native-reanimated';

const MyCart = ({ navigation }) => {

    const scrollViewRef = React.useRef()

    const [myCartList, setMyCartList] = React.useState(dummyData.myCart)

    //QTY HAndler
      function updateQuantityHandler(newQty, id){
        const newMyCartList = myCartList.map(cl=>(
          cl.id === id ? {...cl,qty: newQty} :cl
        ))
        setMyCartList(newMyCartList)
      }
      //Render
      function removeMyCartHandler(id){
        let newMyCartList = [...myCartList]

        const index = newMyCartList.findIndex(cart => cart.id == id)

        newMyCartList.splice(index, 1)

        setMyCartList(newMyCartList)
      }
    function renderHeader() {
        return (
          <ScndHeader
            title="MY CART"
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
    
      function renderCartList(){
        return(
            <SwipeListView
            data={myCartList}
            keyExtractor={item=> `${item.id}`}
            
            contentContainerStyle={{
                marginTop: SIZES.radius,
                paddingHorizontal: SIZES.padding,
                paddingBottom: SIZES.padding * 2
            }}
            disableRightSwipe={true}
            rightOpenValue={-75}
            renderItem={(data,rowMap) =>(
                <View
                style={{
                    height: 100,
                    backgroundColor: COLORS.lightGray2,
                    ...style.cartItemContainer
                  
                }}>
                    {/* FOOD IMAGE */}
                    <View
                    style={{
                      width:90,
                      height:100,
                      marginLeft: -10
                    }}
                    >
                      <Image source={data.item.image}
                      resizeMode='contain'
                      style={{
                        width: '100%',
                        height: '100%',
                        position: 'absolute',
                        top: 10,
                      }}
                      />
                    </View>
                    {/* ITEM INFO */}
                    <View style={{flex:1}}>
                      <Text style={{...FONTS.body3}}>{data.item.name}</Text>
                      <Text style={{color: COLORS.primary,...FONTS.h3}}>Rs. {data.item.price}</Text>
                    </View>

                    {/* quantity */}
                    <StepperInput 
                    containerStyle={{
                      height: 50,
                      width: 125,
                      backgroundColor: COLORS.white
                    }}
                    value={data.item.qty}
                    onAdd={()=> updateQuantityHandler(data.item.qty +1 , data.item.id)}
                    onMinus={()=> {
                      if(data.item.qty>1){
                        updateQuantityHandler(data.item.qty-1, data.item.id)
                      }
                    }}
                    />
                </View>
        )}
        renderHiddenItem={(data, rowMap)=>(
          <IconButton
          containerStyle={{
            flex:1,
            justifyContent: 'flex-end',
            backgroundColor: COLORS.primary,
            ...style.cartItemContainer
          }}
          icon={icons.delete_icon}
          iconStyle={{
            marginRight: 10
          }}
          onPress={()=> removeMyCartHandler(data.item.id)}
          />
        )}
            /> 
        )
      }
    
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.white
            }}

        >
          {/* <Animated.ScrollView
           ref={scrollViewRef}
           contentContainerStyle={{
            marginTop: 100,
            paddingBottom:300
           }}
           showsVerticalScrollIndicator={false}
           scrollEventThrottle={16}
           keyboardDismissMode='on-drag'
           //onScroll
           //onScrollEndDrag
          >

          </Animated.ScrollView> */}
            {/* Header */}
            {renderHeader()}

            {/* Cart List */}
            {renderCartList()}

            {/* Footer */}
            <FooterTotal subTotal={37.97} shippingFee={0.00} total={37.97}
            onPress={()=> navigation.navigate("MyCard")}
            />
            
        </View>
    )
    
}

const style = StyleSheet.create({
  cartItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: SIZES.radius,
    paddingHorizontal: SIZES.radius,
    borderRadius: SIZES.radius
  }
})
export default MyCart;