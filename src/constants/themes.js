import {StyleSheet} from "react-native";

const Styles= StyleSheet.create({

//Sryling For signIn1 Screen {

   sign1MainView:{
    flex:1,
    backgroundColor:"#FBFBFB"
   },
   firstLogoView:{
   alignItems:"center",
   marginTop:45
   },
   logoView:{
    height:68,
    width:215,
    //position:"absolute",
    marginTop:45
      
},
   headingView:{
    alignItems:"center",
    marginTop:45
   },
   textOneStyle:{
    fontSize:25,
    fontWeight:"bold"
   },
   textTwoStyle:{
    fontSize:18,
    color:"#757D85",
    marginTop:10
   },
   secondView:{
    marginTop:20,
    marginLeft:15
   },
   inputOneView:{
   },
   textThreeStyle:{
    fontSize:17,
    color:"#525C67",
   },
   inputView:{
    marginTop:10,
    backgroundColor:"#DDDDDD",
    borderTopEndRadius:10,
    borderTopStartRadius:10,
    borderEndEndRadius:10,
    borderEndStartRadius:10,
    width:400,
    height:50,
    flexDirection:"row"
   },
   textInput:{
    fontSize:18,
    marginTop:1,
    width:330
   },
   iconImage:{
    height:25,
    width:25,
    marginLeft:20,
    marginTop:10
   },
   inputTwoView:{
    marginTop:10
   },
   bottomView:{
    marginTop:10
   },
   forgetView:{
    alignItems:"flex-end",
    marginRight:15
   },
   forgetTextStyle:{
    fontSize:17,
    color:"#525C67",
   },
   signView:{
    marginTop:10,
    backgroundColor:"#FDDED4",
    borderTopEndRadius:10,
    borderTopStartRadius:10,
    borderEndEndRadius:10,
    borderEndStartRadius:10,
    width:400,
    height:50,
    alignItems:"center",
   },
   signText:{
    marginTop:15,
    fontSize:18,
    color:"#FBFBFB"
   },
   textFourMainView:{
    alignItems:"center"
   },
   textFourView:{
    flexDirection:"row",
    marginTop:15,
   },
   textFour:{
    fontSize:17,
    color:"#757D85",
   },
   signUpView:{
    marginLeft:5,
   },
   signUp:{
    fontSize:17,
    color:"#FF6C44"
   },
   socialIconView:{
    top:180
   },
   faceBookView:{
    flexDirection:"row",
    backgroundColor:"#0064C0",
    borderTopEndRadius:10,
    borderTopStartRadius:10,
    borderEndEndRadius:10,
    borderEndStartRadius:10,
    width:400,
    height:50,
    alignItems:"center"
   },
   socialImage:{
    height:25,
    width:25,
    left:80
   },
   socialFbText:{
    fontSize:18,
    color:"#FFFFFF",
    left:90
   },
   googleView:{
    flexDirection:"row",
    backgroundColor:"#DDDDDD",
    borderTopEndRadius:10,
    borderTopStartRadius:10,
    borderEndEndRadius:10,
    borderEndStartRadius:10,
    width:400,
    height:50,
    alignItems:"center"
   },
   socialGoogleText:{
    fontSize:18,
    color:"#000000",
    left:90
   },

  //---------------------------------- }

  //Styling For onBoardingOne Screen  {

  onBoardingOneMainView:{
    flex:1,
  },
  firstView:{
    flex:1.6,
    backgroundColor:"#FFFFFF",
  },
  firstUpperView:{
    alignItems:"center"
  },
  backgroundImage:{
   height:500,
   width:435
  },
  logoOnView:{
    height:68,
    width:215,
    position:"absolute",
    top:60     
  },
  logoFavFoodView:{
    height:300,
    width:215,
    position:"absolute", 
    top:230   
  },
  secondOnOneView:{
    flex:1,
    backgroundColor:"white",
  },
  firstHeadingView:{
    alignItems:"center",
    top:30
  },
  chooseText:{
    fontSize:28,
    fontWeight:"bold"
  },
  text:{
    marginTop:10,
    fontSize:17,
    color:"#757D85"
  },
  slideBarView:{
    marginTop:40,
    flexDirection:"row",
    marginRight:20,
  },
  squareView:{
    height:10,
    width:30,
    backgroundColor:"#FF6C44",
    borderRadius:10
  },
  circleOneView:{
   marginLeft:10,
    height:10,
    width:10,
    backgroundColor:"#FF6C44",
    borderCurve:"circular",
   borderRadius:10
  },
  bottomButtonView:{
    marginTop:60,
    flexDirection:"row",
  },
  skipView:{
    marginLeft:70,
    marginTop:10
  },
  skipText:{
    fontSize:22,
    color:"#525C67"
  },
  nextView:{
    height:50,
    width:180,
    backgroundColor:"#FF6C44",
    alignItems:"center",
    borderRadius:10,
    marginLeft:70
  },
  nextText:{
    fontSize:23,
    color:"#FFFFFF",
    top:10
  },

   //---------------------------------- }

   //Styling For onBoardingTwo Screen  {

   logoBackground_2View:{
    height:300,
    width:280,
    position:"absolute", 
    top:220  
   },

   squareLogo2View:{
    height:10,
    width:30,
    backgroundColor:"#FF6C44",
    borderRadius:10,
    marginLeft:10
  },

  //------------------------------------}

  //Styling For OnBoardingThree Screen {
  
  letsView:{
    height:50,
    width:330,
    backgroundColor:"#FF6C44",
    alignItems:"center",
    borderRadius:10,
    marginLeft:30
  },
  letsText:{
    fontSize:18,
    color:"#FFFFFF",
    top:10,
    fontWeight:"bold"
  }
});
export default Styles