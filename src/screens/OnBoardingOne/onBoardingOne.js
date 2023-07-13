import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Styles from './style';
import constanst from '../../constants';

const OnBoardingOne = () => {
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
          <Text style={Styles.chooseText}>Choose a Favourite Food</Text>
          <Text style={Styles.text}>
            When You order Eat Steet, we'll hook you {'\n'} up with exclusive
            coupon, soecials and {'\n'} rewards
          </Text>
          <View style={Styles.slideBarView}>
            <View style={Styles.squareView}></View>
            <View style={Styles.circleOneView}></View>
            <View style={Styles.circleOneView}></View>
          </View>
        </View>
        <View style={Styles.bottomButtonView}>
          <TouchableOpacity>
            <View style={Styles.skipView}>
              <Text style={Styles.skipText}>Skip</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={Styles.nextView}>
              <Text style={Styles.nextText}>Next</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default OnBoardingOne;
