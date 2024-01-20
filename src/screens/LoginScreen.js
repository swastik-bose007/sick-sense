import React from 'react'
import { Keyboard, KeyboardAvoidingView, SafeAreaView, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import LoginScreenSvg from '../assets/svg/LoginScreenSvg'
import { textStyles } from '../styles/textStyles'
import MailIconSvg from '../assets/svg/MailIconSvg'
import { inputStyles } from '../styles/inputStyles'
import PasswordIconSvg from '../assets/svg/PasswordIconSvg'
import { buttonStyles } from '../styles/buttonStyles'

const LoginScreen = ({ navigation }) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView className='flex-1 justify-center items-center' style={{ "backgroundColor": "#f5f5f5" }}>
        {/* -----------------------------------image title part------------------------------------------------ */}

        <View className='h-[50%] w-full flex justify-center items-center '>
          <LoginScreenSvg />
          <Text className='text-5xl pt-10' style={[textStyles.welcomeTxt]}>LOGIN</Text>
          <Text className=' pt-2' style={{ fontFamily: "OpenSans-Light" }}>Sense your sickness with machine learning </Text>

        </View>


        {/* -----------------------------------input part------------------------------------------------ */}

        <View className='h-[30%] w-full flex justify-center items-center '>
          <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} enabled>

            <View className='flex-row justify-center items-center '>
              <View style={[inputStyles.input1]} className='justify-center px-14 '>
                <MailIconSvg style={[inputStyles.icon]} className='px-8'/>
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

            <TouchableOpacity onPress={() => navigation.navigate("SignupScreen")}>
              <View className='flex justify-center items-center pt-16'>
                <Text className='text-xl' style={{ fontFamily: "OpenSans-SemiBold", color: "#4F772D" }}>Create Account</Text>
              </View>
            </TouchableOpacity>

          </KeyboardAvoidingView>
        </View>


        <View className='h-[20%] w-full flex justify-center items-center '>
          

          <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
            <View style={[buttonStyles.loginBtn2]} className='flex justify-center items-center'>
              <Text style={[textStyles.loginTxt2]}>LOGIN</Text>
            </View>
          </TouchableOpacity>

        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default LoginScreen