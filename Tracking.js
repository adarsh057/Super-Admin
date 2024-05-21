import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'; 

const Tracking = () =>{ 
  
  const navigation = useNavigation(); 
  return(
  
  <View style={styles.container}>
    <Text style={{ fontSize: wp('2.5%'), marginTop: wp('2.0%'), marginLeft: wp('2.0%'), fontWeight: "600", color: '#000000' }}>Tracking</Text>
    <View style={styles.frame}>
      <View style={{flexDirection:'row'}}>
  <TouchableOpacity onPress={() => navigation.navigate('Designers')}>
   <View style={{flexDirection:"column"}}>
    <View style={[styles.circle, { width: wp('10%'), height: wp('10%') }]}>
      <MaterialIcons name="design-services" size={wp('3%')} color="black" />
    </View>
    <Text style={{ fontSize: wp('1.5%'), marginTop: wp('2.0%'), marginLeft: wp('3.8%'), fontWeight: "600", color: '#000000' }}>Designer</Text>
    </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Vendors')}>
    <View style={{flexDirection:"column"}}>
    <View style={[styles.circleone, { width: wp('10%'), height: wp('10%') }]}>
      <MaterialCommunityIcons name="account-convert" size={wp('3%')} color="black" />
    </View>
    <Text style={{ fontSize: wp('1.5%'), marginTop: wp('2.0%'), marginLeft: wp('18%'), fontWeight: "600", color: '#000000' }}>Vendor</Text>
    </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=> navigation.navigate('SiteEngineers')}>
    <View style={{flexDirection:"column"}}>
    <View style={[styles.circletwo, { width: wp('10%'), height: wp('10%') }]}>
      <MaterialIcons name="engineering" size={wp('3%')} color="black" />
    </View>
    <Text style={{ fontSize: wp('1.5%'), marginTop: wp('2.0%'), marginLeft: wp('16%'), fontWeight: "600", color: '#000000' }}>Site Engineer</Text>
    </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=> navigation.navigate('Users')}>
    <View style={{flexDirection:"column"}}>
    <View style={[styles.circlethree, { width: wp('10%'), height: wp('10%') }]}>
      <Feather name="user" size={wp('3%')} color="black" />
    </View>
    <Text style={{ fontSize: wp('1.5%'), marginTop: wp('2.0%'), marginLeft: wp('18.5%'), fontWeight: "600", color: '#000000' }}>User</Text>
    </View>
    </TouchableOpacity>
    </View>
    </View>
  </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  frame: {
    borderWidth: wp('0.1%'),
    borderColor: '#ECECEC',
    padding: wp('2%'),
    height: hp('70%'),
    width: wp('96%'),
    marginLeft: wp('2.0%'),
    marginTop: wp('2.5%'),
    marginRight: wp('1.0%'),
    borderRadius: wp('0.2%'),
  },
  circle: {
    borderRadius: wp('50%'),
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#F0E2DA',
    borderWidth: wp('0.2%'),
    marginTop:wp('2.0%'),
    marginLeft:wp('2.0%'),
  },
  circleone: {
    borderRadius: wp('50%'),
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#F0E2DA',
    borderWidth: wp('0.2%'),
    marginTop:wp('2.0%'),
    marginLeft:wp('15.0%'),
  },
  circletwo: {
    borderRadius: wp('50%'),
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#F0E2DA',
    borderWidth: wp('0.2%'),
    marginTop:wp('2.0%'),
    marginLeft:wp('15.0%'),
  },
  circlethree: {
    borderRadius: wp('50%'),
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#F0E2DA',
    borderWidth: wp('0.2%'),
    marginTop:wp('2.0%'),
    marginLeft:wp('15.0%'),
  },
});

export default Tracking;
