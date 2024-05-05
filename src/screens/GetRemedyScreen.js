import React, { useState } from 'react'
import { Keyboard, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'
import LeftArrow from '../assets/svg/LeftArrow'
import diseaseData from '../assets/data/diseasesData.json';

const GetRemedyScreen = () => {
  const [diseaseName, setDiseaseName] = useState('');
  const [remedies, setRemedies] = useState([]);

  const findRemedis = () => {
    const foundDisease = diseaseData.diseases.find(d => d.name.toLowerCase() === diseaseName.toLowerCase())
    if (foundDisease) {
      setRemedies(foundDisease.remedies);
    } else {
      setRemedies(['No remedies found for the specified disease.']);
    }
  }
  
  return (
    // <TouchableWithoutFeedback onPress={Keyboard.dismiss()}>
      <SafeAreaView className='flex-1 justify-center items-center' style={{ "backgroundColor": "#f5f5f5" }}>

        <View className='h-[10%] w-full flex justify-center px-4'>
          <View>
            <TouchableWithoutFeedback>
              <View className='flex justify-center items-center' style={{ height: responsiveScreenHeight(6.5), width: responsiveScreenWidth(15), backgroundColor: '#69AFA1', borderRadius: responsiveScreenWidth(2) }}>
                <LeftArrow />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>

        <View className='h-[15%] w-full px-4 '>
          <Text style={{ fontFamily: 'SoDoSans-Black', fontSize: responsiveScreenFontSize(5) }}>
            Get Remedy
          </Text>
          <Text style={{ fontFamily: 'OpenSans-Regular', fontSize: responsiveScreenFontSize(2.5) }}>
            We feel sorry for your disease. Follow the remedies and get well soon.
          </Text>
        </View>

        <View className='h-[20%] w-full px-4 gap-y-5'>
          <TextInput
            className='h-16 rounded-md pl-5 text-md'
            style={{ backgroundColor: '#ADD0CA', }}
            placeholder='Enter Disease'
            onChangeText={setDiseaseName}
            value={diseaseName}
          />
          <TouchableOpacity
            className='h-16 rounded-md flex justify-center items-center'
            style={{ backgroundColor: '#003128', }}
            onPress={findRemedis}
          >
            <Text className='text-3xl' style={{ color: '#E8FAF4', fontFamily: 'SoDoSans-Black'}}>GET HELP</Text>
          </TouchableOpacity>
        </View>

        {/* <View className='h-[40%] flex-1 w-full px-4 '> */}
        <ScrollView scrollEnabled={true} className='h-[45%] flex-1 w-full px-4'>
        <View className='gap-y-5 pt-5'>
            {remedies.map((remedy, index) => (
              <Text key={index} className='px-5 py-5 rounded-md' style={{ backgroundColor: 'rgba(79, 119, 45, 0.2)' }}>{remedy}</Text>
            ))}
            </View>
          </ScrollView>
        {/* </View> */}

        <View className='h-[10%] w-full px-4 '>
          
        </View>

      </SafeAreaView>
      // </TouchableWithoutFeedback>
  )
}

export default GetRemedyScreen