// --------------------------------------------------------------------
// SYSTEM COMPONENTS
// --------------------------------------------------------------------
import { View, TouchableWithoutFeedback, Keyboard, Text, Image } from 'react-native';
import { StatusBar, SafeAreaView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useFonts } from 'expo-font';
import React from 'react'
// import AppLoading from 'expo-app-loading';

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
  let [fontsLoaded] = useFonts({
    "sodo_sans": require('../assets/fonts/SoDoSans-Black.ttf'),
  });

  // if(!fontsLoaded){
  //   return <AppLoading />;
  // }
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView>
        <View>
          <Text style={{ fontFamily: 'sodo_sans' }}>SplashScrnnnnnnnnnnnnnnnnnnnnneen</Text>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default SplashScreen