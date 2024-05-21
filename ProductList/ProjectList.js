import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import LabTabs from './index';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Cookies from 'js-cookie';
import { Icon } from '@iconify/react';
import { useNavigation } from '@react-navigation/native'; 
let jwtToken = '';

class ProjectList extends Component {
  state = {
    allProducts: [],
    searchProductName: '',
    searchProductPrice: '',
  };

  componentDidMount = () => {
    jwtToken = Cookies.get('vendorToken');
    this.materialFunction();
  };

  materialFunction = async () => {
    const apiUrl = 'http://localhost:9000/vendorAllProducts';
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'Application/json',
        'Authorization': `Bearer ${jwtToken}`,
      },
    };
    const response = await fetch(apiUrl, options);
    const data = await response.json();

    if (response.ok === true) {
      this.setState({ allProducts: data });
    }
  };

  handleProductNameSearch = (text) => {
    this.setState({ searchProductName: text });
  };

  handleProductPriceSearch = (text) => {
    this.setState({ searchProductPrice: text });
  };

  render() {
    const { navigation } = this.props;
    const { allProducts, searchProductName, searchProductPrice } = this.state;
   const filteredProducts = allProducts.filter(product => 
      product.title.toLowerCase().includes(searchProductName.toLowerCase()) &&
      product.price.toString().includes(searchProductPrice)
    );

    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <View style={styles.projectsBgContainer}>
            <View style={styles.container}>
                <View style={{flexDirection:'row'}}>
            <Text style={{ fontSize: wp('1.1%'), marginTop: wp('2.0%'), marginLeft: wp('2.0%'), fontWeight: "700", color: '#000000' }}>Product</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Listview')}>
        <View style={{flexDirection:'row', marginTop:wp('2.2%'), marginLeft:wp('85%')}}>
       <Text style={{fontWeight:'400' , fontSize:wp('0.7%')}}>List View</Text>
          <Icon icon="tdesign:view-list"  style={{color:'black',marginLeft:wp('0.5%'), marginTop:-wp('0.2%') , fontSize:wp('1.4%')}} />
        </View>
          </TouchableOpacity>
             </View>
              <View style={styles.frame}>
                <ScrollView showsVerticalScrollIndicator={false} >
                  <View style={{ flexDirection: 'row' }}>
                    <TextInput
                     style={{  backgroundColor: 'white',
                     borderBottomColor: '#ECECEC',
                     borderTopColor: '#ECECEC',
                     borderLeftColor:'#ECECEC',
                     borderRightColor:'#ECECEC',
                     borderWidth: wp('0.1%'),
                     borderRadius:wp('0.2%'),
                     marginLeft:wp('5%'),
                     height:wp('2%'),
                     width:wp('40.0%'),
                     color:'#C6C6C6',
                     fontWeight:'500' 
                     }}
                      placeholder="Search by product name"
                      value={searchProductName}
                      onChangeText={this.handleProductNameSearch}
                    />
                    <TextInput
                     style={{  backgroundColor: 'white',
                     borderBottomColor: '#ECECEC',
                     borderTopColor: '#ECECEC',
                     borderLeftColor:'#ECECEC',
                     borderRightColor:'#ECECEC',
                     borderWidth: wp('0.1%'),
                     borderRadius:wp('0.2%'),
                     marginLeft:wp('45%'),
                     height:wp('2%'),
                     width:wp('15.0%'),
                     color:'#C6C6C6',
                     fontWeight:'500' 
                     }}
                      placeholder="Search by product price"
                      value={searchProductPrice}
                      onChangeText={this.handleProductPriceSearch}
                    />
                  </View>
                  <LabTabs allProducts={filteredProducts} />
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={{ marginTop: wp('16%'), fontWeight: '500', fontSize: wp('0.8%') }}> Showing 1 to 9 of 50 entries </Text>
                    <View style={styles.containerone}>
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
                </ScrollView>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  projectsBgContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  frame: {
    borderWidth: wp('0.1%'),
    borderColor: '#ECECEC',
    padding: wp('2%'),
    height: hp('82%'),
    width: wp('96%'),
    marginLeft: wp('2.0%'),
    marginTop: wp('1.5%'),
    marginRight: wp('1.0%'),
    borderRadius: wp('0.2%'),
  },
  containerone: {
    flexDirection: 'row',
    backgroundColor: 'white',
    alignSelf: 'flex-end',
    marginTop: wp('12%'),
    marginLeft: wp('40%')
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

export default ProjectList;
