import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView
} from 'react-native';
import {COLORS, dummyData, FONTS, icons, SIZES} from '../../constants';
import FilterModal from '../Home/FilterModal';


const Section = ({title, onPress, children}) => {
  return (
    <View>
      {/* Header */}
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: SIZES.padding,
          marginTop: 30,
          marginBottom: SIZES.base,
        }}>
        <Text style={{flex: 1, ...FONTS.h3}}>{title}</Text>
      </View>
      {/* Content */}
      {children}
    </View>
  );
};


const Search = () => {

  const [showFilterModal, setShowFilterModal] = React.useState(false);
   const [menuList, setMenuList] = React.useState([]);
 
  //Render

  function renderSearch() {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 40,
          alignItems: 'center',
          marginHorizontal: SIZES.padding,
          marginVertical: SIZES.base,
          paddingHorizontal: SIZES.radius,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.lightGray2,
        }}>
        {/* Icon */}
        <Image
          source={icons.search}
          style={{height: 20, width: 20, tintColor: COLORS.black}}
        />
        {/* Text Input */}
        <TextInput
          style={{flex: 1, marginLeft: SIZES.radius, ...FONTS.body3,}}
          placeholder="Seacrh books..."
        />
        {/* FilterButton */}
        <TouchableOpacity onPress={() => setShowFilterModal(true)}>
          <Image
            source={icons.filter}
            style={{height: 20, width: 20, tintColor: COLORS.black}}
          />
        </TouchableOpacity>
      </View>
    );
  }
  function renderCategories() {
    return (
      <Section
        title="Categories"
        onPress={() => console.log('Show Categories')}>
          
        <FlatList
          data={dummyData.all_categories}
          keyExtractor={item => `${item.id}`}
          vertical
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => (
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                height: 55,
                marginTop: SIZES.base,
                marginLeft:  SIZES.padding,
                marginRight:SIZES.padding,
                paddingHorizontal: 8,
                borderRadius: SIZES.radius,
                backgroundColor:
                  COLORS.lightGray2,
              }}
              onPress={() => {console.log("A")}}>
              <Image
                source={item.icon}
                style={{marginTop: 5, height: 50, width: 50}}
              />
              <Text
                style={{
                  alignSelf: 'center',
                  marginRight: SIZES.base,
                  color:
                   COLORS.darkGray,
                  ...FONTS.h3,
                }}>
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
          ListFooterComponent={<View style={{height: 190}} />}
        />
      </Section>
    );
  }
  return (
    <View
      style={{
        flex: 1,
      }}>
      {/* Search */}
      {renderSearch()}

      {showFilterModal && (
        <FilterModal
          isVisible={showFilterModal}
          onClose={() => setShowFilterModal(false)}
        />
      )}
      <FlatList
        data={menuList}
        keyExtractor={item => `${item.id}`}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            {/* Popular */}
            {renderCategories()}
          </View>
        }
        
        // renderItem={({item, index}) => {
        //   return (
        //     <HorizontalCard
        //       containerStyle={{
        //         height: 130,
        //         alignItems: 'center',
        //         marginHorizontal: SIZES.padding,
        //         marginBottom: SIZES.radius,
        //       }}
        //       imageStyle={{
        //         height: 110,
        //         width: 110,
        //         marginTop: 20,
        //         borderRadius: 400,
        //         marginHorizontal:10,
        //         marginVertical:20,
        //       }}
        //       item={item}
        //       onPress={() => console.log('Card Clicked')}
        //     />
        //   );
        // }}
        // ListFooterComponent={<View style={{height: 200}} />}
      />
    </View>
  );
};

export default Search;
