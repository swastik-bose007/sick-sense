import React from 'react'
import { Keyboard, SafeAreaView, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import LeftArrow from '../assets/svg/LeftArrow'
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'
import { textStyles } from '../styles/textStyles'
import { inputStyles } from '../styles/inputStyles'
import MailIconSvg from '../assets/svg/MailIconSvg'
import { buttonStyles } from '../styles/buttonStyles'
import UserSvg from '../assets/svg/UserSvg'
import PasswordIconSvg from '../assets/svg/PasswordIconSvg'

const SignupScreen = ({ navigation }) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView className='flex-1 justify-center items-center' style={{ backgroundColor: "#003128" }}>
        <View className='h-[10%] w-full justify-center px-6' style={{ backgroundColor: "#003128"}}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              height: responsiveScreenHeight(6),
              width: responsiveScreenHeight(6),
              backgroundColor: '#ADD0CA',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: responsiveScreenWidth(2)
            }}
          >
            <LeftArrow/>
          </TouchableOpacity>
        </View>
        <View className='h-[15%] w-full flex justify-center items-center ' style={{ backgroundColor: "#003128" }}>
          <Text className='text-5xl pt-4' style={[textStyles.signupTxt2]}>
            SIGN UP
          </Text>
          <Text style={{ fontFamily: "OpenSans-Regular", fontSize: responsiveScreenFontSize(1.7), color: "#ADD0CA"}}>
            Sense your sickness with machine learning
          </Text>
        </View>
        <View className='h-[75%] w-full flex  items-center' style={{ backgroundColor: "#F5F5F5", borderTopLeftRadius: responsiveScreenWidth(10), borderTopRightRadius: responsiveScreenWidth(10) }}>

          <View className='flex-row justify-center items-center pt-20'>
            <View style={[inputStyles.input1]} className='justify-center px-14 '>
              <UserSvg style={[inputStyles.icon]} className='px-8' />
              <TextInput
                placeholder='enter your name'
                style={[inputStyles.placeholder]}

              />
            </View>
          </View>

          <View className='flex-row justify-center items-center pt-12'>
            <View style={[inputStyles.input1]} className='justify-center px-14 '>
              <MailIconSvg style={[inputStyles.icon]} className='px-8' />
              <TextInput
                placeholder='enter your mail id'
                style={[inputStyles.placeholder]}

              />
            </View>
          </View>
          
          <View className='flex-row justify-center items-center pt-12'>
            <View style={[inputStyles.input1]} className='justify-center px-14 '>
              <PasswordIconSvg style={[inputStyles.icon]} className='px-8' />
              <TextInput
                placeholder='enter your password'
                style={[inputStyles.placeholder]}
                secureTextEntry={true}
              />
            </View>
          </View>

          <View className='flex-row justify-center items-center pt-12'>
            <View style={[inputStyles.input1]} className='justify-center px-14 '>
              <PasswordIconSvg style={[inputStyles.icon]} className='px-8' />
              <TextInput
                placeholder='confirm your password'
                style={[inputStyles.placeholder]}
                secureTextEntry={true}
              />
            </View>
          </View>

          <TouchableOpacity className='pt-20' onPress={() => navigation.navigate('LoginScreen')}>
            <View style={[buttonStyles.loginBtn2]} className='flex justify-center items-center'>
              <Text style={[textStyles.loginTxt2]}>LOGIN</Text>
            </View>
          </TouchableOpacity>

        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default SignupScreen