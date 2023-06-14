import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';

import {MainLayout} from '../screens';
import {COLORS, FONTS, SIZES, dummyData, constants, icons} from '../constants';
import Animated from 'react-native-reanimated';
import {connect} from 'react-redux';
import {setSelectedTab} from '../stores/tabs/tabActions';



const Drawer = createDrawerNavigator();
const GBDrawerItem = ({label, icon, onPress, isFocused}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        height: 40,
        marginBottom: SIZES.base,
        alignItems: 'center',
        paddingLeft: SIZES.radius,
        borderRadius: SIZES.base,
        backgroundColor: isFocused ? COLORS.transparentBlack1 : null,
      }}
      onPress={onPress}>
      <Image
        source={icon}
        style={{width: 20, height: 20, tintColor: COLORS.white}}
      />
      <Text style={{marginLeft: 15, color: COLORS.white2, ...FONTS.h3}}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};
const GBDrawerComponent = ({navigation, selectedTab, setSelectedTab}) => {
  return (
    <DrawerContentScrollView
      scrollEnabled={true}
      contentContainerStyle={{flex: 1}}>
      <View style={{flex: 1, paddingHorizontal: SIZES.radius}}>
        {/* CloseButton */}
        <View style={{alignItems: 'flex-start', justifyContent: 'center'}}>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => navigation.closeDrawer()}>
            <Image
              source={icons.cross}
              style={{height: 35, width: 35, tintColor: COLORS.white}}></Image>
          </TouchableOpacity>
        </View>
        {/* Logo */}
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            marginTop: SIZES.radius,
            alignItems: 'center',
          }}
          onPress={() => console.log('Profile')}>
          <Image
            source={dummyData.myProfile?.profile_image}
            style={{width: 50, height: 50, borderRadius: SIZES.radius}}></Image>
          <View style={{marginLeft: SIZES.radius}}>
            <Text
              style={{color: COLORS.white, ...FONTS.h3, fontWeight: 'bold'}}>
              {dummyData.myProfile?.name}
            </Text>
            <Text style={{color: COLORS.white, ...FONTS.body4}}>
              Sell & Buy Books
            </Text>
          </View>
        </TouchableOpacity>
        {/* Items */}
        <View style={{flex: 1, marginTop: SIZES.padding}}>
          <GBDrawerItem
            label={constants.screens.home}
            icon={icons.home}
            isFocused={selectedTab == constants.screens.home}
            onPress={() => {
              setSelectedTab(constants.screens.home);
              navigation.navigate('MainLayout');
            }}
          />
          <GBDrawerItem
            label={constants.screens.my_wallet}
            icon={icons.wallet}
            isFocused={selectedTab == constants.screens.my_wallet}
            onPress={() => {
              setSelectedTab(constants.screens.my_wallet);
              navigation.navigate('MainLayout');
            }}
          />
          <GBDrawerItem
            label={constants.screens.notification}
            icon={icons.notification}
            isFocused={selectedTab == constants.screens.notification}
            onPress={() => {
              setSelectedTab(constants.screens.notification);
              navigation.navigate('MainLayout');
            }}
          />
          <GBDrawerItem
            label={constants.screens.favourite}
            icon={icons.favourite}
            isFocused={selectedTab == constants.screens.favourite}
            onPress={() => {
              setSelectedTab(constants.screens.favourite);
              navigation.navigate('MainLayout');
            }}
          />
          {/* Divider */}
          <View
            style={{
              height: 1,
              marginVertical: SIZES.radius,
              marginLeft: SIZES.radius,
              backgroundColor: COLORS.white2,
            }}
          />
          <GBDrawerItem
            label={'Track Your Order'}
            icon={icons.location}
             isFocused={selectedTab == constants.screens.ordertrack}
             onPress={() => {
              setSelectedTab(constants.screens.ordertrack);
              navigation.navigate('OrderTrack');
             }}
          />
          <GBDrawerItem
            label={'Settings'}
            icon={icons.setting}
            // isFocused={selectedTab == constants.screens.setting}
            // onPress={() => {
            //   setSelectedTab(constants.screens.setting);
            //   navigation.navigate('MainLayout');
            // }}
          />
          <GBDrawerItem
            label={'Cart'}
            icon={icons.cart}
            isFocused={selectedTab == constants.screens.cart}
            onPress={() => {
              setSelectedTab(constants.screens.cart);
              navigation.navigate('MyCart');
            }}
          />
          <GBDrawerItem
            label={'Invite a Friend'}
            icon={icons.profile}
            // isFocused={selectedTab == constants.screens.profile}
            // onPress={() => {
            //   setSelectedTab(constants.screens.profile);
            //   navigation.navigate('MainLayout');
            // }}
          />
          <GBDrawerItem
            label={'Help Center'}
            icon={icons.help}
            // isFocused={selectedTab == constants.screens.help}
            // onPress={() => {
            //   setSelectedTab(constants.screens.help);
            //   navigation.navigate('MainLayout');
            // }}
          />
        </View>
        <View style={{marginBottom: SIZES.radius}}>
          <GBDrawerItem label={'Log Out'} icon={icons.logout} />
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

const GBDrawer = ({selectedTab, setSelectedTab}) => {
  const [progress, setProgress] = useState(new Animated.Value(0));
  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });
  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 26],
  });
  const animatedStyle = {borderRadius, transform: [{scale}]};
  return (
    <View style={{flex: 1, backgroundColor: COLORS.primary}}>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
          drawerStyle: {
            flex: 1,
            paddingRight: 20,
            width: '65%',
            backgroundColor: 'transparent',
          },
          drawerType: 'slide',
          overlayColor: 'transparent',
          scenceContainerStyle: {backgroundColor: 'transparent'},
          initialRoutName: 'MainLayout',
        }}
        drawerContent={props => {
          setTimeout(() => {
            setProgress(props.progress);
          }, 0);

          return (
            <GBDrawerComponent
              navigation={props.navigation}
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
            />
          );
        }}>
        <Drawer.Screen name="MainLayout">
          {props => (
            <MainLayout {...props} drawerAnimationStyle={animatedStyle} />
          )}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({});

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

export default connect(mapStateToProps, mapDispatchToProps)(GBDrawer);
