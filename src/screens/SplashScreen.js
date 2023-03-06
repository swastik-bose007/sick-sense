// --------------------------------------------------------------------
// SYSTEM COMPONENTS
// --------------------------------------------------------------------
import {View, TouchableWithoutFeedback, Keyboard} from 'react-native';
import React, {useState} from 'react';
import {StatusBar, SafeAreaView} from 'react-native';

// --------------------------------------------------------------------
// STYLES
// --------------------------------------------------------------------


// --------------------------------------------------------------------
// IMAGES
// --------------------------------------------------------------------
import { globalStyles } from '../globalStyles/commonStyles';


const SplashScreen = () => {
  console.log(('nnnn', navigation));
    useEffect(() => {
      splashNav();
    }, []);
  
    const splashNav = () => {
      const intervalNav = setInterval(() => {
        navigation.replace('Login');
        clearInterval(intervalNav);
      }, 3000);
    };
  return (
    <View>
      <StatusBar
        barStyle={'light-content'}
        hidden={false}
      />
      <View style={[ globalStyles.flexCenter, globalStyles.bgsetting ]}>
        <View style={[ globalStyles.flexCenter ]}>
            <Image source={images.logo} style={[ globalStyles.logoimage ]}></Image>
        </View>
      </View>
    </View>
  )
}

export default SplashScreen