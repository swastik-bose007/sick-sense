import React, { useEffect } from 'react'
import { Keyboard, SafeAreaView, Text, TouchableWithoutFeedback, View } from 'react-native'
import SplashScreenSvg from '../assets/svg/SplashScreenSvg'

const SplashScreen = ({ navigation }) => {

    useEffect(() => {
        splashNav()
    }, [])
    const splashNav = () => {
        const intervalNav = setInterval(() => {
            navigation.replace('HomeScreen')
            clearInterval(intervalNav)
        }, 2000);
    };

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <SafeAreaView className='flex-1 justify-center items-center bg-green-950' style={{ "backgroundColor": "#003128" }}>
                <SplashScreenSvg />
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

export default SplashScreen