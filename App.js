// --------------------------------------------------------------------
// SYSTEM COMPONENTS
// --------------------------------------------------------------------
import {View, TouchableWithoutFeedback, Keyboard, Text, Image} from 'react-native';
import React, {useState} from 'react';
import {StatusBar, SafeAreaView} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useFonts } from 'expo-font';

// --------------------------------------------------------------------
// STYLES
// --------------------------------------------------------------------
import colorTheme from './src/config/colorTheme';
import { images } from './src/globalStyles/images';

// --------------------------------------------------------------------
// SCREENS
// --------------------------------------------------------------------
import { globalStyles } from './src/globalStyles/commonStyles';
import { screenSize } from './src/globalStyles/commonStyles';

const App = () => {
  const StyleTypes = ['default', 'dark-content', 'light-content'];
  const [visibleStatusBar, sentvisibleStatusBar] = useState(false);
  const [styleStatusBar, setStyleStatusBar] = useState(StyleTypes[0]);

  let [fontsLoaded] = useFonts({
    "sodo_sans" : require('./assets/fonts/SoDoSans-Black.ttf'),
  });

  if(!fontsLoaded){
    return <AppLoading />;
  }
  return (
    <View>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={[screenSize.height, screenSize.width, globalStyles.backgroundColor]}>
        <StatusBar
          backgroundColor={colorTheme.whiteSmoke}
          barStyle={styleStatusBar}
        />
        <View>
          <StatusBar hidden={visibleStatusBar} />
        </View>
        <View>
          <Image source={images.logo}></Image>
          <Ionicons name='rocket'  />
          <Text style={{ fontFamily: "sodo_sans" }}>Sick Sense</Text>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
    </View>
  )
}

export default App