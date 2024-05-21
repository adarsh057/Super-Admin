import React, { useState, useEffect } from 'react';
import { View, Text, Button, Alert, ScrollView, Dimensions, TouchableOpacity, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { EvilIcons } from '@expo/vector-icons';

const Vendors = () => {
  const [vendorDetails, setVendorDetails] = useState([]);
  const [productCount, setProductCount] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductCount = async () => {
      try {
        const response = await fetch('http://localhost:9000/Vendornumberofproducts');
        const data = await response.json();
        setProductCount(data);
      } catch (error) {
        console.error('Error fetching Product count:', error);
      }
    };

    fetchProductCount();
  }, []);

  useEffect(() => {
    const fetchVendorDetails = async () => {
      try {
        const response = await fetch('http://localhost:9000/VendorDetails', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch vendor details');
        }

        const data = await response.json();
        setVendorDetails(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching vendor details:', error);
        Alert.alert('Error', error.message);
      }
    };
    fetchVendorDetails();
  }, []);

  const renderUserCards = () => {
    return vendorDetails.map((vendor, index) => (
      <View key={index} style={{...styles.userCard,}}>
       <EvilIcons name="user" size={wp('5%')} color="#000000" style={{ marginTop: hp('1.5%') }} />
        <Text style={styles.profileName}>{vendor.name}</Text>
        <Text style={{...styles.statsText,fontWeight:'400' , marginRight:wp('0.8%'), marginTop:wp('1%')}}>{vendor.mobile}</Text>
        <View style={{...styles.statsContainer,flexDirection:'row'}}>
       <View style={{flexDirection:'column',  marginTop: wp('1%'),marginLeft:wp('1.8%')}}>
        <TouchableOpacity style={{...styles.followButton, backgroundColor: '#ECECEC'}}>
          <Text style={{ ...styles.followButtonText, alignSelf: 'center',color: 'black',marginTop: -wp('0.5%'),fontSize: wp('1%') }}>Products</Text>
          </TouchableOpacity>
          <Text style={{fontSize: wp('1%'), marginTop: wp('0.1%'),alignSelf:'center'}}> {productCount[index]?.productCount || 0}</Text>
          </View>
          <View style={{marginLeft:wp('2.0%')}}>
          <View style={{flexDirection:'column',marginTop: wp('1%'),}}>
          <TouchableOpacity style={{ marginHorizontal: wp('2%'), paddingVertical: wp('1%'),paddingHorizontal: wp('3%'),borderRadius: wp('0.7%'),height: wp('2%'),width: wp('6%'), backgroundColor: '#ECECEC'}}>
          <Text style={{ ...styles.followButtonText, color: 'black', alignSelf: 'center', marginTop: -wp('0.5%'),fontSize: wp('1%') }}>Sold</Text>
          </TouchableOpacity>
          <Text style={{fontSize: wp('1%'), marginTop: wp('0.1%'),alignSelf:'center'}}> {vendor.sold || 0}</Text>
          </View>
          </View>
          <View style={{flexDirection:'column',marginTop: wp('1%'),}}>
          <TouchableOpacity style={{  marginHorizontal: wp('2%'), paddingVertical: wp('1%'),paddingHorizontal: wp('3%'),borderRadius: wp('0.7%'),height: wp('2%'),width: wp('6%'), backgroundColor: '#ECECEC'}}>
          <Text style={{ ...styles.followButtonText, color: 'black', alignSelf: 'center', marginTop: -wp('0.5%'),fontSize: wp('1%') }}>Payouts</Text>
          </TouchableOpacity>
          <Text style={{fontSize: wp('1%'), marginTop: wp('0.1%'),alignSelf:'center'}}> {vendor.payouts || 0}</Text>
          </View>
        </View>
      </View>
    ));
  };

  return (
  <View style={styles.container}>
    <Text style={{ fontSize: wp('2.5%'), marginTop: wp('1.5%'), marginLeft: wp('2.0%'), fontWeight: "600", color: '#000000' }}>Vendors</Text>
  <View style={styles.frame}>
  <ScrollView showsHorizontalScrollIndicator={false} >
      <View style={{...styles.userCardContainer}}>
        {renderUserCards()}
      </View>
      <View style={{...styles.containertwo}}>
      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>Previous</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonone}>
        <Text style={styles.buttonText}>1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttontwo}>
        <Text style={styles.buttonText}>2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonthree}>
        <Text style={styles.buttonText}>3</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonfour}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
    
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'white',
    paddingHorizontal: wp('2%'),
    paddingVertical: hp('2%'),
  },
  userCardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
   
   
  },
  userCard: {
    alignItems: 'center',
    borderColor: '#ECECEC',
    borderWidth: wp('0.1%'),
    borderRadius: wp('1%'),
    height: wp('20%'),
    width: wp('30%'),
    marginTop: hp('5%'),
    
  },
  
  profileName: {
    marginTop: -wp('0%'),
    fontSize: wp('2%'),
    fontWeight: '600',
  },
  statsContainer: {
    marginTop: hp('1%'),
  },
  statsText: {
    fontSize: wp('1.0%'),
    color: '#000000',
  },
  frame:{
    borderWidth: wp('0.1%'),
        borderColor: '#ECECEC',
        padding: wp('2%'),
        height: hp('70%'),
        width: wp('96%'),
        marginLeft: wp('0.2%'),
        marginTop: wp('1.5%'),
        marginRight: wp('2.0%'),
        borderRadius: wp('1%'),
       
  },
  followButton: {
    marginHorizontal: -wp('0.5%'),
    backgroundColor: '#C99780',
    paddingVertical: wp('1%'),
    paddingHorizontal: wp('3%'),
    borderRadius: wp('0.7%'),
    height: wp('2%'),
    width: wp('6%'),
  },
  followButtonText: {
    color: 'white',
  },
  containertwo: {
    flexDirection: 'row',
    backgroundColor: 'white',
    alignSelf: 'flex-end',
    marginTop: hp('15%'),
  },
  button: {
    backgroundColor: '#ECECEC',
    borderRadius: 2,
    borderColor: '#D9D9D9',
    height: wp('3%'),
    width: wp('10%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonone: {
    backgroundColor: '#ECECEC',
    borderRadius: 2,
    borderColor: '#D9D9D9',
    borderWidth: 0.5,
    height: wp('3%'),
    width: wp('5%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttontwo: {
    backgroundColor: '#ECECEC',
    borderRadius: 2,
    borderColor: '#D9D9D9',
    borderWidth: 0.5,
    height: wp('3%'),
    width: wp('5%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonthree: {
    backgroundColor: '#ECECEC',
    borderRadius: 2,
    borderColor: '#D9D9D9',
    borderWidth: 0.5,
    height: wp('3%'),
    width: wp('5%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonfour: {
    backgroundColor: '#ECECEC',
    borderRadius: 2,
    borderColor: '#D9D9D9',
    height: wp('3%'),
    width: wp('15%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: wp('1.5%'),
    fontWeight: '600',
  },
});

export default Vendors;
