// --------------------------------------------------------------------
// SYSTEM COMPONENTS
// --------------------------------------------------------------------
import {View, TouchableWithoutFeedback, Keyboard, Text} from 'react-native';
import React, {useState} from 'react';
import {StatusBar, SafeAreaView} from 'react-native';

// --------------------------------------------------------------------
// STYLES
// --------------------------------------------------------------------
import colorTheme from './src/config/colorTheme';

// --------------------------------------------------------------------
// SCREENS
// --------------------------------------------------------------------
import { globalStyles } from './src/globalStyles/commonStyles';
import { screenSize } from './src/globalStyles/commonStyles';

const App = () => {
  const StyleTypes = ['default', 'dark-content', 'light-content'];
  const [visibleStatusBar, sentvisibleStatusBar] = useState(false);
  const [styleStatusBar, setStyleStatusBar] = useState(StyleTypes[0]);
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
      </SafeAreaView>
    </TouchableWithoutFeedback>
    </View>
  )
}

export default App