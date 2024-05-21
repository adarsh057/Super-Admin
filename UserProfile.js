import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

const UserProfile = () => {
    const navigation = useNavigation(); 
 
    return (
        <View style={{backgroundColor:'white', flex:1}}>
            <Text style={{alignSelf:'center'}}>User Profile</Text>
           
        </View>
    );
}

export default UserProfile;
