import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Styles from '../../constants/themes';
import image from '../../constants/image';
import icons from '../assests/icons/icons';

const OnBoardingThree = ({}) => {
  return (
    <View style={Styles.onBoardingOneMainView}>
      <View style={Styles.firstView}>
        <View style={Styles.firstUpperView}>
          <Image source={image.Background_1} style={Styles.backgroundImage} />
          <Image source={image.Logo_01} style={Styles.logoOnView} />
          <Image
            source={image.Background_3}
            style={Styles.logoBackground_2View}
          />
        </View>
      </View>
      <View style={Styles.secondOnOneView}>
        <View style={Styles.firstHeadingView}>
          <Text style={Styles.chooseText}>Receive the Great Food</Text>
          <Text style={Styles.text}>
            {' '}
            You'll receive the great food within a{'\n'} hour.And get free
            delivery credits for {'\n'} every order.
          </Text>
          <View style={Styles.slideBarView}>
            <View style={Styles.circleOneView}></View>
            <View style={Styles.circleOneView}></View>
            <View style={Styles.squareLogo2View}></View>
          </View>
        </View>
        <View style={Styles.bottomButtonView}>
          <TouchableOpacity>
            <View style={Styles.letsView}>
              <Text style={Styles.letsText}>Let's Get Started</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default OnBoardingThree;
