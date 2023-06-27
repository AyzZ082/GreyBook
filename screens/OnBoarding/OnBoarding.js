import React from 'react';
import {
  View,
  Text,
  Image,
  Animated,
  ImageBackground,
  Button,
} from 'react-native';
import {COLORS, constants, FONTS, images, SIZES} from '../../constants';

import {TextButton} from '../../components';
import SignIn from '../Authentication/SignIn';

const OnBoarding = ({navigation}) => {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const flatlistRef = React.useRef();

  const [currentIndex, setCurrentIndex] = React.useState(0);

  const onViewChangeRef = React.useRef(({viewableItems, changed}) => {
    setCurrentIndex(viewableItems[0].index);
  });

  const Dots = () => {
    const dotPosition = Animated.divide(scrollX, SIZES.width);
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {constants.onboarding_screens.map((item, index) => {
          dotColor = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [
              COLORS.lightOrange,
              COLORS.primary,
              COLORS.lightOrange,
            ],
            extrapolate: 'clamp',
          });

          dotWidth = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [10, 30, 10],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View
              key={`dot-${index}`}
              style={{
                borderRadius: 5,
                marginHorizontal: 6,
                width: dotWidth,
                height: 10,
                backgroundColor: dotColor,
              }}
            />
          );
        })}
      </View>
    );
  };
  function renderHeaderLogo() {
    return (
      <View
        style={{
          position: 'absolute',
          top: SIZES.height > 800 ? 50 : 25,
          left: 0,
          right: 0,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={images.logo_02}
          resizeMode="contain"
          style={{width: SIZES.width * 0.5, height: 100}}
        />
      </View>
    );
  }

  function renderFooter() {
    return (
      <View style={{height: 90}}>
        {/* Dots */}
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Dots />
        </View>
        {/* Buttons */}
        {currentIndex < constants.onboarding_screens.length - 1 && (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: SIZES.padding,
              marginVertical: SIZES.padding,
            }}>
            <TextButton
              buttonStyle={{backgroundColor: null}}
              labelStyle={{color: COLORS.darkGray2}}
              label="Skip"
              onPress={() => navigation.replace('SignIn')}
            />
            <TextButton
              buttonStyle={{height: 60, width: 200, borderRadius: SIZES.radius}}
              label="Next"
              onPress={() => {
                flatlistRef?.current?.scrollToIndex({
                  index: currentIndex + 1,
                  animated: true,
                });
              }}
            />
          </View>
        )}
        {currentIndex == constants.onboarding_screens.length - 1 && (
          <View
            style={{
              paddingHorizontal: SIZES.padding,
              marginVertical: SIZES.padding,
            }}>
            <TextButton
              buttonStyle={{height: 60, borderRadius: SIZES.radius}}
              label="Let's Get Started"
              onPress={() => navigation.replace('SignIn')}
            />
          </View>
        )}
      </View>
    );
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      {renderHeaderLogo()}
      <Animated.FlatList
        ref={flatlistRef}
        horizontal
        pagingEnabled
        data={constants.onboarding_screens}
        scrollEventThrottle={16}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        onViewableItemsChanged={onViewChangeRef.current}
        keyExtractor={item => `${item.id}`}
        renderItem={({item, index}) => {
          return (
            <View style={{width: SIZES.width}}>
              <View style={{flex: 3}}>
                <ImageBackground
                  source={item.backgroundImage}
                  style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    height: index == 1 ? '90%' : '100%',
                    width: '100%',
                  }}>
                  <Image
                    source={item.bannerImage}
                    resizeMode="contain"
                    style={{
                      width: SIZES.width * 0.7,
                      height: SIZES.width * 0.7,
                      marginBottom: SIZES.base,
                    }}></Image>
                </ImageBackground>
              </View>
              {/* Details */}
              <View
                style={{
                  flex: 1,
                  marginTop: 0,
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingHorizontal: SIZES.radius,
                }}>
                <Text style={{...FONTS.h1, fontSize: 25, fontWeight: 'bold'}}>
                  {item.title}
                </Text>
                <Text
                  style={{
                    ...FONTS.body3,
                    fontSize: 14,
                    marginTop: SIZES.radius * 0.2,
                    textAlign: 'center',
                    color: COLORS.darkGray,
                    paddingHorizontal: SIZES.padding,
                  }}>
                  {item.description}
                </Text>
              </View>
              <View
                style={{
                  ...FONTS.body3,
                  marginTop: SIZES.radius * 0.2,
                  textAlign: 'center',
                  color: COLORS.darkGray,
                  paddingHorizontal: SIZES.padding,
                }}></View>
            </View>
          );
        }}
      />
      {renderFooter()}
    </View>
  );
};

export default OnBoarding;
