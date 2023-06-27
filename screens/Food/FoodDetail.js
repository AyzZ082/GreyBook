import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {FONTS, COLORS, SIZES, icons, images, dummyData} from '../../constants';

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
} from '../../components';
import HorizontalCard from '../../components';

const FoodDetail = ({navigation}) => {
  // const [selectedCategoryId, setSelectedCategoryId] = React.useState(1);
  // const [selectedMenuType, setSelectedMenuType] = React.useState(1);
  // const [recommends, setRecommends] = React.useState([]);
  // const [popular, setPopular] = React.useState([]);
  // const [menuList, setMenuList] = React.useState([]);

  // const [showFilterModal, setShowFilterModal] = React.useState(false);

  // React.useEffect(() => {
  //   handleChangeCategory(selectedCategoryId, selectedMenuType);
  // }, []);

  // //Handler
  // function handleChangeCategory(categoryId, menuTypeId) {
  //   //Retrive the recommended Menu
  //   let selectedRecommend = dummyData.menu.find(a => a.name == 'Recommended');
  //   //Retrive the Popular Menu
  //   let selectedPopular = dummyData.menu.find(a => a.name == 'Popular');
  //   //Find the menu based on MenuTypeId
  //   let selectedMenu = dummyData.menu.find(a => a.id == menuTypeId);
  //   //Set the Recommended Menu Based on the CategoryID
  //   setPopular(
  //     selectedPopular?.list.filter(a => a.categories.includes(categoryId)),
  //   );
  //   //Set the Recommended Menu Based on the CategoryID
  //   setRecommends(
  //     selectedRecommend?.list.filter(a => a.categories.includes(categoryId)),
  //   );

  //   //Set the Menu Based on Category Id
  //   setMenuList(
  //     selectedMenu?.list.filter(a => a.categories.includes(categoryId)),
  //   );
  // }

  const [foodItem, setFoodItem] = React.useState(dummyData.wrapSandwich);
  const [qty, setQty] = React.useState(1);
  // const Section = ({title, onPress, children}) => {
  //   return (
  //     <View>
  //       {/* Header */}
  //       <View
  //         style={{
  //           flexDirection: 'row',
  //           marginHorizontal: SIZES.padding,
  //           marginTop: 30,
  //           marginBottom: 20,
  //         }}>
  //         <Text style={{flex: 1, ...FONTS.h3}}>{title}</Text>
  //         <TouchableOpacity>
  //           <Text style={{color: COLORS.primary, ...FONTS.body3}}>
  //             Show All
  //           </Text>
  //         </TouchableOpacity>
  //       </View>
  //       {/* Content */}
  //       {children}
  //     </View>
  //   );
  // };

  function renderHeader() {
    return (
      <ScndHeader
        title="DETAILS"
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
        rightComponent={<CartQuantityButton quantity={5} />}
      />
    );
  }
  function renderSeller() {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginVertical: SIZES.padding,
          paddingHorizontal: SIZES.padding,
          alignItems: 'center',
        }}>
        <Image
          source={images.profile2}
          style={{
            width: 50,
            height: 50,
            borderRadius: SIZES.radius,
          }}
        />
        {/* Info */}
        <View
          style={{
            flex: 1,
            marginLeft: SIZES.radius,
            justifyContent: 'center',
          }}>
          <Text style={{color: COLORS.black, ...FONTS.h3, fontWeight: 'bold'}}>
            {dummyData.myProfile?.name}
          </Text>
          <Text style={{color: COLORS.darkGray, ...FONTS.body4}}>
            #: 03152736437
          </Text>
        </View>
        {/* Ratings */}
        <Ratings
          rating={4}
          iconStyle={{
            marginLeft: 3,
          }}
        />

        <IconButton
          icon={icons.menu}
          containerStyle={{
            width: 40,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
            borderColor: COLORS.primary,
            borderWidth: 1,
            borderRadius: SIZES.radius,
            marginLeft: SIZES.radius,
          }}
          iconStyle={{
            width: 20,
            height: 20,
            tintColor: COLORS.primary,
          }}
          onPress={() => console.log('Chat')}
          //onPress={() => navigation.navigate('Chat')}
        />
      </View>
    );
  }
  // function renderRecommendedSection() {
  //   return (
  //     <Section
  //       title="Recommended"
  //       onPress={() => console.log('Show Recommended')}>
  //       <FlatList
  //         data={recommends}
  //         keyExtractor={item => `${item.id}`}
  //         horizontal
  //         showsHorizontalScrollIndicator={false}
  //         renderItem={({item, index}) => (
  //           <HorizontalCard
  //             containerStyle={{
  //               height: 180,
  //               width: SIZES.width * 0.85,
  //               marginLeft: index == 0 ? SIZES.padding : 18,
  //               marginRight: index == recommends.length - 1 ? SIZES.padding : 0,
  //               paddingRight: SIZES.radius,
  //               alignItems: 'center',
  //             }}
  //             imageStyle={{marginTop: 35, height: 150, width: 150}}
  //             item={item}
  //             onPress={() => console.log('HorizontalFoodCard')}
  //           />
  //         )}
  //       />
  //     </Section>
  //   );
  // }
  function renderFooter() {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 120,
          alignItems: 'center',
          paddingHorizontal: SIZES.padding,
          paddingBottom: SIZES.padding,
        }}>
        {/* StepperInput */}
        <StepperInput
          value={qty}
          onAdd={() => setQty(qty + 1)}
          onMinus={() => {
            if (qty > 1) {
              setQty(qty - 1);
            }
          }}
        />
        {/* Add to Cart Btn */}
        <TextButton
          buttonStyle={{
            flex: 1,
            flexDirection: 'row',
            height: 60,
            marginLeft: SIZES.radius,
            paddingHorizontal: SIZES.radius,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.primary,
          }}
          label="Buy Now"
          label2="$15.99"
          onPress={() => navigation.navigate('MyCart')}
        />
      </View>
    );
  }
  function renderDetails() {
    return (
      <View
        style={{
          marginTop: SIZES.radius,
          marginBottom: SIZES.padding,
          paddingHorizontal: SIZES.padding,
        }}>
        {/* Food Card */}
        <View
          style={{
            height: 190,
            borderRadius: 15,
            backgroundColor: COLORS.lightGray2,
          }}>
          {/* categories & Fav */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: SIZES.base,
              paddingHorizontal: SIZES.radius,
            }}>
            {/* Category */}
            <View
              style={{
                flexDirection: 'row',
              }}>
              <Image source={icons.calories} style={{width: 30, height: 30}} />
              <Text
                style={{
                  color: COLORS.darkGray2,
                  ...FONTS.body4,
                }}>
                {foodItem?.calories} Reviews
              </Text>
            </View>
            {/* Fav */}
            <Image
              source={icons.love}
              style={{
                width: 20,
                height: 20,
                tintColor: foodItem?.isFavourite ? COLORS.primary : COLORS.gray,
              }}
            />
          </View>
          {/* Food Image */}
          <Image
            source={foodItem?.image}
            resizeMode="contain"
            style={{
              height: 170,
              width: '100%',
            }}
          />
        </View>
        {/* Book Details */}
        <View
          style={{
            marginTop: SIZES.padding,
          }}>
          {/* name & Details */}
          <Text style={{...FONTS.h1}}>{foodItem?.name}</Text>
          <Text
            style={{
              marginTop: SIZES.base,
              color: COLORS.darkGray,
              textAlign: 'justify',
              ...FONTS.body3,
            }}>
            {foodItem?.description}
          </Text>
          {/* Ratings, Condition & Shipping */}
          <View style={{flexDirection: 'row', marginTop: SIZES.padding}}>
            {/* Ratings */}
            <IconLabel
              containerStyle={{
                backgroundColor: COLORS.primary,
              }}
              icon={icons.star}
              label={'4.5'}
              labelStyle={{
                color: COLORS.white,
              }}
            />
            {/* Condition */}
            <IconLabel
              containerStyle={{
                marginLeft: SIZES.padding,
                paddingHorizontal: 0,
              }}
              icon={icons.star}
              iconStyle={{
                tintColor: COLORS.black,
              }}
              label={'9/10'}
              labelStyle={{
                color: COLORS.black,
              }}
            />
            {/* Shipping */}
            <IconLabel
              containerStyle={{
                marginLeft: SIZES.padding,
                paddingHorizontal: 0,
              }}
              icon={icons.star}
              iconStyle={{
                tintColor: COLORS.black,
              }}
              label={'Shipping'}
              labelStyle={{
                color: COLORS.black,
              }}
            />
          </View>
        </View>
      </View>
    );
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      {/* Header */}
      {renderHeader()}
      {/* Body */}
      <ScrollView>
        {/* Book DETAILS */}
        {renderDetails()}
        {/* Seller */}
        {renderSeller()}
        <LineDivider />
        {/* Other RecommendedSection */}
        {/* {renderRecommendedSection()} */}
      </ScrollView>
      {/* Footer  */}
      <LineDivider />

      {renderFooter()}
    </View>
  );
};

export default FoodDetail;
