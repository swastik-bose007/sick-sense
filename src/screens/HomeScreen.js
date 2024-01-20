import React from 'react'
import { Keyboard, SafeAreaView, Text, TouchableWithoutFeedback, View } from 'react-native'
import WelcomeSvg from '../assets/svg/WelcomeSvg'
import { textStyles } from '../styles/textStyles'

const HomeScreen = () => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView className='flex-1 justify-center items-center' style={{"backgroundColor": "#f5f5f5"}}>
        <View className='h-[50%] w-full flex justify-center items-center'>
          <WelcomeSvg />
          <Text className='text-5xl font-black pt-10' style={[textStyles.welcomeTxt]}>WELCOME</Text>
          <Text className='font-light pt-2' style={{ fontFamily: "SoDoSans-Black"}}>Sense your sickness with machine learning </Text>
        </View>
        <View className='h-[30%] w-full bg-green-700'>

        </View>
        <View className='h-[20%] w-full bg-blue-700'>

        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default HomeScreen