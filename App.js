import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './stores/rootReducer';

import GBDrawer from './navigation/GBDrawer';
import {
  OnBoarding,
  SignIn,
  SignUp,
  ForgotPassword,
  Otp,
  FoodDetail,
  OrderTrack,
  MyCart,
  Success,
  AddCard,
  MyCard,
  DeliveryStatus,
  Map,
  UserProfile,
  UploadBook,
} from './screens';

const Stack = createStackNavigator();

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          // initialRouteName={'MainLayout'}>
          // <Stack.Screen name="MainLayout" component={GBDrawer} />
          // <Stack.Screen name="Checkout" component={Checkout} />

          // <Stack.Screen name="MyCart" component={MyCart} />

          // <Stack.Screen name="Success" component={Success} />

          // <Stack.Screen name="AddCard" component={AddCard} />

          // <Stack.Screen name="MyCard" component={MyCard} />

          // <Stack.Screen name="DeliveryStatus" component={DeliveryStatus} />

          // <Stack.Screen name="Map" component={Map} />

          initialRouteName={'SignIn'}>
          <Stack.Screen name="FoodDetail" component={FoodDetail} />
          <Stack.Screen name="MainLayout" component={GBDrawer} />
          <Stack.Screen name="OrderTrack" component={OrderTrack} />
          <Stack.Screen name="UserProfile" component={UserProfile} />
          <Stack.Screen name="UploadBook" component={UploadBook} />

          <Stack.Screen name="MyCart" component={MyCart} />

          <Stack.Screen
            name="Success"
            component={Success}
            options={{gestureEnabled: false}}
          />

          <Stack.Screen name="AddCard" component={AddCard} />

          <Stack.Screen name="MyCard" component={MyCard} />

          <Stack.Screen
            name="DeliveryStatus"
            component={DeliveryStatus}
            options={{gestureEnabled: false}}
          />

          <Stack.Screen name="Map" component={Map} />
          <Stack.Screen name="OnBoarding" component={OnBoarding} />

          <Stack.Screen name="SignIn" component={SignIn} />

          <Stack.Screen name="SignUp" component={SignUp} />

          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />

          <Stack.Screen name="Otp" component={Otp} />
          {/* initialRouteName={'OnBoarding'}>
          <Stack.Screen name="OnBoarding" component={OnBoarding} />

          <Stack.Screen name="SignIn" component={SignIn} />

          <Stack.Screen name="SignUp" component={SignUp} />

          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />

          <Stack.Screen name="Otp" component={Otp} />
          <Stack.Screen name="Home" component={GBDrawer} />
          <Stack.Screen name="FoodDetail" component={FoodDetail} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
