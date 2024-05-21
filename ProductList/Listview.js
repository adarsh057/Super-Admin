import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Picker } from 'react-native';
import { Icon } from '@iconify/react';
import { SearchBar } from 'react-native-elements';
import { Table, Row, Rows } from 'react-native-table-component';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Cookies from 'js-cookie';
import LabTabs from './index';

class Listview extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      allProducts: [],
      quantity: '',
      selectedQuantity: '',
      searchQuery: '',
      title: '',
      filteredData: [],
    };
  }

  handleSearch = (query) => {
    this.setState({ searchQuery: query }, () => {
      this.filterData();
    });
  };

  filterData = () => {
    const { allProducts, searchQuery } = this.state;
    const filteredData = allProducts.filter(item => {
      return Object.values(item).some(value => {
        if (value !== null && value !== undefined) {
          return value.toString().toLowerCase().includes(searchQuery.toLowerCase());
        }
        return false;
      });
    });
    this.setState({ filteredData });
  };

  componentDidMount = () => {
    const jwtToken = Cookies.get('vendorToken');

    const fetchData = async () => {
      try {
        const materialResponse = await fetch('http://localhost:9000/vendorAllProducts', {
          method: 'GET',
          headers: {
            'Content-Type': 'Application/json',
            Authorization: `Bearer ${jwtToken}`,
          },
        });
        const materialData = await materialResponse.json();
        this.setState({ allProducts: materialData });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  };

  render() {
    const { navigation } = this.props;
    const { searchQuery, filteredData, allProducts, selectedQuantity } = this.state;
    const dataToDisplay = searchQuery ? filteredData : allProducts;
    const formatTimestampToDate = (timestamp) => {
      const date = new Date(timestamp);
      const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
      return formattedDate;
    };
    const Dropdown = () => {
      return (
        <View style={{ marginLeft: 70 }}>
          <Picker
            style={{ width: 60, height: 30, backgroundColor: '#EDEDED', borderColor: 'white' }}
           >
            <Picker.Item label="All" value="" />
            <Picker.Item label="5" value="5" />
            <Picker.Item label="10" value="10" />
            <Picker.Item label="15" value="15" />
          </Picker>
        </View>
      );
    };

    let tableData = dataToDisplay.map(item => ([
      formatTimestampToDate(item.createdAt),
      item.thumbnail,
      item.title,
      item.price,
      item.discount,
      item.purchased,
      item.quantity,
      item.status,
      <Dropdown key="dropdown" />,
    ]));

   
    if (selectedQuantity) {
      tableData = tableData.slice(0, parseInt(selectedQuantity));
    }

    return (
      <View style={styles.container}>
        <View style={{flexDirection:'row'}}>
          <Text style={{ fontSize: wp('1.1%'), marginTop: wp('2.0%'), marginLeft: wp('2.0%'), fontWeight: "700", color: '#000000' }}>Product</Text>
          <TouchableOpacity onPress={() => navigation.navigate('ProjectList')}>
            <View style={{flexDirection:'row', marginTop:wp('2.2%'), marginLeft:wp('85%')}}>
              <Text style={{fontWeight:'400' , fontSize:wp('0.7%')}}>Grid View</Text>
              <Icon icon="humbleicons:view-grid"  style={{color:'black',marginLeft:wp('0.5%'), marginTop:-wp('0.2%') , fontSize:wp('1.4%')}} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.frame}>
          <View style={{flexDirection:'row'}}>
            <Text style={{fontWeight:'500'}}>Show</Text>
            <View style={{...styles.Framethirteen, marginLeft:wp('1.0%'), marginTop:-wp('0.2%')}}>
              <Picker
                 selectedValue={selectedQuantity}
                 onValueChange={(itemValue) => this.setState({ selectedQuantity: itemValue })}
                style={styles.PickerStyle}
              >
                <Picker.Item label="QTY" value="" />
                <Picker.Item label="5" value="5" />
                <Picker.Item label="10" value="10" />
                <Picker.Item label="15" value="15" />
              </Picker>
            </View>
            <Text style={{fontWeight:'500',marginLeft:wp('0.4%')}}>Entries</Text>
            <View style={{flexDirection:'row', marginLeft:wp('60%')}}>
              <Text style={{fontWeight:'500', marginTop:wp('0.1%')}}>Search</Text>
              <SearchBar
                placeholder="Search..."
                onChangeText={this.handleSearch}
                value={searchQuery}
                containerStyle={{
                  backgroundColor: 'white',
                  borderBottomColor: 'white',
                  borderTopColor: 'white',
                  borderLeftColor:'white',
                  borderRightColor:'white',
                  borderWidth: 0.5,
                  borderRadius:5,
                  marginTop:-wp('1.0%'),
                  height:60,
                  width:400,
                }}
                inputContainerStyle={{ backgroundColor: '#EDEDED' }}
                showLoading={false}
              />
            </View>
          </View>
          <View>
            <Table borderStyle={{ borderWidth: 2, borderColor: 'white' }} style={styles.table}>
              <Row
                data={['Date', 'Product', 'Name', 'Price', 'Discount', 'Purchased', 'Stock', 'Status', 'Status']}
                style={{ ...styles.row, backgroundColor: 'white' }}
                textStyle={styles.text}
              />
              <Rows data={tableData} textStyle={styles.text} style={styles.row} />
            </Table>
          </View>
         <View>
          <View style={{flexDirection:'row', marginTop:wp('2%')}}>
            <Text style={{marginTop:wp('15%'), fontWeight:'500' , fontSize:wp('0.8%')}}> Showing 1 to 9 of 50 entries </Text>
            <View style={{...styles.containerone}}>
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
        </View>
      </View>
    );
  }
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
    marginTop: wp('10%'),
    marginLeft:wp('40%')
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
  table: {
    flex: 1, 
    padding: 16, 
    paddingTop: 30, 
    backgroundColor: 'white' 
  },
  row: {
    height: 40, 
    backgroundColor: 'white', 
    borderBottomColor: '#FCF5FC', 
    borderBottomWidth: 3 
  },
  text: {
    textAlign: 'center', 
    fontWeight:'500'
  },
  PickerStyle:{
    backgroundColor:'#EDEDED',
    borderColor:'white',
  }
});

export default Listview;
