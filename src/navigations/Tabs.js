import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { responsiveScreenHeight, responsiveScreenWidth } from "react-native-responsive-dimensions";
import DashboardScreen from "../screens/DashboardScreen";
import { Text, View } from "react-native";
import HomeIcon from "../assets/svg/HomeIcon";
import FindDiseaseScreen from "../screens/FindDiseaseScreen";
import DiseaseIcon from "../assets/svg/DiseaseIcon";
import GetRemedyScreen from "../screens/GetRemedyScreen";
import RemedyIcon from "../assets/svg/RemedeyIcon";
import FindDoctorScreen from "../screens/FindDoctorScreen";
import DoctorIcon from "../assets/svg/DoctorIcon";
import ProfileScreen from "../screens/ProfileScreen";
import ProfileIcon from "../assets/svg/ProfileIcon";

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    height: responsiveScreenHeight(8),
                    width: responsiveScreenWidth(90),
                    backgroundColor: '#1F2022',
                    position: "absolute",
                    bottom: responsiveScreenHeight(1),
                    borderRadius: responsiveScreenWidth(3),
                    marginHorizontal: responsiveScreenWidth(5),
                    // marginRight: responsiveScreenWidth(2),
                },
            }}
        >
            <Tab.Screen
                name="Home"
                component={DashboardScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            // color: '#1e1e1e',
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            {
                                focused ? (
                                    <View className='flex-col justify-center items-center'>
                                        <HomeIcon />
                                        <Text style={{ fontFamily: 'OpenSans-Regular', color:'#ADD0CA'}}>Home</Text>
                                    </View>
                                ) : (
                                        <View className='flex-col justify-center items-center'>
                                            <HomeIcon />
                                            <Text style={{ fontFamily: 'OpenSans-Regular', color: '#ADD0CA' }}>Home</Text>
                                        </View>
                                )
                            }
                        </View>
                    )
                }}
            />
            <Tab.Screen
                name="DiseaseScreen"
                component={FindDiseaseScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            // color: '#1e1e1e',
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            {
                                focused ? (
                                    <View className='flex-col justify-center items-center'>
                                        <DiseaseIcon />
                                        <Text style={{ fontFamily: 'OpenSans-Regular', color: '#ADD0CA' }}>Disease</Text>
                                    </View>
                                ) : (
                                        <View className='flex-col justify-center items-center'>
                                            <DiseaseIcon />
                                            <Text style={{ fontFamily: 'OpenSans-Regular', color: '#ADD0CA' }}>Disease</Text>
                                        </View>
                                )
                            }
                        </View>
                    )
                }}
            />
            <Tab.Screen
                name="RemedyScreen"
                component={GetRemedyScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            // color: '#1e1e1e',
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            {
                                focused ? (
                                    <View className='flex-col justify-center items-center'>
                                        <RemedyIcon />
                                        <Text style={{ fontFamily: 'OpenSans-Regular', color: '#ADD0CA' }}>Remedy</Text>
                                    </View>
                                ) : (
                                        <View className='flex-col justify-center items-center'>
                                            <RemedyIcon />
                                            <Text style={{ fontFamily: 'OpenSans-Regular', color: '#ADD0CA' }}>Remedy</Text>
                                        </View>
                                )
                            }
                        </View>
                    )
                }}
            />

            <Tab.Screen
                name="DoctorScreen"
                component={FindDoctorScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            {
                                focused ? (
                                    <View className='flex-col justify-center items-center'>
                                        <DoctorIcon />
                                        <Text style={{ fontFamily: 'OpenSans-Regular', color: '#ADD0CA' }}>Doctor</Text>
                                    </View>
                                ) : (
                                        <View className='flex-col justify-center items-center'>
                                            <DoctorIcon />
                                            <Text style={{ fontFamily: 'OpenSans-Regular', color: '#ADD0CA' }}>Doctor</Text>
                                        </View>
                                )
                            }
                        </View>
                    )
                }}
            />
            <Tab.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            // color: '#1e1e1e',
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            {
                                focused ? (
                                    <View className='flex-col justify-center items-center'>
                                        <ProfileIcon />
                                        <Text style={{ fontFamily: 'OpenSans-Regular', color: '#ADD0CA' }}>Profile</Text>
                                    </View>
                                ) : (
                                        <View className='flex-col justify-center items-center'>
                                            <ProfileIcon />
                                            <Text style={{ fontFamily: 'OpenSans-Regular', color: '#ADD0CA' }}>Profile</Text>
                                        </View>
                                )
                            }
                        </View>
                    )
                }}
            />

        </Tab.Navigator>
    )
}

export default Tabs;