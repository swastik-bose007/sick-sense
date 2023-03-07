// --------------------------------------------------------------------
// SYSTEM COMPONENTS
// --------------------------------------------------------------------
import { View, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useFonts } from 'expo-font';
import * as SplScreen from 'expo-splash-screen';

// --------------------------------------------------------------------
// NAVIGATION DEPENDENCIES
// --------------------------------------------------------------------
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



// --------------------------------------------------------------------
// SCREENS
// --------------------------------------------------------------------
import SplashScreen from './src/screens/SplashScreen';
import LoginScreen from './src/screens/LoginScreen';

const App = () => {
  // ------------------------------------------------------------
  // status bar color state
  // ------------------------------------------------------------
  const StyleTypes = ['default', 'dark-content', 'light-content'];
  const [visibleStatusBar, sentvisibleStatusBar] = useState(false);
  const [styleStatusBar, setStyleStatusBar] = useState(StyleTypes[0]);
  // ------------------------------------------------------------
  // navigation
  // ------------------------------------------------------------
  const Stack = createNativeStackNavigator();
  // --------------------------------------------------------------------
  // fonts settings
  // --------------------------------------------------------------------
  let [fontsLoaded] = useFonts({
    "SoDoSans-Regular": require('./assets/fonts/SoDoSans-Regular.ttf'),
    "SoDoSans-SemiBold": require('./assets/fonts/SoDoSans-SemiBold.ttf'),
    "SoDoSans-Bold": require('./assets/fonts/SoDoSans-Bold.ttf'),
    "SoDoSans-Black": require('./assets/fonts/SoDoSans-Black.ttf'),
    
    "OpenSans-Light": require('./assets/fonts/OpenSans-Light.ttf'),
    "OpenSans-Regular": require('./assets/fonts/OpenSans-Regular.ttf'),
    "OpenSans-SemiBold": require('./assets/fonts/OpenSans-Semibold.ttf'),
    "OpenSans-Bold": require('./assets/fonts/OpenSans-Bold.ttf'),
    "OpenSans-ExtraBold": require('./assets/fonts/OpenSans-ExtraBold.ttf'),
  });
  useEffect(() => {
    async function prepare() {
      await SplScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if (!fontsLoaded) {
    return undefined;
  }
  else {
    SplScreen.hideAsync();
  }
  // --------------------------------------------------------------------
  // APP COMPONENTS
  // --------------------------------------------------------------------
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='SplashScreen'>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App