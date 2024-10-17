import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FareBreakupModal from '../../../components/modal/FareBreakupModal';
import HeaderComp from '../../../components/HeaderComp';
import { Colors } from '../../../constant';

const SubscriptionPlan = () => {
    const [modalVisible, setModalVisible] = React.useState(false);
    const [fareDetails, setFareDetails] = React.useState({ baseFare: 0, gst: 0, total: 0 });

    const handleShowModal = (condition: string) => {
        switch (condition) {
            case '1':
                setFareDetails({ baseFare: 1999, gst: 90, total: 2089 });
                break;
            case '2':
                setFareDetails({ baseFare: 1399, gst: 70, total: 1469 });
                break;
            case '3':
                setFareDetails({ baseFare: 799, gst: 40, total: 839 });
                break;
            default:
                setFareDetails({ baseFare: 0, gst: 0, total: 0 });
                break;
        }
        setModalVisible(true);  // Open modal after setting fare details
    };
    const handleContinue = () => {
        setModalVisible(false);
    };
    const handleClose = () => {

    };
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.whitetxt }}>
            <StatusBar barStyle={'dark-content'} backgroundColor={Colors.whitetxt} />
            <HeaderComp
                img={require('../../../assets/Images/arrowback.png')}
                txt={''}
            />
            <View style={styles.container}>
                <View style={styles.textHeaderView}>
                    <Text style={styles.sub}>SUBSC</Text>
                    <Text style={styles.highlight}>R</Text>
                    <Text style={styles.sub}>PTION</Text>
                </View>
                <Text style={styles.sub}>
                    PLAN
                </Text>

                <View style={styles.textHeaderView}>
                    <Text style={styles.subText}>For an {''}</Text>
                    <Text style={styles.subTexthighlight}>I</Text>
                    <Text style={styles.subText}>n</Text>
                    <Text style={styles.subTexthighlight}>t</Text>
                    <Text style={styles.subText}>ern</Text>
                </View>

                <Text style={styles.subTitle}>Choose your plan</Text>

                <TouchableOpacity onPress={() => handleShowModal('1')} style={styles.plan}>
                    <Text style={styles.planText}>For 1st Year Student</Text>
                    <Text style={styles.priceText}>
                        1999/- <Text style={styles.durationText}>for 3 Years</Text>
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handleShowModal('2')} style={styles.plan}>
                    <Text style={styles.planText}>For 2nd Year Student</Text>
                    <Text style={styles.priceText}>
                        1399/- <Text style={styles.durationText}>for 2 Years</Text>
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handleShowModal('3')} style={styles.plan}>
                    <Text style={styles.planText}>For 3rd Year Student</Text>
                    <Text style={styles.priceText}>
                        799/- <Text style={styles.durationText}>for 3 Years</Text>
                    </Text>
                </TouchableOpacity>
                <FareBreakupModal
                    visible={modalVisible}
                    baseFare={fareDetails.baseFare}
                    gst={fareDetails.gst}
                    total={fareDetails.total}
                    onContinue={handleContinue}
                    onClose={handleClose}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3BA4E9',
        borderRadius: 10,
        marginHorizontal: 15,
        marginBottom: 50,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    textHeaderView: {
        flexDirection: 'row'
    },

    sub: {
        fontSize: 36,
        fontWeight: 'bold',
        // marginBottom: 10,
        color: '#fff',
        fontFamily: 'Montserrat-Bold',


    },
    highlight: {
        fontSize: 36,
        fontWeight: 'bold',
        // marginBottom: 10,
        color: '#fdb933',
        fontFamily: 'Montserrat-Bold',

    },
    subTexthighlight: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#fdb933',
        fontFamily: 'Montserrat-Bold',

    },
    subText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#fff',
        fontFamily: 'Montserrat-Bold',

    },

    subTitle: {
        fontSize: 20,
        color: '#fff',
        marginBottom: 20,
        fontFamily: 'Poppins',
        color: '#fdb933',
    },
    plan: {
        backgroundColor: '#73bdfd',
        padding: 20,
        borderRadius: 10,
        width: '80%',
        marginBottom: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    planText: {
        fontSize: 16,
        color: '#fff',
    },
    priceText: {
        fontSize: 18,
        color: '#fdb933',
        fontWeight: 'bold',
    },
    durationText: {
        fontSize: 14,
        color: '#e0e0e0',
    },
});

export default SubscriptionPlan;
