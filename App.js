import { useEffect, useState } from 'react';
import { AppNavigation } from './src/navigations';
import { useFonts } from 'expo-font';
import * as SplScreen from 'expo-splash-screen';
import * as Location from 'expo-location'

const App = () => {
  const StyleTypes = ["default", "dark-content", "light-content"];
  const [visibleStatusBar, sentvisibleStatusBar] = useState(false);
  const [styleStatusBar, setStyleStatusBar] = useState(StyleTypes[2]);
  // const [location, setLocation] = useState(null);
  // const [errorMsg, setErrorMsg] = useState(null);
  
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
      // let { status } = await Location.requestForegroundPermissionsAsync();
      // if (status !== 'granted') {
      //   setErrorMsg('Permission to access location was denied');
      //   return;
      // }

      // let location = await Location.getCurrentPositionAsync();
      // setLocation(location)

      await SplScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  // console.log(location)

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

