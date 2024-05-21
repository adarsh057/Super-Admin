import React,{useEffect,useState} from 'react';
import { View, Text, StyleSheet,TouchableOpacity,Image,ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { AntDesign } from '@expo/vector-icons';
import { Bar } from "react-native-progress";
import { useNavigation } from '@react-navigation/native';
import axios from 'axios'; 
const Projectsupcoming = () => {
  const navigation = useNavigation(); 
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get('http://localhost:9000/upcomingprojectssuperadmin');
      setProjects(response.data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  const renderProjects = () => {
    const rows = [];
    for (let i = 0; i < projects.length; i += 4) {
      const rowProjects = projects.slice(i, i + 4);
      rows.push(
        <View key={i} style={styles.cardRowtitle}>
          {rowProjects.map(project => (
            <View key={project.id} style={styles.cardtitle}>
            <View style={[styles.frameone, { backgroundColor: '#D9D9D9' }]}></View>
             <View style={{...styles.framebox,flexDirection:'row', backgroundColor:'#ECECEC'}}>
              <Text style={{fontWeight: '600',marginTop:wp('0.5%'),marginLeft:wp('0.5%')}}>{project.title}</Text>
              <Text style={{ fontSize: wp('0.7%'),fontWeight: '600', marginLeft: wp('4.3%'),marginTop:wp('0.2%'),color: 'black', }}>0%</Text>
          <Bar
            progress={0.0}
            width={wp('6%')}
            height={wp('0.2%')}
            color="#c69679"
            unfilledColor="#D9D9D9"
            borderWidth={0}
            style={{ marginLeft: wp('0.2%'), marginTop: wp('0.3%') }}
          />
          </View>
            </View>
          ))}
        </View>
      );
    }
    return rows;
  };
  return(
  <View style={styles.container}>
    <Text style={{ fontSize: wp('1.1%'), marginTop: wp('2.0%'), marginLeft: wp('2.0%'), fontWeight: "600", color: '#000000' }}>Projects > upcoming</Text>
    <View style={styles.frame}>
   <ScrollView>
    {renderProjects()}
  </ScrollView>
    </View>
  </View>
);
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
    height: hp('75%'),
    width: wp('96%'),
    marginLeft: wp('2.0%'),
    marginTop: wp('1.5%'),
    marginRight: wp('1.0%'),
    borderRadius: wp('0.2%'),
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:wp('1.0%'),
  },
  text: {
    color: 'black',
    fontSize: wp('1.0%'),
    marginLeft: wp('2%'),
  },
  containerone: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop:wp('3.5%')
  },
  frameone: {
    width: wp('20%'),
    height: hp('24%'),
    marginVertical: hp('0%'), 
    justifyContent: 'center',
    alignItems: 'center',
  },
  frametwo: {
    width: wp('20%'),
    height: hp('5%'),
    marginVertical: hp('0%'), 
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row', 
  },
  text: {
    color: 'white',
    fontSize: wp('1.5%'), 
  },
  containertwo: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop:wp('3.5%')
  },
  framethree: {
    width: wp('20%'),
    height: hp('24%'),
    marginVertical: hp('0%'), 
    justifyContent: 'center',
    alignItems: 'center',
  },
  framefour: {
    width: wp('20%'),
    height: hp('5%'),
    marginVertical: hp('0%'), 
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row', 
  },
  cardRowtitle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  cardtitle: {
    borderWidth: 1,
    borderColor: 'transparent',
    backgroundColor:'transparent',
    padding: 10,
    width: '24%',
    alignItems: 'center',
    flexDirection:'column',
    
  },
  framebox:{
    width: '95.5%',
    height:'15%',
  }
 
});

export default Projectsupcoming;
