import React, { useState } from 'react'
import { View, Text, TouchableWithoutFeedback, Keyboard, SafeAreaView, TouchableOpacity, Alert } from 'react-native'
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'
import LeftArrow from '../assets/svg/LeftArrow'
import symptomsData from '../assets/data/symptoms.json'
import MultiSelect from 'react-native-multiple-select'
import diseasesData from '../assets/data/diseasesData.json'
import AsyncStorage from '@react-native-async-storage/async-storage'
import * as Clipboard from 'expo-clipboard'

const FindDiseaseScreen = () => {

    const [selectedItems, setSelectedItems] = useState([]);
    const [predictedDisease, setPredictedDisease] = useState('');
    const [copyFeedback, setCopyFeedback] = useState('Copy');

    const handleCheckDisease = async() => { 
        try {
            if (selectedItems.length < 3) {
                Alert.alert('Error', 'Please select between 3 and 6 symptoms.')
                return;
            }

            let matchedDisease = [];

            diseasesData.diseases.forEach(disease => {
                if (selectedItems.every(symptom => disease.symptoms.includes(symptomsData.symptoms.find(item => item.id === symptom).name))) {
                    matchedDisease.push(disease.name);
                }
            })

            if (matchedDisease.length === 0) {
                setPredictedDisease(['No matching disease found.']);
            } else if (matchedDisease.length > 1) {
                Alert.alert('Warning', 'For the given symptoms, you may have: \n\n' + matchedDisease.join('/ ') + '\n\nPlease provide more symptoms for better result.');
            } else {
                const diseaseName = matchedDisease[0];
                setPredictedDisease(diseaseName);
                await AsyncStorage.setItem("disease", JSON.stringify(diseaseName));
            }
        } catch (error) {
            console.log(error)
        }
    }

    const onSelectedItemsChange = selectedItems => {
        setSelectedItems(selectedItems);
    };

    const copyToClipboard = async(value) => { 
        await Clipboard.setStringAsync(value);
        setCopyFeedback("Copied!");
        setTimeout(() => {
            setCopyFeedback("Copy");
        }, 2000)
    }

    const ListItem = React.memo(({ item }) => (
        <View style={{ marginRight: 10, marginBottom: 10 }}>
            <Text style={{ backgroundColor: "#e1e1e1", padding: 8, borderRadius: 15 }}>{item.name}</Text>
        </View>
    ), (prevProps, nextProps) => {
        return prevProps.item.id === nextProps.item.id;
    });

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss()}>
            <SafeAreaView className='flex-1 justify-center items-center ' style={{ "backgroundColor": "#f5f5f5" }}>

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
                        Find Disease
                    </Text>
                    <Text style={{ fontFamily: 'OpenSans-Regular', fontSize: responsiveScreenFontSize(2.5) }}>
                        Search relatable symptoms you are facing and find what actually happened to your health.
                    </Text>
                </View>

                <View className='h-[35%] w-full px-4 '>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                        {selectedItems.map(function (id) {
                            return (
                                <ListItem key={id} item={symptomsData.symptoms.find(item => item.id === id)} />
                            );
                        })}
                    </View>

                    <View style={{ height: '5%' }}>
                        <MultiSelect
                            hideTags
                            items={symptomsData.symptoms}
                            uniqueKey='id'
                            onSelectedItemsChange={onSelectedItemsChange}
                            selectedItems={selectedItems}
                            selectText='Pick your symptoms'
                            searchInputPlaceholderText='Select your symptoms'
                            onChangeInput={(text) => console.log(text)}
                            tagRemoveIconColor="#CCC"
                            tagBorderColor="#000"
                            tagTextColor="#CCC"
                            selectedItemTextColor="#000"
                            selectedItemIconColor="#000"
                            itemTextColor="#000"
                            displayKey="name"
                            searchInputStyle={{ color: '#000' }}
                        // submitButtonColor="#000"
                        // submitButtonText="Submit"
                        // hideSubmitButton={true}
                        />
                    </View>

                </View>




                <View className='h-[35%] w-full px-4 pt-5 flex justify-center items-center'>
                    <TouchableOpacity className='w-full h-14' onPress={handleCheckDisease} style={{  backgroundColor: '#69AFA1', justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                        <Text className='text-xl' style={{ color: '#fff' }}>Predict Disease</Text>
                    </TouchableOpacity>

                    <View className='flex-row pt-5'>
                        {/* <Text>Predicted Disease:</Text> */}
                        <Text className='text-center text-4xl font-bold'>{predictedDisease}</Text>
                    </View>

                    {
                            predictedDisease.length > 0 && (
                                <TouchableOpacity onPress={() => copyToClipboard(predictedDisease)}>
                                    <Text>{copyFeedback}</Text>
                                </TouchableOpacity>
                            )
                        }
                </View>

            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

export default FindDiseaseScreen