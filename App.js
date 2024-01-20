import { useEffect, useState } from 'react';
import { AppNavigation } from './src/navigations';
import { useFonts } from 'expo-font';
import * as SplScreen from 'expo-splash-screen';


const App = () => {
  const StyleTypes = ["default", "dark-content", "light-content"];
  const [visibleStatusBar, sentvisibleStatusBar] = useState(false);
  const [styleStatusBar, setStyleStatusBar] = useState(StyleTypes[2]);

  
  let [fontsLoaded] = useFonts({
    "SoDoSans-Regular": require('./assets/fonts/SoDoSans-Regular.ttf'),
    "SoDoSans-SemiBold": require('./src/assets/fonts/SoDoSans-SemiBold.ttf'),
    "SoDoSans-Bold": require('./src/assets/fonts/SoDoSans-Bold.ttf'),
    "SoDoSans-Black": require('./assets/fonts/SoDoSans-Black.ttf'),

    "OpenSans-Light": require('./src/assets/fonts/OpenSans-Light.ttf'),
    "OpenSans-Regular": require('./src/assets/fonts/OpenSans-Regular.ttf'),
    "OpenSans-SemiBold": require('./src/assets/fonts/OpenSans-Semibold.ttf'),
    "OpenSans-Bold": require('./src/assets/fonts/OpenSans-Bold.ttf'),
    "OpenSans-ExtraBold": require('./src/assets/fonts/OpenSans-ExtraBold.ttf'),
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


  return (
    <AppNavigation/>
  )

}

export default App

