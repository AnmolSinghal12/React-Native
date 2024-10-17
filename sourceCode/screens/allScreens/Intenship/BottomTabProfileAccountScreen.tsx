import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, StatusBar, SafeAreaView } from 'react-native';
import HeaderComp from '../../../components/HeaderComp';


const BottomTabProfileAccountScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
            <HeaderComp
                img={require('../../../assets/Images/arrowback.png')}
                txt={''}
            />
            <ScrollView style={styles.container}>
                {/* Profile Info Section */}
                <View style={styles.profileSection}>
                    <Image
                        source={require('../../../assets/Images/profilePlaceHolder.png')} // Replace with actual image URL
                        style={styles.profileImage}
                    />
                    <TouchableOpacity >
                        <Image
                            source={require('../../../assets/Images/profilepan.png')} // Replace with actual image URL
                            style={styles.profilepan}
                        />
                    </TouchableOpacity>
                    <Text style={styles.profileName}>Rishabh Singh</Text>
                    <Text style={styles.profileNumber}>+9187373 XXXX</Text>
                </View>

                {/* Account Section */}
                <View style={styles.accountView}>
                    <Text style={styles.sectionTitle}>Account</Text>
                </View>

                {/* List Items */}
                <View style={styles.listItem}>
                    <Image resizeMode='contain' style={styles.profileImages} source={require('../../../assets/Images/profileEmail.png')} />
                    <Text style={styles.listItemText}>Email Verification</Text>
                    <TouchableOpacity>
                        <Image resizeMode='contain' style={styles.profileIcon} source={require('../../../assets/Images/profileVector.png')} />
                    </TouchableOpacity>
                </View>

                <View style={styles.listItem}>
                    <Image resizeMode='contain' style={styles.profileImages} source={require('../../../assets/Images/profilePhon.png')} />
                    <Text style={styles.listItemText}>9877890929</Text>
                    <TouchableOpacity>
                        <Image resizeMode='contain' style={styles.profileIcon} source={require('../../../assets/Images/profileVector.png')} />
                    </TouchableOpacity>
                </View>

                <View style={styles.listItem}>
                    <Image resizeMode='contain' style={styles.profileImages} source={require('../../../assets/Images/profilelocation.png')} />
                    <Text style={styles.listItemText}>Chandigarh, Mohali</Text>
                    <TouchableOpacity>
                        <Image resizeMode='contain' style={styles.profileIcon} source={require('../../../assets/Images/profileVector.png')} />
                    </TouchableOpacity>
                </View>

                <View style={styles.listItem}>
                    <Image resizeMode='contain' style={styles.profileImages} source={require('../../../assets/Images/profileOperator.png')} />
                    <Text style={styles.listItemText}>Contact Us</Text>
                    <TouchableOpacity>
                        <Image resizeMode='contain' style={styles.profileIcon} source={require('../../../assets/Images/profileVector.png')} />
                    </TouchableOpacity>
                </View>

                <View style={styles.listItem}>
                    <Image resizeMode='contain' style={styles.profileImages} source={require('../../../assets/Images/pfrofileSettings.png')} />
                    <Text style={styles.listItemText}>Settings</Text>
                    <TouchableOpacity>
                        <Image resizeMode='contain' style={styles.profileIcon} source={require('../../../assets/Images/profileVector.png')} />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F8F8',
    },
    backButton: {
        margin: 15,
    },
    profileSection: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
        position: 'relative'
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },

    profilepan: {
        height: 20,
        width: 20,
        position: 'absolute',
        bottom: 20,
        right: '-8%',
        backgroundColor: '#518EF8',
        borderRadius: 15,
        padding: 5,
    },
    profileName: {
        color: '#000000',
        fontSize: 20,
        fontFamily: 'Montserrat-SemiBold',
        marginTop: 10,
    },
    profileNumber: {
        fontSize: 14,
        color: '#777',
        fontFamily: 'Montserrat-Regular',
        marginTop: 5,
    },
    sectionTitle: {
        marginLeft: 15,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#777',
        justifyContent: 'center',

    },
    profileImages: {
        height: 30,
        width: 30,
    },
    profileIcon: {
        height: 10,
        width: 10,
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
    },
    listItemText: {
        flex: 1,
        marginLeft: 15,
        fontSize: 16,
        fontFamily: 'Poppins-SemiBold',
        color: '#1F1F1F'
    },
    accountView: {
        backgroundColor: '#D9D9D978',
        alignContent: 'center',

    }
});

export default BottomTabProfileAccountScreen;
