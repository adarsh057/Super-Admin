import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, TouchableOpacity, StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { EvilIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import Swiper from 'react-native-swiper';

const Designers = () => {
  const [designers, setDesigners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageIndex, setPageIndex] = useState(0);
  const [savedPostsCounts, setSavedPostsCounts] = useState([]);
  const [designerPostCounts, setDesignerPostCounts] = useState([]);
  const fetchDesignerPostCounts = async () => {
    try {
      const response = await fetch("http://localhost:9000/designerPostCount", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setDesignerPostCounts(data);
    } catch (error) {
      console.error("Error fetching designer post counts:", error);
    }
  }

  useEffect(() => {
    fetchDesignerPostCounts();
  }, []);
  useEffect(() => {
      const fetchSavedPostsCounts = async () => {
          try {
              const response = await fetch('http://localhost:9000/designers/superadminsavedposts');
              const data = await response.json();
              setSavedPostsCounts(data);
          } catch (error) {
              console.error('Error fetching saved posts counts:', error);
          }
      };

      fetchSavedPostsCounts();
  }, []);
  useEffect(() => {
    fetchDesignerData();
  }, [pageIndex]);

  const fetchDesignerData = async () => {
    try {
      const response = await fetch(`http://localhost:9000/designers/data?page=${pageIndex}&limit=30`);
      const data = await response.json();
      setDesigners(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const handleNextPage = () => {
    setPageIndex(pageIndex + 1);
  };

  const handlePrevPage = () => {
    if (pageIndex > 0) {
      setPageIndex(pageIndex - 1);
    }
  };

  const renderDesignerItem = (startIndex) => {
    return designers.slice(startIndex, startIndex + 30).map((item, index) => {
    const savedPostCount = savedPostsCounts.find(savedItem => savedItem.designerId === item.designer_id);
    const designerCount = designerPostCounts[item.designer_id] || 0;
      return (
        <View key={index} style={{ padding: 30, paddingHorizontal: 5.5, alignSelf: 'flex-start' }}>
        <View style={styles.profileContainer}>
          <EvilIcons name="user" size={wp('5%')} color="#000000" style={{ marginTop: -hp('1.0%') }} />
          <Text style={{ fontSize: wp('2%'), fontWeight: '600', }}>{item.desigener_name}</Text>
          <View style={{ flexDirection: 'row', marginTop: wp('2%'),  }}>
          <Text style={{ ...styles.statsText, marginLeft:-wp('0.5%')  }}>Posts - {designerCount}</Text> 
            {savedPostCount && (
              <View key={index} style={styles.designerItem}>
                <Text style={{ ...styles.statsText,  marginLeft:wp('14%') }}> Save -{savedPostCount.count}</Text>
              </View>
            )}
          </View>
          <View style={styles.followContainer}>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flexDirection: 'column', alignSelf: 'center' }}>
                <TouchableOpacity style={styles.followButton}>
                  <Text style={{ ...styles.followButtonText, marginTop: -wp('0.5%'), fontSize: wp('1%') }}>Follower</Text>
                </TouchableOpacity>
                <Text style={{ alignSelf: 'center' }}>{item.number_of_followers}</Text>
              </View>
              <View style={{ flexDirection: 'column', alignSelf: 'center' }}>
                <TouchableOpacity style={{ ...styles.followButton, backgroundColor: '#CEC2AB' }}>
                  <Text style={{ ...styles.followButtonText, marginTop: -wp('0.5%'), fontSize: wp('0.9%'), color: 'black', }}>Following</Text>
                </TouchableOpacity>
                <Text style={{ alignSelf: 'center' }}>{item.number_of_following}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      );
    });
  };
  
  

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
   
   <View style={styles.container}>
    <Text style={{ fontSize: wp('2.5%'), marginTop: wp('2.0%'), marginLeft: wp('2.0%'), fontWeight: "600", color: '#000000' }}>Designers</Text>
   <View style={styles.frame}>
      <ScrollView showsHorizontalScrollIndicator={false}>
    <Swiper loop={false} showsPagination={false} style={{ flex: 1 }}>
    <ScrollView showsHorizontalScrollIndicator={false}>
      <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
        {renderDesignerItem(0)}
      </View>
      <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
        {renderDesignerItem(30)}
      </View>
     <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 10 }}>
        <TouchableOpacity onPress={handlePrevPage} style={{ padding: 10 }}>
          <Text></Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNextPage} style={{ padding: 10 }}>
          <Text></Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </Swiper>
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
    </ScrollView>
    </View>
  </View>
  
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
  profileContainer: {
    alignItems: 'center',
    borderColor: '#ECECEC',
    borderWidth: wp('0.1%'),
    padding: wp('2%'),
    borderRadius: wp('1%'),
    height: wp('20%'),
    width: wp('30%'),
  },
  profileName: {
    marginTop: -wp('0%'),
    fontSize: wp('2%'),
    fontWeight: '600',
  },
  statsContainer: {
    marginTop: wp('2%'),
    alignItems: 'center',
  },
  statsText: {
    fontSize: wp('1.5%'),
    color: '#000000',
  },
  followContainer: {
    flexDirection: 'row',
    marginTop: wp('2%'),
    alignItems: 'center',
  },
  followButton: {
    marginHorizontal: wp('2%'),
    backgroundColor: '#C99780',
    paddingVertical: wp('1%'),
    paddingHorizontal: wp('3%'),
    borderRadius: wp('0.5%'),
    height: wp('2%'),
    width: wp('10%'),
  },
  
  followButtonText: {
    color: 'white',
  },
  followCount: {
    fontSize: wp('2%'),
  },
  containerone: {
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
export default Designers;
