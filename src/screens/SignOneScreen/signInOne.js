import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import constanst from '../../constants';
import Styles from './style';
import constants from '../../constants/constants';

const SignScreenOne = ({}) => {
  //Variable For Password Security
  const [seePassword, setSeePassword] = useState('true');

  return (
    <View style={Styles.sign1MainView}>
      <View style={Styles.firstLogoView}>
        <Image source={constanst.image.Logo_01} style={Styles.logoView} />
      </View>
      <View style={Styles.headingView}>
        <Text style={Styles.textOneStyle}>{constants.TestSignOne}</Text>
        <Text style={Styles.textTwoStyle}>
         {constants.TestSignTwo}
        </Text>
      </View>
      <View style={Styles.secondView}>
        <View style={Styles.inputOneView}>
          <Text style={Styles.textThreeStyle}>{constants.TestThree}</Text>
          <View style={Styles.inputView}>
            <TextInput style={Styles.textInput}></TextInput>
            <TouchableOpacity>
              <Image
                style={Styles.iconImage}
                source={constanst.image.Correct}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={Styles.inputTwoView}>
          <Text style={Styles.textThreeStyle}> {constants.TestSignFour}</Text>
          <View style={Styles.inputView}>
            <TextInput
              style={Styles.textInput}
              secureTextEntry={seePassword}
              autoCapitalize="false"
              autoCorrect={false}></TextInput>
            <TouchableOpacity onPress={() => setSeePassword(!seePassword)}>
              <Image style={Styles.iconImage} source={constanst.image.Eye} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={Styles.bottomView}>
          <TouchableOpacity>
            <View style={Styles.forgetView}>
              <Text style={Styles.forgetTextStyle}> {constants.TestSignFive}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={Styles.signView}>
              <Text style={Styles.signText}> {constants.TestSignSix}</Text>
            </View>
          </TouchableOpacity>
          <View style={Styles.textFourMainView}>
            <View style={Styles.textFourView}>
              <Text style={Styles.textFour}>{constants.TestSignSeven}</Text>
              <TouchableOpacity>
                <View style={Styles.signUpView}>
                  <Text style={Styles.signUp}> {constants.TestSignEight}</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={Styles.socialIconView}>
          <TouchableOpacity>
            <View style={Styles.faceBookView}>
              <Image source={constanst.image.Fb} style={Styles.socialImage} />
              <Text style={Styles.socialFbText}> {constants.TestSignNine}</Text>
            </View>
          </TouchableOpacity>
          <View style={{marginTop: 10}}>
            <TouchableOpacity>
              <View style={Styles.googleView}>
                <Image
                  source={constanst.image.Google}
                  style={Styles.socialImage}
                />
                <Text style={Styles.socialGoogleText}>
                {constants.TestSignTen}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignScreenOne;
