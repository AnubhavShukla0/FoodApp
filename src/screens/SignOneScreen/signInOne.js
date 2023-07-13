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

const SignScreenOne = ({}) => {
  //Variable For Password Security
  const [seePassword, setSeePassword] = useState('true');

  return (
    <View style={Styles.sign1MainView}>
      <View style={Styles.firstLogoView}>
        <Image source={constanst.image.Logo_01} style={Styles.logoView} />
      </View>
      <View style={Styles.headingView}>
        <Text style={Styles.textOneStyle}>Let's Sign You In</Text>
        <Text style={Styles.textTwoStyle}>
          Welcome back, you've been missed
        </Text>
      </View>
      <View style={Styles.secondView}>
        <View style={Styles.inputOneView}>
          <Text style={Styles.textThreeStyle}> Email </Text>
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
          <Text style={Styles.textThreeStyle}> Password </Text>
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
              <Text style={Styles.forgetTextStyle}>Forgot Password?</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={Styles.signView}>
              <Text style={Styles.signText}>Sign in</Text>
            </View>
          </TouchableOpacity>
          <View style={Styles.textFourMainView}>
            <View style={Styles.textFourView}>
              <Text style={Styles.textFour}>Don't have an account?</Text>
              <TouchableOpacity>
                <View style={Styles.signUpView}>
                  <Text style={Styles.signUp}>Sign Up</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={Styles.socialIconView}>
          <TouchableOpacity>
            <View style={Styles.faceBookView}>
              <Image source={constanst.image.Fb} style={Styles.socialImage} />
              <Text style={Styles.socialFbText}>Continue With Facebook</Text>
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
                  Continue With Google
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
