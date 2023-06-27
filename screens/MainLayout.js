import React from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

import {connect} from 'react-redux';
import {setSelectedTab} from '../stores/tabs/tabActions';

import LinearGradient from 'react-native-linear-gradient';

import {
  Home,
  Search,
  UploadBook,
  UserProfile,
  Notification,
  MyBooks,
  MessagesScreen,
} from '../screens';
import {COLORS, FONTS, SIZES, dummyData, constants, icons} from '../constants';
import {GBHeader} from '../components';
import {TouchableWithoutFeedback} from 'react-native';

const TabButton = ({
  label,
  icon,
  isFocused,
  outerContainerStyle,
  innerContainerStyle,
  onPress,
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Animated.View
        style={[
          {flex: 1, alignItems: 'center', justifyContent: 'center'},
          outerContainerStyle,
        ]}>
        <Animated.View
          style={[
            {
              flexDirection: 'row',
              width: '80%',
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 25,
            },
            innerContainerStyle,
          ]}>
          <Image
            source={icon}
            style={{
              width: 20,
              height: 20,
              tintColor: isFocused ? COLORS.white : COLORS.gray,
            }}
          />
          {isFocused && (
            <Text
              numberOfLines={1}
              style={{
                marginLeft: SIZES.base,
                color: COLORS.white,
                ...FONTS.h3,
              }}>
              {' '}
              {label}{' '}
            </Text>
          )}
        </Animated.View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const MainLayout = ({
  drawerAnimationStyle,
  navigation,
  selectedTab,
  setSelectedTab,
}) => {
  const flatlistRef = React.useRef();
  //ReanimatedSharedValue
  const homeTabFlex = useSharedValue(1);
  const homeTabColor = useSharedValue(COLORS.white);
  const searchTabFlex = useSharedValue(1);
  const searchTabColor = useSharedValue(COLORS.white);
  const mybooksTabFlex = useSharedValue(1);
  const mybooksTabColor = useSharedValue(COLORS.white);
  const notificationTabFlex = useSharedValue(1);
  const notificationTabColor = useSharedValue(COLORS.white);
  const profileTabFlex = useSharedValue(1);
  const profileTabColor = useSharedValue(COLORS.white);
  //Reanimated Animation
  const homeFlexStyle = useAnimatedStyle(() => {
    return {flex: homeTabFlex.value};
  });
  const homeColorStyle = useAnimatedStyle(() => {
    return {backgroundColor: homeTabColor.value};
  });

  const searchFlexStyle = useAnimatedStyle(() => {
    return {flex: searchTabFlex.value};
  });
  const searchColorStyle = useAnimatedStyle(() => {
    return {backgroundColor: searchTabColor.value};
  });
  const mybooksFlexStyle = useAnimatedStyle(() => {
    return {flex: mybooksTabFlex.value};
  });
  const mybooksColorStyle = useAnimatedStyle(() => {
    return {backgroundColor: mybooksTabColor.value};
  });
  const notificationFlexStyle = useAnimatedStyle(() => {
    return {flex: notificationTabFlex.value};
  });
  const notificationColorStyle = useAnimatedStyle(() => {
    return {backgroundColor: notificationTabColor.value};
  });
  const profileFlexStyle = useAnimatedStyle(() => {
    return {flex: profileTabFlex.value};
  });
  const profileColorStyle = useAnimatedStyle(() => {
    return {backgroundColor: profileTabColor.value};
  });

  React.useEffect(() => {
    setSelectedTab(constants.screens.home);
  }, []);

  React.useEffect(() => {
    if (selectedTab == constants.screens.home) {
      flatlistRef?.current?.scrollToIndex({
        index: 0,
        animated: false,
      });
      homeTabFlex.value = withTiming(4, {duration: 500});
      homeTabColor.value = withTiming(COLORS.primary, {duration: 500});
    } else {
      homeTabFlex.value = withTiming(1, {duration: 500});
      homeTabColor.value = withTiming(COLORS.white, {duration: 500});
    }

    if (selectedTab == constants.screens.search) {
      flatlistRef?.current?.scrollToIndex({
        index: 1,
        animated: false,
      });
      searchTabFlex.value = withTiming(4, {duration: 500});
      searchTabColor.value = withTiming(COLORS.primary, {duration: 500});
    } else {
      searchTabFlex.value = withTiming(1, {duration: 500});
      searchTabColor.value = withTiming(COLORS.white, {duration: 500});
    }

    if (selectedTab == constants.screens.mybooks) {
      flatlistRef?.current?.scrollToIndex({
        index: 2,
        animated: false,
      });
      mybooksTabFlex.value = withTiming(4, {duration: 500});
      mybooksTabColor.value = withTiming(COLORS.primary, {duration: 500});
    } else {
      mybooksTabFlex.value = withTiming(1, {duration: 500});
      mybooksTabColor.value = withTiming(COLORS.white, {duration: 500});
    }

    if (selectedTab == constants.screens.notification) {
      flatlistRef?.current?.scrollToIndex({
        index: 3,
        animated: false,
      });
      notificationTabFlex.value = withTiming(4, {duration: 500});
      notificationTabColor.value = withTiming(COLORS.primary, {duration: 500});
    } else {
      notificationTabFlex.value = withTiming(1, {duration: 500});
      notificationTabColor.value = withTiming(COLORS.white, {duration: 500});
    }

    if (selectedTab == constants.screens.profile) {
      flatlistRef?.current?.scrollToIndex({
        index: 4,
        animated: false,
      });
      profileTabFlex.value = withTiming(4, {duration: 500});
      profileTabColor.value = withTiming(COLORS.primary, {duration: 500});
    } else {
      profileTabFlex.value = withTiming(1, {duration: 500});
      profileTabColor.value = withTiming(COLORS.white, {duration: 500});
    }
  }, [selectedTab]);

  return (
    <Animated.View
      style={{
        flex: 1,

        backgroundColor: COLORS.white,
        ...drawerAnimationStyle,
      }}>
      {/* Header */}
      <GBHeader
        containerStyle={{
          height: 50,
          paddingHorizontal: SIZES.padding,
          marginTop: 10,
          alignItems: 'center',
        }}
        title={selectedTab.toUpperCase()}
        leftComponent={
          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              alignItems: 'center',
              justifyContent: 'center',
              borderColor: COLORS.gray2,
              borderWidth: 1,
              borderRadius: SIZES.radius,
            }}
            onPress={() => navigation.openDrawer()}>
            <Image source={icons.menu} />
          </TouchableOpacity>
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

      {/* Content */}
      <View style={{flex: 1}}></View>
      <FlatList
        ref={flatlistRef}
        horizontal
        scrollEnabled={false}
        pagingEnabled
        snapToAlignment="center"
        snapToInterval={SIZES.width}
        showsHorizontalScrollIndicator={false}
        data={constants.bottom_tabs}
        keyExtractor={item => `${item.id}`}
        renderItem={({item, index}) => {
          return (
            <View style={{height: SIZES.height, width: SIZES.width}}>
              {item.label == constants.screens.home && <Home />}
              {item.label == constants.screens.search && <Search />}
              {item.label == constants.screens.mybooks && <MyBooks />}
              {item.label == constants.screens.notification && (
                <MessagesScreen />
              )}
              {item.label == constants.screens.profile && <UserProfile />}
            </View>
          );
        }}
      />
      {/* Footer */}
      <View style={{height: 80, justifyContent: 'flex-end'}}>
        {/* Shadow */}
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 0, y: 4}}
          colors={[COLORS.transparent, COLORS.black]}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            height: 100,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          }}></LinearGradient>
        {/* Tabs */}
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            paddingHorizontal: SIZES.radius,
            paddingBottom: 10,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            backgroundColor: COLORS.white,
          }}>
          <TabButton
            label={constants.screens.home}
            icon={icons.home}
            isFocused={selectedTab == constants.screens.home}
            outerContainerStyle={homeFlexStyle}
            innerContainerStyle={homeColorStyle}
            onPress={() => setSelectedTab(constants.screens.home)}
          />

          <TabButton
            label={constants.screens.search}
            icon={icons.search}
            isFocused={selectedTab == constants.screens.search}
            outerContainerStyle={searchFlexStyle}
            innerContainerStyle={searchColorStyle}
            onPress={() => setSelectedTab(constants.screens.search)}
          />
          <TabButton
            label={constants.screens.mybooks}
            icon={icons.favourite}
            isFocused={selectedTab == constants.screens.mybooks}
            outerContainerStyle={mybooksFlexStyle}
            innerContainerStyle={mybooksColorStyle}
            onPress={() => setSelectedTab(constants.screens.mybooks)}
          />
          <TabButton
            label={constants.screens.notification}
            icon={icons.notification}
            isFocused={selectedTab == constants.screens.notification}
            outerContainerStyle={notificationFlexStyle}
            innerContainerStyle={notificationColorStyle}
            onPress={() => setSelectedTab(constants.screens.notification)}
          />
          <TabButton
            label={constants.screens.profile}
            icon={icons.profile}
            isFocused={selectedTab == constants.screens.profile}
            outerContainerStyle={profileFlexStyle}
            innerContainerStyle={profileColorStyle}
            onPress={() => setSelectedTab(constants.screens.profile)}
          />
        </View>
      </View>
    </Animated.View>
  );
};

function mapStateToProps(state) {
  return {
    selectedTab: state.tabReducer.selectedTab,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    setSelectedTab: selectedTab => {
      return dispatch(setSelectedTab(selectedTab));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
