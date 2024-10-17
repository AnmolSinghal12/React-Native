import { StyleSheet, Text, View, ScrollView, TouchableOpacity, ImageBackground, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import '../../../language/i18n';

const Intern = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Image
          source={require('../../../assets/Images/vectorlatestf.jpg')}


          style={styles.image}

        />
        <View style={styles.contentView}>
          <Text style={styles.text}>Please Complete Your {"\n"}profile</Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Internpersonalinfo')}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Intern;

const styles = StyleSheet.create({
  text: {
    color: 'black',
    width: 400,
    fontSize: 20,
    textAlign: "center",
    fontWeight: "700",
    top: 150
  },
  contentView: {
    alignItems: 'center',
    paddingVertical: 20,
    textAlign: "center",
    padding: 100,
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    paddingBottom: 200
  },
  button: {
    backgroundColor: '#3DB2FF',
    width: 250,
    top: 170,
    height: 52,
    margin: 10,
    borderRadius: 45,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: "center",
    top: 15,
    fontWeight: "500"
  },
  image: {
    alignSelf: 'center',
    resizeMode: 'contain',
    width: 320,
    height: 350,
    margin: 50,
    top: 150,
    marginBottom: 10
  }
});