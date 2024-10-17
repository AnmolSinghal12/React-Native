import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Image } from 'react-native';
import { Colors } from '../constant';

interface OptionButtonProps {
    icon: string;
    label: string;
    onPress: () => void;
}

const OptionButton: React.FC<OptionButtonProps> = ({ icon, label, onPress }) => {
    return (
        <View style={styles.container} >

            <TouchableOpacity onPress={onPress} style={styles.innerContainer}>
                <Image
                    source={require('../assets/Images/Files.png')}
                    style={styles.icon}
                />
                <Text style={styles.label}>{label}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5F5F5',
        padding: 10,
        borderRadius: 25,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 2,
        elevation: 3,
        width: 360,
        height: 125,
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#EDEDED',
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 15,
        width: '90%',
    },
    icon: {
        height: 50,
        width: 50,
        // marginRight: 15,
    },
    label: {
        fontSize: 18,
        fontWeight: '500',
        fontFamily: 'Montserrat-light',
        color: Colors.blacktxt,
        marginLeft: 10
    },
});

export default OptionButton;
