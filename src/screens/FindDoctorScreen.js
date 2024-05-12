import { useIsFocused } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { SafeAreaView, Text, TextInput, TouchableWithoutFeedback, View, TouchableOpacity, FlatList } from 'react-native'
import * as Location from 'expo-location'
import LeftArrow from '../assets/svg/LeftArrow';
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'
import doctorData from '../assets/data/doctorData.json'
import Refresh from '../assets/svg/Refresh';

const FindDoctorScreen = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [doctors, setDoctors] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      (
        async () => {
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg("Permission denied");
            return;
          }
          let location = await Location.getCurrentPositionAsync({});
          setLocation(location);
        })()
    }
  }, [isFocused])

  useEffect(() => {
    setDoctors(doctorData.doctors);
    setFilteredDoctors(doctorData.doctors);
  }, [])
  
  const filterDoctors = () => {
    return doctors.filter(doctor =>
      doctor.specialization &&
      doctor.specialization.toLowerCase().includes(searchQuery.toLowerCase()))
  }

  const handleSearchQueryChange = (query) => {
    setSearchQuery(query);
  };

  const handleFindPress = () => {
    if (searchQuery.trim() !== '') {
      setFilteredDoctors(filterDoctors());
    } else {
      setFilteredDoctors(doctors);
    }
  };

  const handleRefresh = () => { 
    setFilteredDoctors(doctorData.doctors)
  }

  const renderDoctorItem = ({ item }) => (
    <View className='pt-3' key={item.contact}>
      <View className='py-3 pl-3 rounded-md'  style={{ backgroundColor: 'rgba(79, 119, 45, 0.2)' }}>
        <Text className='text-xl' style={{ fontFamily: 'OpenSans-Bold' }}>{item.name}</Text>
        <View>
          <View className='flex-row pt-2'>
            <Text style={{ fontFamily: 'OpenSans-SemiBold' }}>Designation: </Text>
            <Text>{item.designation}</Text>
          </View>
          <View className='flex-row pt-2'>
            <Text style={{ fontFamily: 'OpenSans-SemiBold' }}>Specialization: </Text>
            <Text>{item.specialization}</Text>
          </View>
          <View>
            <View className='flex-row pt-2'>
              <Text style={{ fontFamily: 'OpenSans-SemiBold' }}>Location: </Text>
              <Text>{item.location}</Text>
            </View>
            <View className='flex-row pt-2'>
              <Text style={{ fontFamily: 'OpenSans-SemiBold' }}>Contact: </Text>
              <Text>{item.contact}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );

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
          Find Doctor
        </Text>
        <Text style={{ fontFamily: 'OpenSans-Regular', fontSize: responsiveScreenFontSize(2.5) }}>
          We suggest you to consult specialist for your disease. Find the nearest one.
        </Text>
      </View>

      <View className='h-[20%] w-full px-4 gap-y-5'>
        <TextInput
          className='h-16 rounded-md pl-5 text-md'
          style={{ backgroundColor: '#ADD0CA', }}
          placeholder='Enter Disease'
          value={searchQuery}
          onChangeText={handleSearchQueryChange}
        />
        <TouchableOpacity
          className='h-16 rounded-md flex justify-center items-center'
          style={{ backgroundColor: '#003128', }}
          onPress={handleFindPress}
        >
          <Text className='text-3xl' style={{ color: '#E8FAF4', fontFamily: 'SoDoSans-Black' }}>FIND</Text>
        </TouchableOpacity>
      </View>

      <View className='h-[40%] w-full px-4 gap-y-5'>
        <View className='flex-row justify-between items-center pt-4'>
          <Text className='text-2xl' style={{ fontFamily: 'SoDoSans-Black' }}>Nearest Doctors</Text>
          <TouchableOpacity onPress={handleRefresh}>
            <Refresh />
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            data={filteredDoctors}
            renderItem={renderDoctorItem}
            keyExtractor={item => item.id}
          />
        </View>
      </View>

      <View className='h-[15%] w-full px-4'>

      </View>

      

    </SafeAreaView>
    // </TouchableWithoutFeedback>
  )
}

export default FindDoctorScreen