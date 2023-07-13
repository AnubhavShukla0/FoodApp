import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Styles from './style';
import constants from '../../constants';


const OnBoardingTwo = ({}) => {
  return (
    <View style={Styles.mainView}>
      <View style={Styles.firstView}>
        <View style={Styles.firstUpperView}>
          <Image source={constants.image.Background_1} style={Styles.backgroundImage} />
          <Image source={constants.image.Logo_01} style={Styles.logoOnView} />
          <Image
            source={constants.image.Background_2}
            style={Styles.logoBackground_2View}
          />
        </View>
      </View>
      <View style={Styles.secondOnOneView}>
        <View style={Styles.firstHeadingView}>
          <Text style={Styles.chooseText}>Hot Delivery to Home</Text>
          <Text style={Styles.text}>
            {' '}
            We make food ordering fast, simple {'\n'}and free-no matter if you
            order online {'\n'} or cash
          </Text>
          <View style={Styles.slideBarView}>
            <View style={Styles.circleOneView}></View>
            <View style={Styles.squareLogo2View}></View>
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

export default OnBoardingTwo;
