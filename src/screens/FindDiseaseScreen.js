import React, { useCallback, useEffect, useState } from 'react'
import { View, Text, TouchableWithoutFeedback, Keyboard, SafeAreaView, TouchableOpacity, Alert, FlatList, ScrollView, TextInput, VirtualizedList } from 'react-native'
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'
import LeftArrow from '../assets/svg/LeftArrow'
import symptomsData from '../assets/data/symptoms.json'
import diseasesData from '../assets/data/diseasesData.json'
import AsyncStorage from '@react-native-async-storage/async-storage'
import * as Clipboard from 'expo-clipboard'
import _, { debounce, includes } from 'lodash'
import Refresh from '../assets/svg/Refresh'
import Close from '../assets/svg/Close'

const FindDiseaseScreen = () => {

    const [selectedItems, setSelectedItems] = useState([]);
    const [predictedDisease, setPredictedDisease] = useState('');
    const [copyFeedback, setCopyFeedback] = useState('Copy');
    const [searchKeyword, setSearchKeyword] = useState('');
    const [filteredSymptoms, setFilteredSymptoms] = useState([]);
    const [loading, setLoading] = useState(false);
    // useEffect(() => {
    //     const loadSymptomsData = async () => {
    //         setFilteredSymptoms(symptomsData.symptoms);
    //     };
    //     loadSymptomsData();
    // }, []);

    // useEffect(() => {
    //     const filtered = symptomsData.symptoms.filter(symptom =>
    //         symptom.name.toLowerCase().includes(searchKeyword.toLowerCase())
    //     );
    //     setFilteredSymptoms(filtered);
    //     console.log("setFilteredSymptoms:", filtered);
    // }, [searchKeyword])

    // const handleSearch = (text) => {
    //     setSearchKeyword(text);
    // }

    // const debouncedHandleSearch = useCallback(debounce(handleSearch, 300), []);

    useEffect(() => {
        setFilteredSymptoms(symptomsData.symptoms);
    }, []);

    const handleSearch = (text) => {
        setSearchKeyword(text);
        const filtered = symptomsData.symptoms.filter(symptom =>
            symptom.name.toLowerCase().includes(text.toLowerCase())
        );
        setFilteredSymptoms(filtered);
    }

    const handleRefresh = () => {
        setFilteredSymptoms(symptomsData.symptoms)
        setPredictedDisease("")
    }

    const handleCheckDisease = async (selectedItems) => {
        try {
            setLoading(true);
            if (selectedItems.length < 3) {
                Alert.alert('Error', 'Please select between 3 and 6 symptoms.')
                return;
            }
            // console.log("Selected Items:", selectedItems);

            let matchedDisease = [];

            diseasesData.diseases.forEach(disease => {
                if (selectedItems.every(symptom => {
                    const symptomObject = symptomsData.symptoms.find(item => item.id === symptom.id);
                    return symptomObject && disease.symptoms.includes(symptomObject.name);
                })) {
                    matchedDisease.push(disease.name);
                }
            })

            console.log("Matched Diseases:", matchedDisease);

            if (matchedDisease.length === 0) {
                setPredictedDisease(['No matching disease found.']);
            } else if (matchedDisease.length > 1) {
                Alert.alert('Warning', 'For the given symptoms, you may have: \n\n' + matchedDisease.join('/ ') + '\n\nPlease provide more symptoms for better result.');
            } else {
                const diseaseName = matchedDisease[0];
                setPredictedDisease(diseaseName);
                await AsyncStorage.setItem("disease", JSON.stringify(diseaseName));
            }
            setTimeout(() => {
                setLoading(false); // Stop loading after 3 seconds
            }, 4000)
        } catch (error) {
            console.log("check: ", error)
        }
    }


    const copyToClipboard = async (value) => {
        await Clipboard.setStringAsync(value);
        setCopyFeedback("Copied!");
        setTimeout(() => {
            setCopyFeedback("Copy");
        }, 2000)
    }

    const toggleItemSelection = (itemId, itemName) => {
        const index = selectedItems.findIndex(item => item.name === itemName);
        if (index === -1) {
            setSelectedItems([...selectedItems, { id: itemId, name: itemName }]);
        } else {
            setSelectedItems(selectedItems.filter(item => item.name !== itemName));
        }
    }

    const removeSelectedItem = (itemName) => {
        setSelectedItems(selectedItems.filter(item => item.name !== itemName));
    }

    useEffect(() => {
        console.log("selectedItems: ", selectedItems)
    },[selectedItems])

    const renderItem = ({ item }) => {
        const isSelected = selectedItems.some(selectedItem => selectedItem.id === item.id);
        return (
            <TouchableOpacity onPress={() => toggleItemSelection(item.id, item.name)}>
                <View className='flex-1 pt-2'>
                    <View className='flex-row justify-between items-center px-5 py-2 border-b-2'>
                        <Text style={{ color: '#000' }}>{item.name}</Text>
                        {isSelected ?
                            <View className='h-6 w-6 rounded-full flex justify-center items-center' style={{ backgroundColor: '#003128'}}>
                                <Text className='text-lg -mt-1 font-bold' style={{ color:'#ADD0CA'}}> - </Text>
                            </View>
                            :
                            <View className='h-6 w-6 rounded-full flex justify-center items-center' style={{ backgroundColor: '#003128' }}>
                                <Text className='text-lg -mt-1 font-bold' style={{ color: '#ADD0CA' }}> + </Text>
                            </View>
                        }
                    </View>
                </View>
            </TouchableOpacity>
        )
    }


    return (
        // <TouchableWithoutFeedback onPress={Keyboard.dismiss()}>
        <SafeAreaView className='flex-1 justify-center items-center ' style={{ "backgroundColor": "#f5f5f5" }}>

            <View className='h-[8%] w-full flex justify-center px-4'>
                <View>
                    <TouchableWithoutFeedback>
                        <View className='flex justify-center items-center' style={{ height: responsiveScreenHeight(6.5), width: responsiveScreenWidth(15), backgroundColor: '#69AFA1', borderRadius: responsiveScreenWidth(2) }}>
                            <LeftArrow />
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </View>

            <View className='h-[20%] w-full px-4 '>
                <Text style={{ fontFamily: 'SoDoSans-Black', fontSize: responsiveScreenFontSize(5) }}>
                    Find Disease
                </Text>
                <Text style={{ fontFamily: 'OpenSans-Regular', fontSize: responsiveScreenFontSize(2.5) }}>
                    Search relatable symptoms you are facing and find what actually happened to your health.
                </Text>
                <View className='flex-row pt-5 gap-x-6'>
                    <Text className='' style={{ fontFamily: 'SoDoSans-Black', fontSize: responsiveScreenFontSize(3.5) }}>
                        Select Symptoms
                    </Text>
                    <TouchableOpacity className='pt-2' onPress={handleRefresh}>
                        <Refresh />
                    </TouchableOpacity>
                </View>
            </View>

            <View className='h-[40%] w-full px-4'>
                <View>
                    <ScrollView horizontal className='py-3'>
                        {selectedItems.map((item, index) => (
                            <View className='pl-4'>
                                <View key={index} className='flex-row justify-center items-center py-2 px-4 rounded-3xl gap-x-2' style={{ backgroundColor: '#003128' }}>
                                    <Text style={{ color: '#fff' }}>{item.name}</Text>
                                    <TouchableOpacity className=' ' onPress={() => removeSelectedItem(item.name)}>
                                        <Close/>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        ))}
                    </ScrollView>
                    <View className='pt-4'>
                        <TextInput
                            className='rounded-md h-14 pl-4'
                            style={{ backgroundColor: '#ADD0CA', borderRadius: 10 }}
                            placeholder='Search Symptoms'
                            onChangeText={handleSearch}
                        />
                    </View>
                    <View className='pt-5 h-40'>
                        <VirtualizedList
                            data={filteredSymptoms}
                            renderItem={renderItem}
                            keyExtractor={item => item.id.toString()}
                            getItemCount={() => filteredSymptoms.length}
                            getItem={(data, index) => data[index]}
                            initialNumToRender={193}
                            maxToRenderPerBatch={193}
                        />
                    </View>
                </View>
            </View>




            <View className='h-[32%] w-full px-4 flex justify-start items-center'>
                <TouchableOpacity className='w-full h-14' onPress={() => handleCheckDisease(selectedItems)} style={{ backgroundColor: '#69AFA1', justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                    <Text className='text-xl' style={{ color: '#fff' }}>FIND</Text>
                </TouchableOpacity>

                {loading == true ? (
                    <View className='flex-row pt-5'>
                        {/* <Text>Predicted Disease:</Text> */}
                        <Text className='text-center text-4xl font-bold'>Analyzing...</Text>
                    </View>
                ) : (
                        <View className='flex-row pt-5'>
                            {/* <Text>Predicted Disease:</Text> */}
                            <Text className='text-center text-4xl font-bold'>{predictedDisease}</Text>
                        </View>
                )}

                {
                    (predictedDisease.length > 0 && loading == false) && (
                        <TouchableOpacity onPress={() => copyToClipboard(predictedDisease)}>
                            <Text>{copyFeedback}</Text>
                        </TouchableOpacity>
                    )
                }
            </View>

        </SafeAreaView>
        // </TouchableWithoutFeedback>
    )
}

export default FindDiseaseScreen