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
  FormInput
} from '../../components';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';


import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';

const UploadBook = ({navigation}) => {


  const [bookName, setBookName] = React.useState("")
  const [bookDescription, setBookDescription] = React.useState("")
   //const [accountNumberError, setAccountNumberError] = React.useState("")
const options={
  title: 'Select Image',
  type: 'library',
  options: {
    selectionLimit: 1,
    mediaType: 'photo',
    includeBase64: false,
  },
}
   const OpenGallery=async()=>{
    const images = await launchImageLibrary(options);
    console.log(images)
   }
// const [selectedImage, setSelectedImage] = React.useState(null);

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
        title="Upload"
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
        rightComponent={<IconButton
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
          
        />}
      />
    );
  }
  function renderProfileCard(){
    return(
      <View style={{
        
        marginTop: SIZES.base,
        paddingVertical: SIZES.base,
        
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.white
      }}>
        {/* Name */}
        <View style={{
            flex:1,
            marginVertical: SIZES.radius,
            
            
          }}>
            <Text style={{
              
             color: COLORS.darkGray2,
              ...FONTS.body3
            }}>Upload Book Picture</Text>
          </View>
        {/* Image */}
        <TouchableOpacity onPress={OpenGallery} style={{
          
          width:150,
          height: 150
        }}>
          <Image
          source={images.profile}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 120,
            borderWidth:1,
            borderColor: COLORS.black,
            tintColor: COLORS.primary
          }}
          />
          <View style={{
            position:'absolute',
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: "flex-end"
          }}>
            <View style={{
              width:30,
              height:30,
              marginBottom: -15,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 15,
              backgroundColor: COLORS.primary
            }}>
              <Image
              source={icons.cart}
              resizeMode='contain'
              style={{
                width:17,
                height:17,
                tintColor: COLORS.white
              }}
              />
            </View>
          </View>
          
        </TouchableOpacity>
          
      </View>
    )
  }
  function renderUploadForm(){
    return(
      <View >
        <FormInput 
        containerStyle={{
          marginTop: SIZES.base
        }}
        label="Book Name"
        keyboardType='name'

        value={bookName}
        onChange={value=> {
          setBookName(value);
        }}
        />
        <FormInput 
        containerStyle={{
          marginTop: SIZES.base
        }}
        label="Book Description"
        keyboardType='name'
        maxLength={11}
        value={bookDescription}
        onChange={value=> {
          setBookDescription(value);
        }}
        />
        
    </View>
    )
  }
  return (
    <View
    style={{
      flex: 1,
      backgroundColor: COLORS.white,
    }}>
    {/* Header */}
    {/* {renderHeader()} */}
    <ScrollView contentContainerStyle={{
      paddingHorizontal:SIZES.padding,
      paddingBottom:150
    }}>
      {/* Profile Card */}
      {renderProfileCard()}
      {/* Upload Book Form */}
      {renderUploadForm()}
      
      
    </ScrollView>

    
  </View>
  );
};

    export default UploadBook;