// --------------------------------------------------------------------
// SYSTEM COMPONENTS
// --------------------------------------------------------------------
import { View, Text } from 'react-native';
import React, { useState } from 'react';


// --------------------------------------------------------------------
// NAVIGATION DEPENDENCIES
// --------------------------------------------------------------------
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



// --------------------------------------------------------------------
// SCREENS
// --------------------------------------------------------------------
import SplashScreen from './src/screens/SplashScreen';

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

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='SplashScreen'>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App