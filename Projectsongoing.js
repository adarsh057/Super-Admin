import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity,Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { AntDesign } from '@expo/vector-icons';
import { Bar } from "react-native-progress";
const Projectsongoing = () => (
  <View style={styles.container}>
    <Text style={{ fontSize: wp('1.1%'), marginTop: wp('2.0%'), marginLeft: wp('2.0%'), fontWeight: "600", color: '#000000' }}>Projects > ongoing</Text>
    <View style={styles.frame}>
    <View style={styles.rowContainer}>
      <AntDesign name="arrowleft" size={wp('1.5%')} color="black" style={{marginTop:wp('0.2%')}}/>
      <Text style={{...styles.text, fontWeight:'600', marginLeft:wp('2%'),fontSize: wp('2.0%'),}}>Ongoing</Text>
    </View>
    <View style={{flexDirection:'row', marginTop:wp('1.7'),  }}>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',marginRight:wp('72%') }}>
      <Image
        source={require('./assets/Designer1.jpg')}
        style={{ width: wp('20%'),
        height: wp('15%'), }}
      />
      <View style={{  width: wp('20%'),
    height: wp('15%'), }}>
        <View style={{ backgroundColor:'#ECECEC', flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ fontSize: wp('0.7%'),color: 'black',fontWeight: '600', marginLeft: wp('0.5%') , marginTop:wp('0.2%') }}>Project Name</Text>
          <Text style={{ fontSize: wp('0.7%'),fontWeight: '600', marginLeft: wp('7%'),marginTop:wp('0.2%'),color: 'black', }}>60%</Text>
          <Bar
            progress={0.6}
            width={wp('6%')}
            height={wp('0.5%')}
            color="#c69679"
            unfilledColor="#D9D9D9"
            borderWidth={0}
            style={{ marginLeft: wp('0.5%'), marginTop: wp('0.3%') }}
          />
        </View>
      </View>
    </View>
    
   </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  frame: {
    borderWidth: wp('0.1%'),
    borderColor: '#ECECEC',
    padding: wp('2%'),
    height: hp('75%'),
    width: wp('96%'),
    marginLeft: wp('2.0%'),
    marginTop: wp('1.5%'),
    marginRight: wp('1.0%'),
    borderRadius: wp('0.2%'),
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:wp('1.0%'),
  },
  text: {
    color: 'black',
    fontSize: wp('1.0%'),
    marginLeft: wp('2%'),
  },
  
 
 
});

export default Projectsongoing;
