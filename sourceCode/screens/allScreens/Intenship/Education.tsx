import React, { useState } from "react";
import { SafeAreaView, StatusBar, StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { Colors } from '../../../constant';
import HeaderComp from '../../../components/HeaderComp';
import { useNavigation } from '@react-navigation/native';
import InputText from "../../../components/textInput";
import { CommonText, OpacityButton } from '../../../components';
import UploadComponent from "../../../components/UploadComponent";
import OptionButtonModal from "../../../components/modal/OptionButtonModal";

const EduDetails = () => {
  const navigation = useNavigation();
  const [course, setCourse] = useState('');
  const [year, setYear] = useState('');
  const [university, setUniversity] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [selectedBackground, setSelectedBackground] = useState(null);
  const [certification, setCertification] = useState('');
  const [Address, setAddress] = useState('');
  const [uploadCerrtificateModal, setUploadCerrtificateModal] = useState(false);

  const handleNext = () => {
    navigation.navigate('InternHome');
  }

  const handleUploadPress = () => {
    setUploadCerrtificateModal(true)

  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.whitetxt }}>
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.whitetxt} />
      <HeaderComp
        img={require('../../../assets/Images/arrowback.png')}
        txt={'Education Details'}
      />
      <InputText txt="Current Course" value={course} onChangeText={setCourse} />
      <InputText txt="Current Year" value={year} onChangeText={setYear} />
      <InputText txt="Current University" value={university} onChangeText={setUniversity} />
      <InputText txt="Any Specialization" value={specialization} onChangeText={setSpecialization} />


      <View style={styles.GenderView}>
        <CommonText style={styles.gendertxt}>Background</CommonText>
        <View style={{ justifyContent: 'center', height: 60 }}>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              style={styles.Selectg}
              onPress={() => setSelectedBackground('IT')}>
              {selectedBackground === 'IT' && (
                <Image
                  source={require('../../../assets/Images/selectedicon.png')}
                  style={styles.Selectedicon}
                />
              )}
            </TouchableOpacity>
            <CommonText style={styles.txts}>IT</CommonText>
            <TouchableOpacity
              style={[styles.Selectg, { marginLeft: 90 }]}
              onPress={() => setSelectedBackground('NON-IT')}>
              {selectedBackground === 'female' && (
                <Image
                  source={require('../../../assets/Images/selectedicon.png')}
                  style={styles.Selectedicon}
                />
              )}
            </TouchableOpacity>
            <CommonText style={[styles.txts]}>NON-IT</CommonText>
          </View>
        </View>
      </View>

      <InputText txt="Certification" value={certification} onChangeText={setCertification} />
      <UploadComponent onUploadPress={handleUploadPress} />
      <InputText txt="Address" value={Address} onChangeText={setAddress} />

      <TouchableOpacity style={styles.btnArrow}
        onPress={handleNext}>
        <Image source={require('../../../assets/Images/bluearrow3x.png')} style={styles.arrow} />
      </TouchableOpacity>
      <OptionButtonModal visible={uploadCerrtificateModal} onClose={setUploadCerrtificateModal} />
    </SafeAreaView>
  )

}

const styles = StyleSheet.create({
  GenderView: { width: '100%', paddingHorizontal: 23, height: 80 },
  gendertxt: { fontFamily: 'Montserrat-Bold', fontSize: 14 },
  Selectg: {
    height: 19,
    width: 19,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: Colors.lightWhite,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Selectedicon: { height: 19, width: 19 },
  txts: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
    color: Colors.lightbrown,
    marginLeft: 7,
  },
  btnArrow: {
    flex: 0,
    alignItems: 'flex-end',
    margin: '5%'
  },
  arrow: {
    height: 63,
    width: 63
  },
});
export default EduDetails;