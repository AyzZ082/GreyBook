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
  FormInput,
} from '../../components';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';

const VerifyAccount = ({navigation}) => {
  const [bookName, setBookName] = React.useState('');
  const [bookDescription, setBookDescription] = React.useState('');
  const [bookPrice, setBookPrice] = React.useState('');

  const [menuList, setMenuList] = React.useState([]);

  //const [accountNumberError, setAccountNumberError] = React.useState("")
  const options = {
    title: 'Select Image',
    type: 'library',
    options: {
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: false,
    },
  };
  const OpenGallery = async () => {
    const images = await launchImageLibrary(options);
    console.log(images);
  };

  function renderHeader() {
    return (
      <ScndHeader
        title="Verify as Needy"
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
            onPress={() => navigation.navigate('UserProfile')}
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
  function renderUploadForm() {
    return (
      <View>
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
            Salahudin
          </Text>
          <Text
            style={{
              color: COLORS.darkGray2,
              ...FONTS.body4,
              textAlign: 'center',
              marginHorizontal: SIZES.padding,
            }}>
            Please upload pitcure of you CNIC, salary proofs & tax documents to
            get approved.
          </Text>
        </View>
        <FormInput
          containerStyle={{
            marginTop: SIZES.base,
          }}
          label="Phone"
          keyboardType="number-pad"
          maxLength={11}
          value={bookName}
          onChange={value => {
            setBookName(value);
          }}
        />
        <FormInput
          containerStyle={{
            marginTop: SIZES.base,
          }}
          label="CNIC No."
          keyboardType="name"
          value={bookDescription}
          onChange={value => {
            setBookDescription(value);
          }}
        />
        <FormInput
          containerStyle={{
            marginTop: SIZES.base,
          }}
          label="Occupation/Father's Occupation"
          keyboardType="name"
          value={bookPrice}
          onChange={value => {
            setBookPrice(value);
          }}
        />
        <View
          style={{
            flex: 1,
            marginTop: SIZES.padding,
            flexDirection: 'row',
            height: 55,
          }}>
          <TextIconButton
            containerStyle={{
              flex: 1,
              borderRadius: SIZES.base,
              borderWidth: 2,
              borderColor: COLORS.primary,
              backgroundColor: COLORS.lightGray2,
            }}
            label="Upload Documents"
            labelStyle={{
              color: COLORS.primary,
              ...FONTS.h3,
            }}
            icon={icons.plus}
            iconPosition="LEFT"
            iconStyle={{
              width: 25,
              height: 25,
              marginRight: SIZES.base,
              tintColor: COLORS.primary,
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
        {/* Upload Book Form */}
        {renderUploadForm()}
      </ScrollView>
      <TextButton
        buttonStyle={{
          height: 55,
          alignItems: 'center',
          marginBottom: SIZES.radius,
          marginHorizontal: SIZES.padding,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.primary,
        }}
        label="Request Approval"
        onPress={() => console.log('Success')}
      />
    </View>
  );
};

export default VerifyAccount;
