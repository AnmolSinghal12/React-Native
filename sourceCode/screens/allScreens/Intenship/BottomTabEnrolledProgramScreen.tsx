import React from 'react';
import { View, Text, StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import HeaderComp from '../../../components/HeaderComp';

const BottomTabEnrolledProgramScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
            <HeaderComp
                img={require('../../../assets/Images/arrowback.png')}
                txt={'Enrolled Program'}
            />
            <View style={styles.card}>
                {/* Current Plan Section */}
                <View style={styles.planRow}>
                    <View>
                        <Text style={styles.titleText}>Current plan</Text>
                        <Text style={styles.subText}>Enrolled on 26 May 2024</Text>
                    </View>
                    <View>
                        <Text style={styles.priceText}>1999/-</Text>
                        <Text style={styles.subText}>for 3 years</Text>
                    </View>
                </View>

                {/* Counselling Section */}
                <View style={styles.counsellingRow}>
                    <Text style={styles.titleText}>Counsellings</Text>
                    <Text style={styles.subText}>You have done 4 counsellings</Text>
                </View>

                {/* Mentor Section */}
                <View style={styles.mentorRow}>
                    <Text style={styles.titleText}>Current Mentor</Text>
                    <Text style={styles.subText}>Ashish Gautam</Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#F6F6F6',
        borderRadius: 10,
        padding: 20,
        margin: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5, // Shadow for Android
    },
    planRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    counsellingRow: {
        marginBottom: 20,
    },
    mentorRow: {
        marginBottom: 10,
    },
    titleText: {
        fontSize: 16,
        fontFamily: 'Montserrat-SemiBold',
        color: '#333',
    },
    subText: {
        fontSize: 14,
        fontFamily: 'Montserrat-Regular',
        color: '#888',
    },
    priceText: {
        fontSize: 18,
        fontFamily: 'Montserrat-SemiBold',
        color: '#333',
        textAlign: 'right',
    },
});

export default BottomTabEnrolledProgramScreen;
