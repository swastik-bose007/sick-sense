// --------------------------------------------------------------------
// SYSTEM COMPONENTS
// --------------------------------------------------------------------
import { View, TouchableWithoutFeedback, Keyboard, Text, Image } from 'react-native';
import { StatusBar, SafeAreaView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
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

const SplashScreen = () => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={[ screenSize.height, screenSize.width, globalStyles.flexCenter, globalStyles.dummyView, globalStyles.bgcolor ]}>
        <View style={[ globalStyles.flexCenter ]}>
          <Image source={images.logo} style={globalStyles.logoimage}></Image>
          <Text style={[ globalStyles.splashText ]}>Sick Sense</Text>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default SplashScreen