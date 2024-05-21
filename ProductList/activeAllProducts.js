import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Cookies from 'js-cookie';

const ActiveAllProducts = (props) => {
    const { activeProducts, navigation } = props;
    const jwtToken = Cookies.get('vendorToken');
    const { thumbnail, productId, createdAt, title, description, price,status } = activeProducts || {};
   
    const splitedImages = thumbnail ? thumbnail.split(",") : [];
    
    return (
       
        <View style={styles.card}>
            <TouchableOpacity onPress={() => navigation.navigate('ProductDetailView', { productId })}>
                <Image
                    style={styles.image}
                    source={{ uri: `http://localhost:9000/${splitedImages[0]}` }}
                />
            </TouchableOpacity>
            <View style={styles.content}>
                <Text style={styles.productContent}>Product ID: {createdAt}</Text>
                <Text style={styles.productContent}>Product Name: {title}</Text>
                <Text style={styles.productContent}>Product Price: {price}</Text>
                <Text style={styles.productContent}>Description: {description}</Text>
                <Text style={styles.productContent}>status: {status}</Text>
            </View>
        </View>
      
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        width: 700,
        margin: 5,
        backgroundColor: '#ffffff',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    image: {
        width: 300,
        height: 250,
        resizeMode: 'cover',
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
    },
    content: {
        flex: 1,
        padding: 10,
    },
    productContent: {
        fontSize: 16,
        marginBottom: 5,
    },
});

export default ActiveAllProducts;
