import {
    Image,
    Modal,
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';
import React from 'react';
import CommonText from '../commonText';

interface ModalProps {
    visible: boolean;
    setVisible: (arg: boolean) => void;
    onPress?: () => void;
}

const CompleteProfileModal = (props: ModalProps) => {
    const { visible, setVisible, onPress } = props;
    return (
        <Modal
            visible={visible}
            animationType="slide"
            transparent={true}
            onRequestClose={() => setVisible(false)}>
            <View style={styles.modalmainview}>
                <View style={styles.modaldataview}>
                    <Image
                        source={require('../../assets/Images/profileModal.png')}
                        style={styles.image}
                    />
                    <CommonText
                        style={styles.text}>{`Please complete your\nprofile`}</CommonText>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={onPress}>
                        <CommonText style={styles.btnText}>Continue</CommonText>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

export default CompleteProfileModal;

const styles = StyleSheet.create({
    modalmainview: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        width: '100%',
        backgroundColor: 'rgba(2,2,3,0.7)',
    },
    modaldataview: {
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        alignSelf: 'center',
        padding: 25,
    },
    image: {
        alignSelf: 'center',
        resizeMode: 'contain',
        width: 195,
        aspectRatio: 195 / 187,
    },
    button: {
        backgroundColor: '#3DB2FF',
        height: 52,
        borderRadius: 45,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        textAlign: 'center',
        marginVertical: 12,
        fontFamily: 'Montserrat-Bold',
    },
    btnText: {
        fontFamily: 'Montserrat-Bold',
        color: 'white'
    }
});
