import React from 'react';

import {
  View,
  Modal,
  TouchableWithoutFeedback,
  Animated,
  ScrollView,
  Text,
  Image,
} from 'react-native';
import {COLORS, FONTS, SIZES, icons} from '../../constants';

import {IconButton, TextButton, TwoPointSlider} from '../../components';

const Section = ({containerStyle, title, children})=>{
  return(
    <View
    style={{
      marginTop:SIZES.padding,
      ...containerStyle
    }}
    >
      <Text style={{...FONTS.h3}}>{title}</Text>

      {children}
    </View>
  )
}
const FilterModal = ({isVisible, onClose}) => {
  const modalAnimatedValue = React.useRef(new Animated.Value(0)).current;

  const [showFilterModal, setShowFilterModal] = React.useState(isVisible);

  React.useEffect(() => {
    if (showFilterModal) {
      Animated.timing(modalAnimatedValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(modalAnimatedValue, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start(() => onClose());
    }
  }, [showFilterModal]);

  const modalY = modalAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [SIZES.height, SIZES.height - 320],
  });
  function renderBudget(){
    return(
      <Section title="Price">
        <View style={{
          alignItems: 'center'
        }}>
          <TwoPointSlider
          values={[3,10]}
          min={1}
          max={1000}
          postfix=" Rs."
          onValuesChange={(values)=> console.log(values)}
          />
        </View>
      </Section>
    )
  }
  return (
    <Modal animationType="fade" transparent={true} visible={isVisible}>
      <View style={{flex: 1, backgroundColor: COLORS.transparentBlack7}}>
        {/* transparentBG */}
        <TouchableWithoutFeedback
          onPress={() => {
            setShowFilterModal(false);
          }}>
          <View
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
            }}></View>
        </TouchableWithoutFeedback>
        {/* Modal */}
        <Animated.View
          style={{
            position: 'absolute',
            left: 0,
            top: modalY,
            width: '100%',
            height: '100%',
            padding: SIZES.padding,
            borderTopRightRadius: SIZES.padding,
            borderTopLeftRadius: SIZES.padding,
            backgroundColor: COLORS.white,
          }}>
          {/* Header */}
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{flex: 1, ...FONTS.h3, fontSize: 18}}>
              Filter Your Search
            </Text>
            <IconButton
              containerStyle={{
                borderWidth: 2,
                borderRadius: 10,
                borderColor: COLORS.gray2,
              }}
              icon={icons.cross}
              iconStyle={{tintColor: COLORS.gray2}}
              onPress={() => setShowFilterModal(false)}
            />
          </View>
          <ScrollView showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom:250}}
          >
            {/* Budget */}
            {renderBudget()}
            <TextButton
            label="Apply Filters"
            buttonStyle={{
              height:50,
              marginTop: SIZES.padding*2,
              borderRadius: SIZES.base,
              backgroundColor: COLORS.primary
            }}
            onPress={()=> console.log("Apply Filter")}
            />
          </ScrollView>
          
        </Animated.View>
      </View>
    </Modal>
  );
};

export default FilterModal;
