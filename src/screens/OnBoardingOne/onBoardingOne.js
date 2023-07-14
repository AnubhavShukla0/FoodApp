import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Styles from './style';
import constanst from '../../constants';
import constants from '../../constants/constants';

const OnBoardingOne = ({navigation}) => {
  return (
    <View style={Styles.onBoardingOneMainView}>
      <View style={Styles.firstView}>
        <View style={Styles.firstUpperView}>
          <Image source={constanst.image.Background_1} style={Styles.backgroundImage} />
          <Image source={constanst.image.Logo_01} style={Styles.logoOnView} />
          <Image source={constanst.image.Fav_Food} style={Styles.logoFavFoodView} />
        </View>
      </View>
      <View style={Styles.secondOnOneView}>
        <View style={Styles.firstHeadingView}>
          <Text style={Styles.chooseText}>{constants.TestOnOne}</Text>
          <Text style={Styles.text}>
          {constants.TestOnTwo}
          </Text>
          <View style={Styles.slideBarView}>
            <View style={Styles.squareView}></View>
            <View style={Styles.circleOneView}></View>
            <View style={Styles.circleOneView}></View>
          </View>
        </View>
        <View style={Styles.bottomButtonView}>
          <TouchableOpacity onPress={()=>navigation.navigate('SignOneScreen')}>
            <View style={Styles.skipView}>
              <Text style={Styles.skipText}>{constants.TestOnThree}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('OnBoardingTwo')}>
            <View style={Styles.nextView}>
              <Text style={Styles.nextText}>{constants.TestOnFour}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default OnBoardingOne;
