import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import OnBoardingOne from '../screens/OnBoardingOne/onBoardingOne';
import OnBoardingTwo from '../screens/OnBoardingTwo/onBoardingTwo';
import OnBoardingThree from '../screens/OnBoardingThree/onBoardingThree'
import SignOneScreen from '../screens/SignOneScreen/signInOne';


const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
   <NavigationContainer>
   <Stack.Navigator>
   <Stack.Screen name='OnBoardingOne' component={OnBoardingOne} options={{headerShown:false}}/>
   <Stack.Screen name='OnBoardingTwo' component={OnBoardingTwo} options={{headerShown:false}} />
   <Stack.Screen name='OnBoardingThree' component={OnBoardingThree} options={{headerShown:false}} />
   <Stack.Screen name='SignOneScreen' component={SignOneScreen} options={{headerShown:false}}/>
   </Stack.Navigator>
   </NavigationContainer>
  );
};

export default Navigation;