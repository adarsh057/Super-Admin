import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import { EvilIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const UserDetailsCard = ({ user }) => (
    <TouchableOpacity onPress={() => navigation.navigate('UserDetails', { user })}>
        <View style={{...styles.cardContainer,marginRight: wp('2%'), marginTop:wp('2%')}}>
            <EvilIcons name="user" size={wp('5%')} color="#000000" style={{ marginTop: -hp('1.0%') }} />
            <Text style={styles.fullName}>{user.fullName}</Text>
            <View style={{ flexDirection: 'row' , marginTop:wp('4.5%')}}>
  <TouchableOpacity
    style={{
      marginHorizontal: wp('2%'),
      backgroundColor: '#c69679',
      paddingVertical: wp('1%'),
      paddingHorizontal: wp('3%'),
      borderRadius: wp('0.2%'),
      height: wp('2.5%'),
      width:wp('15%'),
      flexDirection: 'row',  
      alignItems: 'center', 
    }}>
    <Feather name="eye" size={wp('1.2%')} color="white" />
    <Text style={{ color: 'white', marginLeft: wp('1%'), fontSize: wp('0.9%') , fontWeight:'bold'}}>
      View Profile
    </Text>
  </TouchableOpacity>
</View>
        </View>
    </TouchableOpacity>
);

const UsersDetailsSwiper = ({ userDetailsList }) => {
    const navigation = useNavigation();

   
    const chunkArray = (arr, size) => {
        return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
            arr.slice(i * size, i * size + size)
        );
    };

    const userSets = chunkArray(userDetailsList, 4);

    return (
        <View style={styles.wrapper}>
            {userSets.map((set, index) => (
                <View key={index} style={styles.slide}>
                    {set.map((user, idx) => (
                        <UserDetailsCard key={idx} user={user} />
                    ))}
                </View>
            ))}
        </View>
    );
};

const Users = () => {
    const [userDetailsList, setUserDetailsList] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchAllUserDetails();
    }, []);

    const fetchAllUserDetails = async () => {
        try {
            const response = await fetch(`http://localhost:9000/houseOwner/details`);
            if (!response.ok) {
                throw new Error('Failed to fetch user details');
            }
            const data = await response.json();
            console.log("Received data:", data);
            setUserDetailsList(data); 
            setLoading(false);
        } catch (error) {
            console.error(error);
            setError('Failed to fetch user details');
            setLoading(false);
        }
    };

    return (
        <View style={styles.containerone}>
            <Text style={{ fontSize: wp('2.5%'), marginTop: wp('2.0%'), marginLeft: wp('2.0%'), fontWeight: "600", color: '#000000'}}>Users</Text>
        <View style={styles.frame}>
             <ScrollView contentContainerStyle={styles.container} showsHorizontalScrollIndicator={false}>
            {loading ? (
                <Text>Loading...</Text>
            ) : error ? (
                <Text>{error}</Text>
            ) : userDetailsList ? (
                <UsersDetailsSwiper userDetailsList={userDetailsList} />
            ) : (
                <Text>No user details found</Text>
            )}
        </ScrollView>

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

        </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
        
        
    },
    wrapper: {},
    slide: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingHorizontal: 20,
       
    },
    cardContainer: {
        alignItems: 'center',
        borderColor: '#ECECEC',
        borderWidth: wp('0.1%'),
        padding: wp('2%'),
         borderRadius: wp('1%'),
        height: wp('17%'),
        width: wp('20%'),
    
    },
    fullName: {
        fontSize: 16,
        fontWeight: 'bold',
       
    },
    email: {
        fontSize: 16,
    },
    frame: {
        borderWidth: wp('0.1%'),
        borderColor: '#ECECEC',
        padding: wp('2%'),
        height: hp('70%'),
        width: wp('96%'),
        marginLeft: wp('2.0%'),
        marginTop: wp('2.5%'),
        marginRight: wp('2.0%'),
        borderRadius: wp('1%'),
      },
      containerone: {
        flex: 1,
        backgroundColor: 'white',
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

export default Users;
