import { useIsFocused } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import * as Location from 'expo-location'

const FindDoctorScreen = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
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

  return (
    <View>
      <Text>FindDoctorScreen</Text>
    </View>
  )
}

export default FindDoctorScreen