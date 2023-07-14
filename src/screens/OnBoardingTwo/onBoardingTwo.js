import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Styles from './style';
import constanst from '../../constants';
import constants from '../../constants/constants';


const OnBoardingTwo = ({navigation}) => {
  return (
    <View style={Styles.mainView}>
      <View style={Styles.firstView}>
        <View style={Styles.firstUpperView}>
          <Image source={constanst.image.Background_1} style={Styles.backgroundImage} />
          <Image source={constanst.image.Logo_01} style={Styles.logoOnView} />
          <Image
            source={constanst.image.Background_2}
            style={Styles.logoBackground_2View}
          />
        </View>
      </View>
      <View style={Styles.secondOnOneView}>
        <View style={Styles.firstHeadingView}>
          <Text style={Styles.chooseText}>{constants.TestOnTwoOne}</Text>
          <Text style={Styles.text}>
          {constants.TestOnTwoTwo}
          </Text>
          <View style={Styles.slideBarView}>
            <View style={Styles.circleView}></View>
            <View style={Styles.squareView}></View>
            <View style={Styles.circleView}></View>
          </View>
        </View>
        <View style={Styles.bottomButtonView}>
          <TouchableOpacity onPress={() => navigation.navigate('SignOneScreen')}>
            <View style={Styles.skipView}>
              <Text style={Styles.skipText}>{constants.TestOnTwoThree}</Text>
            </View>
          </TouchableOpacity >
          <TouchableOpacity onPress={() => navigation.navigate('OnBoardingThree')}>
            <View style={Styles.nextView}>
              <Text style={Styles.nextText}>{constants.TestOnTwoFour}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default OnBoardingTwo;
