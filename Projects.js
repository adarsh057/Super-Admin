import React from 'react';
import { View, Text, StyleSheet ,TouchableOpacity} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native'; 
const Projects = () =>{ 
  
  const navigation = useNavigation(); 
  
  return(
  <View style={styles.container}>
    <Text style={{ fontSize: wp('2.5%'), marginTop: wp('2.0%'), marginLeft: wp('2.0%'), fontWeight: "600", color: '#000000' }}>Projects</Text>
    <View style={styles.frame}>
    <View style={{flexDirection:'row'}}>
    <View style={styles.containerone}>
      <TouchableOpacity onPress={() => navigation.navigate('Projectsupcoming')}>
     <View style={[styles.frameone, { backgroundColor: '#EDEDED' }]}></View>
    <View style={[styles.frametwo, { backgroundColor: '#c69679' }]}>
       <Text style={styles.text}>Upcoming</Text>
     </View>
     </TouchableOpacity>
     </View>
     <View style={{...styles.containertwo, marginLeft:wp('7%')}}>
     <TouchableOpacity onPress={() => navigation.navigate('Projectsongoing')}>
     <View style={[styles.framethree, { backgroundColor: '#EDEDED' }]}></View>
    <View style={[styles.framefour, { backgroundColor: '#c69679' }]}>
       <Text style={styles.textone}>Ongoing</Text>
     </View>
     </TouchableOpacity>
     </View>
     
     <View style={{...styles.containerthree, marginLeft:wp('7%')}}>
     <TouchableOpacity onPress={() => navigation.navigate('Login')}>
     <View style={[styles.framefive, { backgroundColor: '#EDEDED' }]}></View>
    <View style={[styles.framesix, { backgroundColor: '#c69679' }]}>
       <Text style={styles.texttwo}>Completed</Text>
     </View>
     </TouchableOpacity>
     </View>
    
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
  containerone: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  frameone: {
    width: wp('25%'),
    height: hp('20%'),
    marginVertical: hp('0%'), 
    justifyContent: 'center',
    alignItems: 'center',
  },
  frametwo: {
    width: wp('25%'),
    height: hp('5%'),
    marginVertical: hp('0%'), 
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: wp('1.5%'), 
  },
  containertwo: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    
  },
  framethree: {
    width: wp('25%'),
    height: hp('20%'),
    marginVertical: hp('0%'), 
    justifyContent: 'center',
    alignItems: 'center',
  },
  framefour: {
    width: wp('25%'),
    height: hp('5%'),
    marginVertical: hp('0%'), 
    justifyContent: 'center',
    alignItems: 'center',
  },
  textone: {
    color: 'white',
    fontSize: wp('1.5%'), 
  },
  containerthree: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    
  },
  framefive: {
    width: wp('25%'),
    height: hp('20%'),
    marginVertical: hp('0%'), 
    justifyContent: 'center',
    alignItems: 'center',
  },
  framesix: {
    width: wp('25%'),
    height: hp('5%'),
    marginVertical: hp('0%'), 
    justifyContent: 'center',
    alignItems: 'center',
  },
  texttwo: {
    color: 'white',
    fontSize: wp('1.5%'), 
  },
});

export default Projects;
