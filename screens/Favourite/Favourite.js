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

import {
  TextIconButton,
  MyBook,
  ScndHeader,
  IconButton,
  TextButton,
} from '../../components';

const Section = ({title, onPress, children}) => {
  return (
    <View>
      {/* Header */}
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: SIZES.padding,
          marginTop: 30,
          marginBottom: 20,
        }}>
        <Text style={{flex: 1, ...FONTS.h3}}>{title}</Text>
        <TouchableOpacity onPress={onPress}>
          <Text style={{color: COLORS.primary, ...FONTS.body3}}>
            Remove All
          </Text>
        </TouchableOpacity>
      </View>
      {/* Content */}
      {children}
    </View>
  );
};

const Favourite = ({navigation}) => {
  const [selectedCategoryId, setSelectedCategoryId] = React.useState(1);
  const [mybooks, setMybooks] = React.useState([]);

  React.useEffect(() => {
    handleChangeCategory(selectedCategoryId);
  }, []);

  //Handler
  function handleChangeCategory(categoryId) {
    //Retrive the recommended Menu
    let selectedMybooks = dummyData.menu.find(a => a.name == 'My Books');
    //Set the Recommended Menu Based on the CategoryID
    setMybooks(
      selectedMybooks?.list.filter(a => a.categories.includes(categoryId)),
    );
  }

  function renderHeader() {
    return (
      <ScndHeader
        title="FAVOURITES"
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
            //  onPress={() => console.log('Back')}
            onPress={() => navigation.navigate('MainLayout')}
          />
        }
        rightComponent={
          <TouchableOpacity
            style={{
              borderRadius: SIZES.radius,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => navigation.navigate('UserProfile')}
            //onPress={()=> console.log("Pro")}
          >
            <Image
              source={dummyData?.myProfile.user_profile}
              style={{
                width: 40,
                height: 40,
                borderRadius: SIZES.radius,
              }}></Image>
          </TouchableOpacity>
        }
      />
    );
  }

  function renderMyBookSection() {
    return (
      <Section title="Favourites" onPress={() => console.log('My Books')}>
        <FlatList
          data={mybooks}
          keyExtractor={item => `${item.id}`}
          vertical
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => (
            <TouchableOpacity
              style={{
                height: 180,
                width: SIZES.width * 0.85,
                marginLeft: index == 0 ? SIZES.padding : 18,
                marginRight: index == mybooks.length - 1 ? SIZES.padding : 0,
                paddingRight: SIZES.radius,
                alignItems: 'center',
                flexDirection: 'row',
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.lightGray2,
                marginTop: SIZES.radius,
              }}>
              <Image
                source={item.image}
                style={{
                  marginVertical: 35,
                  marginHorizontal: 15,
                  height: 130,
                  width: 130,
                  borderRadius: 400,
                }}
              />
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
                <TextButton
                  buttonStyle={{
                    marginTop: SIZES.base,
                    height: 42,
                    borderRadius: SIZES.base,
                    borderWidth: 2,
                    borderColor: COLORS.primary,
                    backgroundColor: COLORS.lightGray2,
                  }}
                  label="Remove"
                  labelStyle={{
                    color: COLORS.primary,
                  }}
                  onPress={() => console.log('Success')}
                />
                {/* <TextIconButton
                  containerStyle={{
                    marginTop: SIZES.base,
                    height: 42,
                    borderRadius: SIZES.base,
                    backgroundColor: COLORS.primary,
                  }}
                  label="Remove From Favourites"
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
                /> */}
              </View>
              {/* item={item}
              onPress={() => console.log('HorizontalFoodCard')} */}
            </TouchableOpacity>
          )}
          ListFooterComponent={<View style={{height: 180}} />}
        />
      </Section>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      {renderHeader()}
      {renderMyBookSection()}
    </View>
  );
};
export default Favourite;
