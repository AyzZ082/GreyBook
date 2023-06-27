import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Alert,
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

import {SelectList} from 'react-native-dropdown-select-list';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import axios from 'axios';
import envURL from '../../envURL';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UploadBook = ({navigation}) => {
  const [selectedCategory, setselectedCategory] = React.useState('');

  const [bookName, setBookName] = React.useState('');
  const [bookDescription, setBookDescription] = React.useState('');
  const [bookPrice, setBookPrice] = React.useState('');

  const [menuList, setMenuList] = React.useState([]);
  const [Categories, setCategories] = React.useState([]);

  const [BookImage, setBookImage] = React.useState({});

  const FetchCategories = async () => {
    // console.log("rnv dtstud ",env.REACT_APP_BACKEND_URL)
    await axios
      .get(`${envURL.REACT_APP_BACKEND_URL}/books/categories`)

      .then(async res => {
        console.log(res.data);
        let newArray = res.data.map(item => {
          return {key: item._id, value: item.Name};
        });
        setCategories(newArray);
      })
      .catch(err => {
        console.log(err);
        console.log('Err Fectinh Cate');
      });
  };

  React.useEffect(() => {
    FetchCategories();
    console.log(Categories);
  }, []);

  const PublishBook = async () => {
    const token = await AsyncStorage.getItem('token');
    let data = new FormData();
    data.append('file', {
      uri: BookImage,
      type: 'image/*',
      name: 'profile-picture',
    });
    data.append('Name', bookName);
    data.append('Description', bookDescription);
    data.append('Price', bookPrice);
    data.append('Category', selectedCategory);

    await axios
      .post(
        `${envURL.REACT_APP_BACKEND_URL}/books/addbook`,
        {data},
        {
          headers: {token: token},
        },
      )
      .then(async res => {
        console.log(res.data);

        // await AsyncStorage.setItem('token', res.data.authtoken);
        // navigation.navigate('MainLayout');
      })
      .catch(err => {
        Alert.alert(
          'Title',
          err.response.data.error
            ? err.response.data.error
            : 'Something Went Wrong! Try Again',
        );
      });
  };
  //const [accountNumberError, setAccountNumberError] = React.useState("")r
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
    // console.log(images);
    setBookImage(images.assets[0]);
  };
  const [selectedImage, setSelectedImage] = React.useState(null);

  // const openImagePicker = () => {
  //   const options = {
  //     title: 'Select Image',
  //     cancelButtonTitle: 'Cancel',
  //     takePhotoButtonTitle: 'Take Photo',
  //     chooseFromLibraryButtonTitle: 'Choose from Library',
  //     mediaType: 'photo',
  //     quality: 1,
  //   };

  //   ImagePicker.showImagePicker(options, response => {
  //     if (response.didCancel) {
  //       console.log('User cancelled image picker');
  //     } else if (response.error) {
  //       console.log('ImagePicker Error: ', response.error);
  //     } else {
  //       setSelectedImage(response.uri);
  //     }
  //   });
  // };

  function renderHeader() {
    return (
      <ScndHeader
        title="Sell/Donate Book"
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
            onPress={() => console.log('Chat')}
          />
        }
      />
    );
  }
  function renderProfileCard() {
    return (
      <View
        style={{
          marginTop: SIZES.base,
          paddingVertical: SIZES.base,

          borderRadius: SIZES.radius,
          backgroundColor: COLORS.white,
        }}>
        {/* Name */}
        <View
          style={{
            flex: 1,
            marginVertical: SIZES.radius,
          }}>
          <Text
            style={{
              color: COLORS.darkGray2,
              ...FONTS.body3,
            }}>
            Upload Book Picture
          </Text>
        </View>
        {/* Image */}
        <TouchableOpacity
          onPress={OpenGallery}
          style={{
            width: 150,
            height: 150,
          }}>
          <Image
            source={BookImage}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 120,
              borderWidth: 1,
              borderColor: COLORS.black,
            }}
          />
          <View
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}>
            <View
              style={{
                width: 30,
                height: 30,
                marginBottom: -15,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 15,
                backgroundColor: COLORS.primary,
              }}>
              <Image
                source={icons.cart}
                resizeMode="contain"
                style={{
                  width: 17,
                  height: 17,
                  tintColor: COLORS.white,
                }}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
  function renderCategories() {
    return (
      <View
        style={{
          marginTop: SIZES.base,
        }}>
        <SelectList
          data={Categories}
          setSelected={setselectedCategory}
          inputStyles={{color: COLORS.darkGray}}
          boxStyles={{
            backgroundColor: COLORS.lightGray2,
            height: 55,
            borderColor: COLORS.white,
            alignItems: 'center',
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.lightGray2,
          }}
        />
      </View>
    );
  }
  function renderUploadForm() {
    return (
      <View>
        <FormInput
          containerStyle={{
            marginTop: SIZES.base,
          }}
          label="Book Name"
          keyboardType="name"
          value={bookName}
          onChange={value => {
            setBookName(value);
          }}
        />
        <FormInput
          containerStyle={{
            marginTop: SIZES.base,
          }}
          label="Book Description"
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
          label="Price"
          keyboardType="number-pad"
          maxLength={11}
          value={bookPrice}
          onChange={value => {
            setBookPrice(value);
          }}
        />
        {/* Category */}
        <View
          style={{
            flex: 1,
          }}>
          <Text
            style={{
              marginTop: SIZES.base,
              color: COLORS.gray,
              ...FONTS.body4,
            }}>
            Select Category
          </Text>
          {renderCategories()}
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
        label="Publish"
        onPress={() => PublishBook()}
      />
    </View>
  );
};

export default UploadBook;
