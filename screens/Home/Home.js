import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {COLORS, dummyData, FONTS, icons, SIZES} from '../../constants';
import {HorizontalCard, VerticalCard} from '../../components';
import FilterModal from './FilterModal';

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
          <Text style={{color: COLORS.primary, ...FONTS.body3}}>Show All</Text>
        </TouchableOpacity>
      </View>
      {/* Content */}
      {children}
    </View>
  );
};

const Home = ({navigation}) => {
  const [selectedCategoryId, setSelectedCategoryId] = React.useState(1);
  const [selectedMenuType, setSelectedMenuType] = React.useState(1);
  const [recommends, setRecommends] = React.useState([]);
  const [popular, setPopular] = React.useState([]);
  const [menuList, setMenuList] = React.useState([]);

  const [showFilterModal, setShowFilterModal] = React.useState(false);

  React.useEffect(() => {
    handleChangeCategory(selectedCategoryId, selectedMenuType);
  }, []);

  //Handler
  function handleChangeCategory(categoryId, menuTypeId) {
    //Retrive the recommended Menu
    let selectedRecommend = dummyData.menu.find(a => a.name == 'Recommended');
    //Retrive the Popular Menu
    let selectedPopular = dummyData.menu.find(a => a.name == 'Popular');
    //Find the menu based on MenuTypeId
    let selectedMenu = dummyData.menu.find(a => a.id == menuTypeId);
    //Set the Recommended Menu Based on the CategoryID
    setPopular(
      selectedPopular?.list.filter(a => a.categories.includes(categoryId)),
    );
    //Set the Recommended Menu Based on the CategoryID
    setRecommends(
      selectedRecommend?.list.filter(a => a.categories.includes(categoryId)),
    );

    //Set the Menu Based on Category Id
    setMenuList(
      selectedMenu?.list.filter(a => a.categories.includes(categoryId)),
    );
  }

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
  function renderMenuType() {
    return (
      <FlatList
        horizontal
        data={dummyData.menu}
        keyExtractor={item => `${item.id}`}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 30,
          marginBottom: 20,
        }}
        renderItem={({item, index}) => (
          <TouchableOpacity
            style={{
              marginLeft: SIZES.padding,
              marginRight:
                index == dummyData.menu.length - 1 ? SIZES.padding : 0,
            }}
            onPress={() => {
              setSelectedMenuType(item.id);
              handleChangeCategory(selectedCategoryId, item.id);
            }}>
            <Text
              style={{
                color:
                  selectedMenuType == item.id ? COLORS.primary : COLORS.black,
                ...FONTS.h3,
              }}>
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    );
  }
  function renderRecommendedSection() {
    return (
      <Section
        title="Recommended"
        onPress={() => console.log('Show Recommended')}>
        <FlatList
          data={recommends}
          keyExtractor={item => `${item.id}`}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => (
            <HorizontalCard
              containerStyle={{
                height: 180,
                width: SIZES.width * 0.85,
                marginLeft: index == 0 ? SIZES.padding : 18,
                marginRight: index == recommends.length - 1 ? SIZES.padding : 0,
                paddingRight: SIZES.radius,
                alignItems: 'center',
              }}
              imageStyle={{marginVertical: 35,marginHorizontal:15, height: 150, width: 150,borderRadius: 400,}}
              item={item}
              onPress={() => console.log('HorizontalFoodCard')}
            />
          )}
        />
      </Section>
    );
  }
  function renderCategories( ) {
    return (
      <Section
        title="Categories"
        onPress={() => console.log('Show Recommended')}>
        <FlatList
          data={dummyData.categories}
          keyExtractor={item => `${item.id}`}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => (
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                height: 55,
                //marginTop: SIZES.padding,
                marginLeft: index == 0 ? SIZES.padding : SIZES.radius,
                marginRight:
                  index == dummyData.categories.length - 1 ? SIZES.padding : 0,
                paddingHorizontal: 8,
                borderRadius: SIZES.radius,
                backgroundColor:
                  selectedCategoryId == item.id
                    ? COLORS.primary
                    : COLORS.lightGray2,
              }}
              onPress={() => {
                setSelectedCategoryId(item.id);
                handleChangeCategory(item.id, selectedMenuType);
              }}>
              <Image
                source={item.icon}
                style={{marginTop: 5, height: 50, width: 50}}
              />
              <Text
                style={{
                  alignSelf: 'center',
                  marginRight: SIZES.base,
                  color:
                    selectedCategoryId == item.id
                      ? COLORS.white
                      : COLORS.darkGray,
                  ...FONTS.h3,
                }}>
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
        />
      </Section>
    );
  }
  function renderPopularSection() {
    return (
      <Section title="Popular" onPress={() => console.log('Show Popular')}>
        <FlatList
          data={popular}
          keyExtractor={item => `${item.id}`}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => (
            <VerticalCard
              containerStyle={{
                //   height: 180,
                //  width: SIZES.width * 0.85,
                marginLeft: index == 0 ? SIZES.padding : 18,
                marginRight: index == popular.length - 1 ? SIZES.padding : 0,
                //  paddingRight: SIZES.radius,
                //   alignItems: 'center',
              }}
              // imageStyle={{marginTop: 35, height: 150, width: 150}}r
              item={item}
              // onPress={() => console.log('VerticalCard')}
              onPress={() => navigation.navigate('FoodDetail')}
            />
          )}
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
      {/* List */}
      <FlatList
        data={menuList}
        keyExtractor={item => `${item.id}`}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            {/* Popular */}
            {renderCategories()}
            {/* Popular */}
            {renderPopularSection()}
            {/* Recommended */}
            {renderRecommendedSection()}
            {/* MenuType */}
            {renderMenuType()}
          </View>
        }
        renderItem={({item, index}) => {
          return (
            <HorizontalCard
              containerStyle={{
                height: 130,
                alignItems: 'center',
                marginHorizontal: SIZES.padding,
                marginBottom: SIZES.radius,
              }}
              imageStyle={{
                height: 110,
                width: 110,
                marginTop: 20,
                borderRadius: 400,
                marginHorizontal:10,
                marginVertical:20,
              }}
              item={item}
              onPress={() => console.log('Card Clicked')}
            />
          );
        }}
        ListFooterComponent={<View style={{height: 200}} />}
      />
    </View>
  );
};

export default Home;
