import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import SignOneScreen from './src/screens/SignOneScreen/signInOne';
import OnBoardingOne from './src/screens/OnBoardingOne/onBoardingOne';
import OnBoardingTwo from './src/screens/OnBoardingTwo/onBoardingTwo';
import OnBoardingThree from './src/screens/OnBoardingThree/onBoardingThree'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

const App = () => {
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

export default App;

 //<SignOneScreen />
 //<OnBoardingOne />
 //<OnBoardingTwo />
 //<OnBoardingThree />