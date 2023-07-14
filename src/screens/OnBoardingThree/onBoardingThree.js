import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Styles from './style';
import constants from '../../constants';

const OnBoardingThree = ({navigation}) => {
  return (
    <View style={Styles.mainView}>
      <View style={Styles.firstView}>
        <View style={Styles.firstUpperView}>
          <Image source={constants.image.Background_1} style={Styles.backgroundImage} />
          <Image source={constants.image.Logo_01} style={Styles.logoOnView} />
          <Image
            source={constants.image.Background_3}
            style={Styles.logoBackground_2View}
          />
        </View>
      </View>
      <View style={Styles.secondOnOneView}>
        <View style={Styles.firstHeadingView}>
          <Text style={Styles.chooseText}>Receive the Great Food</Text>
          <Text style={Styles.text}>
            You'll receive the great food within a{'\n'} hour.And get free
            delivery credits for {'\n'} every order.
          </Text>
          <View style={Styles.slideBarView}>
            <View style={Styles.circleView}></View>
            <View style={Styles.circleView}></View>
            <View style={Styles.squareView}></View>
          </View>
        <View style={Styles.bottomButtonView}>
          <TouchableOpacity onPress={() => navigation.navigate('SignOneScreen')}>
            <View style={Styles.letsView}>
              <Text style={Styles.letsText}>Let's Get Started</Text>
            </View>
          </TouchableOpacity>
        </View>
        </View>
      </View>
    </View>
  );
};

export default OnBoardingThree;
