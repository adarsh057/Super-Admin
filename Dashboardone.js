import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

const Dashboardone = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const username = route.params;
  const [usernamesuperadmin, setusernamesuperadmin] = useState(username);
  const [editedUsername, setEditedUsername] = useState(username.username);

  const handleInputChange = (text) => {
    setEditedUsername(text);
  };

  const handleSubmit = async () => {
  
  const response = await fetch('http://localhost:9000/superadminusernamechange2/', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username: username.username, newUsername: editedUsername }), 
  })
  .then((response) => response.json())
  .then((data) => {
   
    console.log(data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
};


  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <AntDesign name="arrowleft" size={wp('3%')} color="black" style={{ marginTop: hp('1.5%'), marginLeft: wp('3%') }} />
      </View>
      <Text style={{ fontSize: wp('2%'), marginTop: hp('1%'), marginLeft: wp('5%'), fontWeight: '600', color: '#000000' }}>Profile</Text>
      <View style={styles.frame}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <FontAwesome6 name="circle-user" size={wp('5%')} color="black" />
          <View style={{ flexDirection: 'column', marginLeft: wp('3%') }}>
            <Text style={{ color: 'black', fontWeight: '400', fontSize: hp('2%') }}>{username.username}</Text>
            <Text style={{ color: '#C6C6C6', fontSize: hp('1.5%') }}>admin@designalley.com</Text>
          </View>
        </View>
      </View>
      <Text style={{ fontSize: wp('2%'), marginTop: wp('3.5%'), marginLeft: wp('6%'), fontWeight: '500', color: '#000000' }}>Change the User Name</Text>
      <View style={styles.frameone}>
        <Text style={{ fontSize: wp('1.5%'), marginBottom: -wp('10.0%'), marginTop: -wp('1.3%'), fontWeight: '400', color: '#000000' }}>User Name</Text>
        <View style={styles.frametwo}>
          <TextInput
            placeholder="admin"
            placeholderTextColor="#BDBDBD"
            style={{ color: "#BDBDBD", fontSize: wp('1.5%'), marginLeft: wp('1.5%'), marginTop: wp('0.9%') }}
            onChangeText={handleInputChange}
            value={editedUsername}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp('1%'),
  },
  frame: {
    borderWidth: wp('0.1%'),
    borderColor: '#C99780',
    padding: wp('3%'),
    height: hp('20%'),
    width: wp('90%'),
    marginLeft: wp('5%'),
    marginTop: hp('2%'),
    marginRight: wp('5%'),
    borderRadius: wp('2.5%'),
    backgroundColor: 'white',
  },
  frameone: {
    borderWidth: wp('0.1%'),
    borderColor: '#C99780',
    padding: wp('3%'),
    height: hp('25%'),
    width: wp('90%'),
    marginLeft: wp('5%'),
    marginTop: wp('3%'),
    marginRight: wp('5%'),
    borderRadius: wp('1.7%'),
    backgroundColor: 'white',
  },
  frametwo: {
    borderWidth: wp('0.1%'),
    borderColor: '#C99780',
    height: wp('4%'),
    width: wp('60%'),
    marginLeft: wp('5%'),
    marginTop: wp('11%'),
    marginLeft: -wp('1%'),
    borderRadius: hp('25%'),
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: '#C99780',
    alignSelf: 'center',
    borderRadius: wp('0.5%'),
    marginTop: hp('2.5%'),
    width:wp('10%'),
    height:wp('3%'),
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: wp('2%'),
    alignSelf:'center',
    marginTop:wp('0.2%'),
  },
});

export default Dashboardone;
