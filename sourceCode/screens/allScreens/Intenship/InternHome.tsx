import React, { useEffect, useState } from "react";
import { View, SafeAreaView, StatusBar, Image, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { Colors } from '../../../constant';
import CompleteProfileModal from "../../../components/modal/CompleteProfileModal";
const data = [
  { id: '1', image: require('../../../assets/Images/internship.png'), label: '245+ Interns' },
  { id: '2', image: require('../../../assets/Images/mentor.png'), label: 'Mentors' },
  { id: '3', image: require('../../../assets/Images/delivery-box.png'), label: '140+ Placed' },
  { id: '4', image: require('../../../assets/Images/appointment.png'), label: 'Mentors Schedule' },
];

const InternHome = ({ navigation }: any) => {
  const [modalProfile, setModalProfile] = useState(false);

  useEffect(() => {
    setModalProfile(true)
  }, [])


  const CardItem = ({ item }: { item: any }) => (
    <TouchableOpacity style={styles.card}>
      <Image source={item.image} style={styles.icon} />
      <Text style={styles.label}>{item.label}</Text>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.whitetxt }} >
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.whitetxt} />

      {/* <HeaderComp
        img={require('../../../assets/Images/arrowback.png')}
        txt={''}
      /> */}
      <View style={styles.headerView}>
        <Image resizeMode="contain" style={styles.userImage} source={require('../../../assets/Images/userPlaceHolder.png')} />
        <Text style={styles.userNameText}>
          Hi Sachin
        </Text>
        <Image resizeMode="contain" style={styles.alarmImage} source={require('../../../assets/Images/Alarm.png')} />
      </View>
      <View style={styles.CareerView}>
        <Text style={styles.heading}>
          <Text style={styles.highlight}>Kickstart</Text> Your Career with the Right Internship and Mentorship
        </Text>
        <Text style={styles.subText}>
          Connect with top mentors and discover exciting internship opportunities tailored to your goals
        </Text>
      </View>
      <Text style={styles.OurExpertise}>Our Expertise</Text>
      <FlatList
        data={data}
        numColumns={2} // To display 2 columns
        renderItem={({ item }) => <CardItem item={item} />}
        keyExtractor={(item) => item.id}
        columnWrapperStyle={styles.columnWrapperStyle} // Style for the row
        contentContainerStyle={styles.contentContainer} // To center items
      />
      <CompleteProfileModal visible={modalProfile} setVisible={setModalProfile} onPress={() => { setModalProfile(false), navigation.navigate('InternPersonalInfo') }} />
    </SafeAreaView>
  );

}
export default InternHome;
const styles = StyleSheet.create({
  headerView: {
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 15,
    marginTop: 20
  },
  userNameText: {
    fontFamily: 'Montserrat-SemiBold', fontSize: 16,
    color: '#3DB2FF',
    marginLeft: 20
  },
  userImage: {
    height: 30,
    width: 30,
  },
  alarmImage: {
    height: 30,
    width: 30,
    marginLeft: 200
  },
  CareerView: {
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
    margin: 20,
  },
  heading: {
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
    color: '#000',
    marginBottom: 10,
  },
  highlight: {
    color: '#4da6ff',
  },
  subText: {
    fontSize: 14,
    color: '#333',
    fontFamily: 'Montserrat-Regular'
  },
  OurExpertise: {
    fontSize: 14,
    color: '#333',
    fontFamily: 'Poppins-SemiBold',
    marginHorizontal: 15
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    width: '45%', // 45% width to make space between columns
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  label: {
    fontSize: 12,
    fontFamily: 'Poppins-SemiBold',
    color: '#333',
    textAlign: 'center',
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  columnWrapperStyle: {
    justifyContent: 'space-between',
    marginBottom: 20,
  },
})