import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ViewProfile = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  const navigation = useNavigation();
  const navigate = () => {
    navigation.navigate('Designers');
    closePopup();
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
      <TouchableOpacity onPress={togglePopup}>
        <Text>View Profile</Text>
      </TouchableOpacity>

      <Modal
        visible={isPopupVisible}
        transparent
        animationType="slide"
        onRequestClose={togglePopup}
      >
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
        >
          <View
            style={{
              width: wp('80%'),
              height: hp('40%'),
              backgroundColor: 'white',
              borderRadius: 10,
              padding: wp('5%'),
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <View>
              <View style={{ flexDirection: 'row', marginBottom: hp('5%') }}>
                <Feather name="user" color={'black'} size={wp('5%')} />
                <TouchableOpacity onPress={navigate}>
                  <Text style={{ fontSize: wp('5%'), marginLeft: wp('2%') }}>View Profile</Text>
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <AntDesign name="logout" color={'black'} size={wp('5%')} style={{marginTop:wp('1.4%')}} />
                <TouchableOpacity>
                  <Text style={{ fontSize: wp('5%'), marginTop: hp('2%'), marginLeft: wp('2.4%') }}>Logout</Text>
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity onPress={togglePopup} style={{marginTop:-wp('12%')}}>
              <Entypo name="cross" size={wp('5%')}  color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ViewProfile;
