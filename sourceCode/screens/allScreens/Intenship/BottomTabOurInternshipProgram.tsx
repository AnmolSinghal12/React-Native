import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Image, StatusBar, SafeAreaView } from 'react-native';
import { Colors } from '../../../constant';
import HeaderComp from '../../../components/HeaderComp';
import { useNavigation } from '@react-navigation/native';

export default function BottomTabOurInternshipProgram({ navigation }: any) {
    const handleNext = () => {
        navigation.navigate('SubscriptionPlan');
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
            <HeaderComp
                img={require('../../../assets/Images/arrowback.png')}
                txt={'Our Internship Program'}
            />
            <ScrollView contentContainerStyle={styles.container}>

                {/* Benefits Section */}
                <View style={styles.sectionContainer}>
                    <Text style={styles.BenefitsTitle}>Benefits</Text>
                    <Text style={styles.bulletPoint}>
                        <Image resizeMode='contain' style={styles.dotImage} source={require('../../../assets/Images/Ellipse.png')} /> Joining our internship program offers invaluable hands-on experience in [specific field], preparing you for a successful career
                    </Text>
                    <Text style={styles.bulletPoint}>
                        <Image resizeMode='contain' style={styles.dotImage} source={require('../../../assets/Images/Ellipse.png')} /> Joining our internship program offers invaluable hands-on experience in [specific field], preparing you for a successful career
                        Our internship provides mentorship from industry professionals, fostering personal and professional growth.
                    </Text>
                    <Text style={styles.bulletPoint}>
                        <Image resizeMode='contain' style={styles.dotImage} source={require('../../../assets/Images/Ellipse.png')} /> Joining our internship program offers invaluable hands-on experience in [specific field], preparing you for a successful career
                        We prioritize learning and development, ensuring every intern receives meaningful projects and opportunities to shine.
                    </Text>
                </View>

                {/* Interview Preparation */}
                <View style={styles.InterviewView}>
                    <Text style={styles.sectionTitle}>Interview preparation</Text>
                    <Text style={styles.bulletPoint}>
                        <Image resizeMode='contain' style={styles.dotImage} source={require('../../../assets/Images/Ellipse.png')} />
                        <Text style={styles.OcolorText}>O</Text>ur approach focuses on practical strategies and mock interviews to simulate real-world scenarios and boost student readiness.
                    </Text>
                </View>

                {/* Inviting Companies */}
                <View style={styles.InterviewView}>
                    <Text style={styles.sectionTitle}>Inviting Companies</Text>
                    <Text style={styles.bulletPoint}>
                        <Image resizeMode='contain' style={styles.dotImage} source={require('../../../assets/Images/Ellipse.png')} />
                        <Text style={styles.OcolorText}>W</Text>e specialize in bridging the gap between companies seeking fresh perspectives and students eager to apply their knowledge in real-world settings.
                    </Text>
                </View>

                {/* Courses */}
                <View style={styles.InterviewView}>
                    <Text style={styles.sectionTitle}>Courses</Text>
                    <Text style={styles.bulletPoint}>
                        <Image resizeMode='contain' style={styles.dotImage} source={require('../../../assets/Images/Ellipse.png')} />
                        <Text style={styles.OcolorText}>W</Text>e offer a wide range of study materials tailored for students interested in exploring new courses.
                    </Text>
                    <Text style={styles.bulletPoint}>
                        <Image resizeMode='contain' style={styles.dotImage} source={require('../../../assets/Images/Ellipse.png')} />
                        <Text style={styles.OcolorText}>W</Text>hether it's a new language, technical skill, or academic subject, our study materials are here to help students excel in their chosen courses.
                    </Text>
                </View>

                {/* 12 Counseling Section */}
                <View style={styles.counselingContainer}>
                    <Text style={styles.counselingTitle}>12 COUNSELLING/ YEAR</Text>

                    <View style={styles.counselingBox}>
                        <Text style={styles.counselingQuestion}>Which Language to Go with?</Text>
                        <Text style={styles.counselingAnswer}>C, C++, JAVA, Python and More</Text>

                        <Text style={styles.counselingQuestion}>What to select in Next year?</Text>
                        <Text style={styles.counselingAnswer}>Android or Web Development</Text>

                        <Text style={styles.counselingQuestion}>Which Field to Start with?</Text>
                        <Text style={styles.counselingAnswer}>Software or Hardware Development</Text>

                        <Text style={styles.counselingQuestion}>What to Choose?</Text>
                        <Text style={styles.counselingAnswer}>Coding, Designing, or Cloud</Text>
                    </View>

                    <Text style={styles.counselingNote}>
                        Every Month Scheduled Counselling with{'\n'} <Text style={styles.expertText}>EXPERT</Text> from Industry. He/She will Suggest as Per Student Capability
                    </Text>

                    {/* Button */}
                    <Text style={styles.buttonText}>Click The Button To See Packages</Text>
                    <TouchableOpacity style={styles.btnArrow}
                        onPress={handleNext}>
                        <Image source={require('../../../assets/Images/bluearrow3x.png')} style={styles.arrow} />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 16,
        backgroundColor: '#FFFFFF',
    },
    sectionContainer: {
        backgroundColor: '#F5F5F5',
        borderRadius: 20,
        padding: 8,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 4,
        elevation: 5,
    },
    dotImage: {
        height: 10, width: 10
    },
    BenefitsTitle: {
        fontSize: 18,
        fontFamily: 'Montserrat-SemiBold',
        marginBottom: 20,
        color: '#000000',
    },
    InterviewView: {
        marginTop: 20
    },
    sectionTitle: {
        fontSize: 18,
        fontFamily: 'Montserrat-SemiBold',
        marginBottom: 20,
        color: '#000000',
        // textShadowColor: '#585858',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 5, // 
        lineHeight: 20,
    },
    OcolorText: {
        fontSize: 16,
        marginBottom: 8,
        lineHeight: 20,
        color: '#3DB2FF',
        fontFamily: 'Montserrat-Regular',

    },
    bulletPoint: {
        fontSize: 14,
        marginBottom: 8,
        lineHeight: 20,
        color: '#000000',
        fontFamily: 'Montserrat-Regular',
        marginTop: 10

    },
    counselingContainer: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 12,
        marginBottom: 16,
        marginTop: 20
    },
    counselingTitle: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 18,
        marginBottom: 16,
        textAlign: 'center',
        color: '#000000',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 5, // 
        lineHeight: 20,
    },
    counselingBox: {
        backgroundColor: '#D9D9D945',
        borderRadius: 10,
        padding: 16,
        marginBottom: 16,
    },
    counselingQuestion: {
        fontSize: 16,
        fontFamily: 'Montserrat-SemiBold',
        color: Colors.blacktxt,
        marginBottom: 4,
    },
    counselingAnswer: {
        fontSize: 14,
        marginBottom: 12,
        color: '#000000',
        fontFamily: 'Montserrat-Regular',
    },
    counselingNote: {
        fontSize: 12,
        color: '#888',
        textAlign: 'center',
        marginBottom: 16,
        fontFamily: 'Poppins-Regular',
        lineHeight: 25,
        alignSelf: 'center',


    },
    expertText: {
        fontSize: 12,
        color: '#BE4C4C',
        textAlign: 'center',
        marginBottom: 16,
        fontFamily: 'Poppins-SemiBold',
        alignSelf: 'center',
    },
    button: {
        backgroundColor: '#4d90fe',
        borderRadius: 50,
        paddingVertical: 12,
        paddingHorizontal: 24,
        alignItems: 'center',
    },
    buttonText: {
        color: '#000',
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
        alignSelf: 'center',
    },
    btnArrow: {
        flex: 0,
        alignItems: 'center',
        margin: '5%'
    },
    arrow: {
        height: 50,
        width: 50
    },
});
