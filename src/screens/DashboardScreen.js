import React from 'react'
import { FlatList, Keyboard, SafeAreaView, Text, TouchableWithoutFeedback, View } from 'react-native'
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'
import ArrowIcon from '../assets/svg/ArrowIcon'
import DashboardSearch from '../assets/svg/DashboardSearch'
import DashboardRemedy from '../assets/svg/DashboardRemedy'
import DashboardDoctor from '../assets/svg/DashboardDoctor'


const data = [
  {
    id: '1',
    title: 'Find Disease',
    description: 'sick sense provides you maximum accuracy in disease prediction.',
    buttonTxt: 'Find',
    icon: <DashboardSearch/>
  },
  {
    id: '2',
    title: 'Get Remedy',
    description: 'Get instant solution of your sickness & start action.',
    buttonTxt: 'Get',
    icon: <DashboardRemedy />
  },
  {
    id: '3',
    title: 'Find Doctor',
    description: 'Find the specialist near to your locality & book appointment.',
    buttonTxt: 'Search',
    icon: <DashboardDoctor />
  },
]

const DashboardScreen = () => {

  const Item = ({item}) => (
    <View className='flex-1 justify-center py-5 px-3' style={{ width: responsiveScreenWidth(72), height: responsiveScreenHeight(24), borderRadius: responsiveScreenWidth(3), backgroundColor: '#003128'}}>
      <View className='flex-1 justify-start '>
        <Text style={{ fontFamily: 'SoDoSans-Black', fontSize: responsiveScreenFontSize(5.5), color: '#F5F5F5' }}>{item.title}</Text>
        <Text style={{ fontFamily: 'OpenSans-Regular', fontSize: responsiveScreenFontSize(2), color: '#F5F5F5' }}>{ item.description}</Text>
      </View>
      <View className='flex-row justify-between items-center pb-2' >
        <View className='flex-row items-center justify-around' style={{width: responsiveScreenWidth(32), height: responsiveScreenHeight(4.5), borderRadius: responsiveScreenWidth(2), backgroundColor: '#69AFA1'}}>
          <Text className='' style={{ fontFamily: 'SoDoSans-Bold', color: '#132A13' }}>{ item.buttonTxt }</Text>
          <ArrowIcon/>
        </View>
        <View className='pr-8'>
          {item.icon}
        </View>
      </View>
    </View>
  )

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss()}>
      <SafeAreaView className='flex-1 justify-center items-center ' style={{ "backgroundColor": "#f5f5f5" }}>
        
        <View className='h-[10%] w-full bg-yellow-500 flex justify-center px-4'>
          <View className=''>
            <View>
              <Text style={{ fontFamily: 'OpenSans-Regular', fontSize: responsiveScreenFontSize(2.5)}}>
                hello
              </Text>
              <Text style={{ fontFamily: 'SoDoSans-Bold', fontSize: responsiveScreenFontSize(3.5) }}>
                Chirantan
              </Text>
            </View>
          </View>
        </View>
        

        <View className='h-[30%] w-full px-4'>
          <View className='flex-1 justify-center items-start py-5'>
            {/* <SafeAreaView className='flex-1'> */}
              <FlatList
                data={data}
                renderItem={({ item }) => <Item item={item} />}
                keyExtractor={item => item.title}
                horizontal={true}
                // showsHorizontalScrollIndicator={true}
              />
            {/* </SafeAreaView> */}
          </View>
        </View>

        <View className='h-[30%] w-full bg-green-500'>

        </View>

        <View className='h-[30%] w-full bg-blue-500'>

        </View>

      </SafeAreaView>
      </TouchableWithoutFeedback>
  )
}

export default DashboardScreen