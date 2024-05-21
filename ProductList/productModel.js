import React from 'react';
import { View, TouchableOpacity, Text,ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import Cookies from 'js-cookie';
import { Menu,MenuActions,MenuTrigger,MenuProvider,MenuOptions, MenuOption } from 'react-native-popup-menu'
import { Ionicons } from '@expo/vector-icons'; 

let jwtToken = '';
const MenuPopupState = (props) => {
  const { productid } = props;
  const onClickOptions = () => {
   
  };
  const onClickPausedProducts = async () => {
    
    jwtToken = Cookies.get('vendorToken');
   
    const apiUrl = 'http://localhost:9000/pausedProducts';
    const pausedProducts = { productid, hello: 'hello' };

    try {
      const response = await fetch(apiUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${jwtToken}`,
        },
        body: JSON.stringify(pausedProducts),
      });

      const data = await response.json();
      console.log(data);
      
    } catch (error) {
      console.error(error);
      
    }
  };

  const onClickDeleteProducts = async () => {
    
    jwtToken = Cookies.get('vendorToken');
    const apiUrl = 'http://localhost:9000/deleteProducts';
    const deleteProducts = { productid, hello: 'hello' };

    try {
      const response = await fetch(apiUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${jwtToken}`,
        },
        body: JSON.stringify(deleteProducts),
      });

      const data = await response.json();
      console.log(data);
     
    } catch (error) {
      console.error(error);
      
    }
  };

  return (
    <View style={{ marginTop: 20, height: 80, width: 70 }}>
    <MenuProvider>
      <Menu>
        <MenuTrigger onPress={onClickOptions} style={{ height: '800' }}>
          <Ionicons name="ellipsis-vertical" size={24} color="black" /> 
        </MenuTrigger>
        <MenuOptions customStyles={{ optionsContainer: { maxHeight: 800 } }}>
          <ScrollView>
            <MenuOption onSelect={onClickPausedProducts} text='Paused' style={{ backgroundColor: 'white' }} />
            <MenuOption onSelect={onClickDeleteProducts} text='Delete' style={{ backgroundColor: 'white' }} />
          </ScrollView>
        </MenuOptions>
      </Menu>
    </MenuProvider>
  </View>
  );
};

export default MenuPopupState;
