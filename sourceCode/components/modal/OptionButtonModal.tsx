import React from 'react';
import { Modal, View, Button, StyleSheet, TouchableOpacity } from 'react-native';
import OptionButton from '../OptionButton';

interface OptionButtonModalProps {
    visible: boolean;
    onClose: () => void;
}

const OptionButtonModal: React.FC<OptionButtonModalProps> = ({ visible, onClose }) => {
    return (
        <Modal
            transparent={true}
            animationType="slide"
            visible={visible}
            onRequestClose={onClose}
        >
            <TouchableOpacity
                style={styles.modalContainer}
                activeOpacity={1}
                onPressOut={onClose}  // Close modal on outside press
            >
                <View style={styles.contentContainer}>
                    <OptionButton
                        label="Files" icon="your-icon-path"
                        onPress={() => {
                            onClose();
                        }}
                    />
                </View>
            </TouchableOpacity>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    contentContainer: {
        flex: 1,
        width: 300,
        padding: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default OptionButtonModal;
