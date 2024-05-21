import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Dashboard = ({ route }) => {
  
  const navigation = useNavigation(); 

  const handleLogout = () => {
    navigation.reset({
      key:null,
      index: 0,
      routes: [{ name: 'LoginScreen' }],
    });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
   
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default Dashboard;
