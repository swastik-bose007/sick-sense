// --------------------------------------------------------------------
// SYSTEM COMPONENTS
// --------------------------------------------------------------------
import { View, TouchableWithoutFeedback, Keyboard, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native';
import React from 'react'

// --------------------------------------------------------------------
// EXTERNAL COMPONENTS
// --------------------------------------------------------------------
import { images } from '../config/images';

// --------------------------------------------------------------------
// STYLES
// --------------------------------------------------------------------
import colorTheme from '../config/colorTheme';
import { globalStyles } from '../globalStyles/commonStyles';
import { screenSize } from '../globalStyles/commonStyles';

const LoginScreen = () => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={[ screenSize.height, screenSize.width, globalStyles.dummyView ]}>
        <View style={[ globalStyles.flexCenter ]}>
          <Image source={images.loginImage} style={[globalStyles.loginImage, globalStyles.upperSpace ]}></Image>
          <Text style={[ globalStyles.dim1, globalStyles.loginHeader ]}>WELCOME</Text>
          <Text style={[ globalStyles.dim2, globalStyles.loginPara ]}>Sense your sickness with machine learning </Text>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default LoginScreen