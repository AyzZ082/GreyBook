import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {COLORS, FONTS, dummyData} from '../../constants';

const MessagesScreen = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 20,
        alignItems: 'center',
        backgroundColor: COLORS.white,
      }}>
      <FlatList
        data={dummyData.messages}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            style={{
              width: '100%',
            }}
            onPress={() => navigation.navigate('ChatScreen')}>
            {/* onPress={() =>
              navigation.navigate('Chat', {userName: item.userName})
            }> */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderBottomWidth: 0.5,
              }}>
              <View
                style={{
                  paddingTop: 15,
                  paddingBottom: 15,
                }}>
                <Image
                  style={{width: 60, height: 60, borderRadius: 12}}
                  source={item.userImg}
                />
              </View>
              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'center',
                  padding: 15,
                  paddingLeft: 0,
                  marginLeft: 10,
                  width: 300,

                  borderBottomColor: COLORS.primary,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginBottom: 5,
                  }}>
                  <Text style={{fontSize: 14, ...FONTS.h3}}>
                    {item.userName}
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      ...FONTS.body4,
                      color: COLORS.green,
                    }}>
                    {item.messageTime}
                  </Text>
                </View>
                <Text style={{color: COLORS.darkGray, fontSize: 14}}>
                  {item.messageText}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        ListFooterComponent={<View style={{height: 190}} />}
      />
    </View>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
