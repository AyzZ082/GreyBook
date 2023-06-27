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

import {TextIconButton, MyBook} from '../../components';

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
            Delete All
          </Text>
        </TouchableOpacity>
      </View>
      {/* Content */}
      {children}
    </View>
  );
};

const MyBooks = ({navigation}) => {
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

  function renderMyBookSection() {
    return (
      <Section title="My Books" onPress={() => console.log('My Books')}>
        <FlatList
          data={mybooks}
          keyExtractor={item => `${item.id}`}
          vertical
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => (
            <MyBook
              containerStyle={{
                height: 180,
                width: SIZES.width * 0.85,
                marginLeft: index == 0 ? SIZES.padding : 18,
                marginRight: index == mybooks.length - 1 ? SIZES.padding : 0,
                paddingRight: SIZES.radius,
                alignItems: 'center',
              }}
              imageStyle={{
                marginVertical: 35,
                marginHorizontal: 15,
                height: 130,
                width: 130,
                borderRadius: 400,
              }}
              item={item}
              onPress={() => console.log('HorizontalFoodCard')}
            />
          )}
          ListFooterComponent={<View style={{height: 300}} />}
        />
      </Section>
    );
  }
  function renderButton() {
    return (
      <View
        style={{
          marginTop: SIZES.radius,
          marginBottom: -10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            height: 55,
          }}>
          <TextIconButton
            containerStyle={{
              flex: 1,
              marginHorizontal: SIZES.padding,
              borderRadius: SIZES.base,
              backgroundColor: COLORS.primary,
            }}
            label="Sell or donate book"
            labelStyle={{
              color: COLORS.white,
              ...FONTS.h3,
            }}
            icon={icons.plus}
            iconPosition="LEFT"
            iconStyle={{
              width: 25,
              height: 25,
              marginRight: SIZES.base,
              tintColor: COLORS.white,
            }}
            onPress={() => navigation.navigate('UploadBook')}
          />
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
      {renderButton()}
      {renderMyBookSection()}
    </View>
  );
};
export default MyBooks;
