import React from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

// Props interface for the modal component
interface FareBreakupModalProps {
    visible: boolean;  // Controls the modal visibility
    baseFare: number;
    gst: number;
    total: number;
    onContinue: () => void;  // Callback for the continue button
    onClose: () => void;  // Callback to close the modal
}

const FareBreakupModal: React.FC<FareBreakupModalProps> = ({
    visible,
    baseFare,
    gst,
    total,
    onContinue,
    onClose
}) => {
    return (
        <Modal
            visible={visible}
            animationType="slide"
            transparent={true}
            onRequestClose={onClose}
        >
            <View style={styles.modalBackground}>
                <View style={styles.container}>
                    <Text style={styles.heading}>Fare Breakup</Text>

                    <View style={styles.row}>
                        <Text style={[styles.label]}>Base Fare</Text>
                        <Text style={styles.greyText}>₹ {baseFare}</Text>
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.greyText}>GST</Text>
                        <Text style={styles.greyText}>₹ {gst}</Text>
                    </View>

                    <View style={styles.divider} />

                    <View style={styles.row}>
                        <Text style={styles.totalLabel}>Total</Text>
                        <Text style={styles.totalAmount}>₹ {total}</Text>
                    </View>

                    <TouchableOpacity style={styles.button} onPress={onContinue}>
                        <Text style={styles.buttonText}>Continue</Text>
                        <View style={styles.arrowView}>
                            <Image style={styles.arrowStyle} resizeMode='contain' source={require('../../assets/Images/arrowNext.png')} />
                        </View>
                    </TouchableOpacity>

                    {/* <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                        <Text style={styles.closeButtonText}>Close</Text>
                    </TouchableOpacity> */}
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    container: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        width: '90%',
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 15,
        fontFamily: "Poppins",
        color: '#000',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5,
    },
    label: {
        fontSize: 24,
        color: '#808080',
        fontFamily: "Poppins-SemiBold",

    },
    greyText: {
        fontSize: 24,
        color: '#808080',
        fontFamily: "Poppins-SemiBold",

    },
    // strikethrough: {
    //     // textDecorationLine: 'line-through',
    //     color: '#808080',
    // },
    divider: {
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        marginVertical: 15,
    },
    totalLabel: {
        fontSize: 20,
        color: '#000',
        fontFamily: "Poppins-Bold",
    },
    totalAmount: {
        fontSize: 20,
        color: '#000',
        fontFamily: "Poppins-Bold",
    },
    button: {
        backgroundColor: '#4da6ff',
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 25,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,

    },
    buttonText: {
        color: '#fff',
        fontSize: 24,
        fontFamily: 'Montserrat-SemiBold',

    },
    // closeButton: {
    //     marginTop: 15,
    //     alignItems: 'center',
    // },
    // closeButtonText: {
    //     color: '#4da6ff',
    //     fontSize: 16,
    // },
    arrowView: {
        backgroundColor: '#FFF',
        borderRadius: 50,
        padding: 8,
        marginLeft: 50,
    },
    arrowStyle: {
        height: 20,
        width: 20,
    },
});

export default FareBreakupModal;
