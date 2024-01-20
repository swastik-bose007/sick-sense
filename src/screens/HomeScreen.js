import React from 'react'
import { Keyboard, SafeAreaView, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import WelcomeSvg from '../assets/svg/WelcomeSvg'
import { textStyles } from '../styles/textStyles'
import { buttonStyles } from '../styles/buttonStyles'
import { responsiveScreenFontSize } from 'react-native-responsive-dimensions'
import GoogleIcon from '../assets/svg/GoogleIcon'
import RightArrow from '../assets/svg/RightArrow'

const HomeScreen = ({ navigation }) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView className='flex-1 justify-center items-center' style={{"backgroundColor": "#f5f5f5"}}>
        <View className='h-[50%] w-full flex justify-center items-center'>
          <WelcomeSvg />
          <Text className='text-5xl pt-10' style={[textStyles.welcomeTxt]}>WELCOME</Text>
          <Text className=' pt-2' style={{ fontFamily: "OpenSans-Light"}}>Sense your sickness with machine learning </Text>
        </View>
        <View className='h-[30%] w-full flex justify-center items-center '>
          <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
            <View style={[buttonStyles.loginBtn]} className='flex justify-center items-center'>
              <Text style={[textStyles.loginTxt]}>LOGIN</Text>
            </View>
          </TouchableOpacity>
          <View className='py-3'>
            <Text style={{fontFamily: "OpenSans-ExtraBold", fontSize: responsiveScreenFontSize(2.5)}}>OR</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}>
            <View style={[buttonStyles.signupBtn]} className='flex justify-center items-center'>
              <Text style={[textStyles.signupTxt]}>SIGN UP</Text>
            </View>
          </TouchableOpacity>
          <View className='pt-3'>
            <Text style={{fontFamily: "OpenSans-Light", fontSize: responsiveScreenFontSize(1.7)}}>
              Find sickness and consult the professionals
            </Text>
          </View>
        </View>
        <View className='h-[20%] w-full flex justify-center items-center'>
          <TouchableOpacity>  
            <View style={[buttonStyles.googleBtn]} className='flex justify-center'>
              <View className='flex-row justify-evenly items-center gap-4' >
                <GoogleIcon />
              <Text style={{ fontFamily: "SoDoSans-SemiBold", color: "#E8FAF4", fontSize: responsiveScreenFontSize(2.4) }}>Continue with Google</Text>
                <RightArrow />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default HomeScreen