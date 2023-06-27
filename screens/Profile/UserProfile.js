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
  IconButton,
  ScndHeader,
  CartQuantityButton,
  IconLabel,
  LineDivider,
  Ratings,
  StepperInput,
  TextButton,
  TextIconButton,
  ProfileOption,
} from '../../components';
import UploadBook from './UploadBook';

const UserProfile = ({navigation}) => {
  function renderHeader() {
    return (
      <ScndHeader
        title="PROFILE"
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
            }}
            iconStyle={{
              width: 20,
              height: 20,
              tintColor: COLORS.primary,
            }}
            //onPress={() => console.log('Chat')}
            onPress={() => navigation.navigate('ChatScreen')}
          />
        }
      />
    );
  }
  function renderProfileCard() {
    return (
      <View
        style={{
          alignItems: 'center',
          marginTop: SIZES.base,
          paddingVertical: SIZES.base,
          paddingHorizontal: SIZES.radius,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.white,
        }}>
        {/* Image */}
        <TouchableOpacity
          style={{
            width: 150,
            height: 150,
          }}>
          <Image
            source={images.user_profile}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 120,
              borderWidth: 1,
              borderColor: COLORS.primary,
            }}
          />
        </TouchableOpacity>
        {/* Name */}
        <View
          style={{
            flex: 1,
            marginVertical: SIZES.radius,
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: COLORS.black,
              ...FONTS.h2,
            }}>
            Salahudin Ayubi
          </Text>
          <Text
            style={{
              color: COLORS.darkGray2,
              ...FONTS.body3,
            }}>
            03152736437
          </Text>
        </View>
        {/* Verify as Needy */}
        <TextButton
          label="Verify as Needy"
          labelStyle={{
            color: COLORS.green,
          }}
          buttonStyle={{
            height: 35,
            paddingHorizontal: SIZES.radius,
            borderRadius: 20,
            borderWidth: 1,
            borderColor: COLORS.green,
            backgroundColor: COLORS.lightGray2,
          }}
          //onPress={() => console.log('Verify')}
          onPress={() => navigation.navigate('VerifyAccount')}
        />
      </View>
    );
  }
  function renderProfileOptions() {
    return (
      <View style={styles.profileOptionsContainer}>
        <ProfileOption
          icon={icons.profile}
          label="Name"
          value="AyzZ TheDesigner"
        />
        <LineDivider />
        <ProfileOption
          icon={icons.call}
          label="Phone Number"
          value="#03152736437"
        />
        <LineDivider />
        <ProfileOption
          icon={icons.apple}
          label="Address"
          value="Ratta Road Sabri Chowk GRW"
        />
      </View>
    );
  }
  function renderFooter() {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
          marginBottom: SIZES.padding,
        }}>
        <View
          style={{
            flexDirection: 'row',
            height: 55,
          }}>
          <TextIconButton
            containerStyle={{
              flex: 1,
              borderRadius: SIZES.base,
              backgroundColor: COLORS.primary,
            }}
            label="Sell your book"
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
      {/* Header */}
      {renderHeader()}

      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: SIZES.padding,
          paddingBottom: 150,
        }}>
        {/* Profile Card */}
        {renderProfileCard()}
        {/* Profile Options */}
        {renderProfileOptions()}
        {/* Footer */}
        {renderFooter()}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  profileOptionsContainer: {
    marginTop: SIZES.padding,
    paddingHorizontal: SIZES.padding,
    borderWidth: 1,
    borderRadius: SIZES.radius,
    borderColor: COLORS.gray2,
  },
});
export default UserProfile;
