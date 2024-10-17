import { StyleSheet, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import InternHome from '../../allScreens/Intenship/InternHome'
import BottomTabOurInternshipProgram from '../../allScreens/Intenship/BottomTabOurInternshipProgram'
import BottomTabEnrolledProgramScreen from '../../allScreens/Intenship/BottomTabEnrolledProgramScreen'
import BottomTabProfileAccountScreen from '../../allScreens/Intenship/BottomTabProfileAccountScreen'

const Tab = createBottomTabNavigator();

const InternTabNavigation = () => {
    return (
        <Tab.Navigator
            initialRouteName='InternHome'
            screenOptions={{
                tabBarStyle: {
                    height: 70,
                },
                tabBarShowLabel: false,
            }}
        >
            <Tab.Screen
                name='InternHome'
                component={InternHome}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <Image
                            style={{ height: 23, width: 23, tintColor: color }}
                            source={require('../../../assets/Images/Home.png')}
                            resizeMode='contain'
                        />
                    ),
                }}
            />
            <Tab.Screen
                name='BottomTabOurInternshipProgram'
                component={BottomTabOurInternshipProgram}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <Image
                            style={{ height: 15, width: 18, tintColor: color }}
                            source={require('../../../assets/Images/jobs.png')}
                            resizeMode='contain'
                        />
                    ),
                }}
            />
            <Tab.Screen
                name='BottomTabEnrolledProgramScreen'
                component={BottomTabEnrolledProgramScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <Image
                            style={{ height: 17, width: 13, tintColor: color }}
                            source={require('../../../assets/Images/Group2.png')}
                            resizeMode='contain'
                        />
                    ),
                }}
            />
            <Tab.Screen
                name='BottomTabProfileAccountScreen'
                component={BottomTabProfileAccountScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <Image
                            style={{ height: 24, width: 16, tintColor: color }}
                            source={require('../../../assets/Images/profile.png')}
                            resizeMode='contain'
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default InternTabNavigation;

const styles = StyleSheet.create({});
