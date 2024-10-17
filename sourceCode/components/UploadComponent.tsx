import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
} from 'react-native';
import { Colors } from '../constant';

const UploadComponent = (props: any) => {
    return (
        <View style={[styles.container, props?.style]}>
            <Text style={styles.title}>Upload Certificate</Text>
            <View style={styles.uploadSection}>
                <Image
                    source={require('../assets/Images/Upload.png')} // Replace with your icon
                    style={styles.uploadIcon}
                />
                <TouchableOpacity style={styles.uploadButton} onPress={props?.onUploadPress}>
                    <Text style={styles.uploadButtonText}>Upload</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F1F1F1',
        borderRadius: 10,
        width: '90%',
        alignSelf: 'center',
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {

        color: Colors.black56,
        fontSize: 10,
        marginLeft: 4.5,
        position: 'absolute',
        top: 9,
        fontFamily: 'Montserrat-Bold',
        width: '100%',

    },
    uploadSection: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    uploadIcon: {
        height: 35,
        width: 35,
        tintColor: 'black',
    },
    uploadButton: {
        backgroundColor: '#4DA6FF',
        borderRadius: 20,
        marginTop: 15,
        paddingVertical: 5,
        paddingHorizontal: 25,
    },
    uploadButtonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },
});

export default UploadComponent;
