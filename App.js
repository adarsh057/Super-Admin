import React ,{useEffect,useState}from 'react';
import {View,Text, Dimensions, Platform, StyleSheet,Image,Button, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from './Dashboard';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {Feather} from '@expo/vector-icons';
import {MaterialIcons} from'@expo/vector-icons';
import Registration from './Registration';
import Login from './Login';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DrawerContentScrollView, createDrawerNavigator,DrawerItemList } from '@react-navigation/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Tracking from './Tracking';
import Designers from './Designers';
import Vendors from './Vendors';
import SiteEngineers from './SiteEngineers';
import ViewProfile from './ViewProfile';
import Projects from './Projects';
import {Foundation} from '@expo/vector-icons';
import Projectsongoing from './Projectsongoing';
import Projectsupcoming from './Projectsupcoming';
import UserProfile from './UserProfile';
import ProjectList from './ProductList/ProjectList';
import Dashboardone from './Dashboardone';
import Listview from './ProductList/Listview';
import ForgotPasswordScreen from './ForgotPasswordScreen';
import Users from './Users';







const Tab =createBottomTabNavigator();
const Drawer =createDrawerNavigator();
const wp = widthPercent => {
  const screenWidth = Dimensions.get('window').width;
  return (screenWidth * widthPercent) / 100;
};

const CustomDrawerContent = ({ ...props }) => {
  
  return (
    <View style={styles.icon}>
      <Image source={require('./assets/logo.jpeg')} style={styles.logoicon} />
     <DrawerContentScrollView>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <TouchableOpacity style={{...styles.logoout, marginTop:300, alignSelf:'center'}}>
      <Text style={{alignSelf:'center', color:'white' , fontSize:25}}>Logout </Text>
      </TouchableOpacity>
    </View>
  );
};
const hp = heightPercent => {
  const screenHeight = Dimensions.get('window').height;
  return (screenHeight * heightPercent) / 100;
};

const BottomNavigation =() =>(
  
<Tab.Navigator>
    <Tab.Screen name="Dashboard " componesnt={Dashboard} options={{ tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="view-dashboard-outline" color={'black'} size={size} />) }} />
    <Tab.Screen name="Login" component={Login} options={{ tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="login" color={'black'} size={size} />) }} />
    <Tab.Screen name="Registration" component={Registration} options={{ tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="registered-trademark" color={'black'} size={size} />) }} />
    <Tab.Screen name="Tracking" component={Tracking} options={{ tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="registered-trademark" color={'black'} size={size} />) }}/>
    <Tab.Screen name="Designers" component={Designers} options={{ tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="pencil-ruler" color={'black'} size={size} />) }}/>
   <Tab.Screen name="Vendors" component={Vendors} options={{ tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="account-convert" color={'black'} size={size} />) }}/>
    <Tab.Screen name="SiteEngineers" component={SiteEngineers}   options={{  tabBarIcon: ({ color, size }) => (<MaterialIcons name="engineering" color={'black'} size={size} />), }}/>
  <Tab.Screen  name="Users" component={Users} options={{  tabBarIcon: ({ color, size }) => (<Feather name="user" color={'black'} size={size} />) }}/>
  <Tab.Screen name="ViewProfile" component={ViewProfile} options={{ tabBarIcon: ({ color, size }) => (<Feather name="user" color={'black'} size={size} />) }}/>
  <Tab.Screen name="Projects" component={Projects} options={{ tabBarIcon: ({ color, size }) => (<Foundation name="clipboard-pencil"  color={'black'} size={size} />)}} />
  <Tab.Screen name="Projectsongoing" component={Projectsongoing} options={{ tabBarIcon: ({ color, size }) => (<Foundation name="clipboard-pencil"  color={'black'} size={size} />)}} />
  <Tab.Screen name="Projectsupcoming" component={Projectsupcoming} options={{ tabBarIcon: ({ color, size }) => (<Foundation name="clipboard-pencil"  color={'black'} size={size} />)}} />
  <Tab.Screen name="ProjectList" component={ProjectList} options={{ tabBarIcon: ({ color, size }) => (<Foundation name="clipboard-pencil"  color={'black'} size={size} />)}} />
  <Tab.Screen name="Listview" component={Listview} options={{ tabBarIcon: ({ color, size }) => (<Feather name="menu"  color={'black'} size={size} />)}} />
  <Tab.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} options={{ tabBarIcon: ({ color, size }) => (<Feather name="menu"  color={'black'} size={size} />)}} />
  <Tab.Screen name="Dashboardone " componesnt={Dashboardone} options={{ tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="view-dashboard-outline" color={'black'} size={size} />) }} />
  </Tab.Navigator>
)
const SidebarNavigation =() => (

<Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}> 


  <Drawer.Screen name="Dashboard" component={Dashboard} options={{title:'', drawerIcon:({color, size})=>(
    
<View style={{flexDirection:'column'}}>
<View style={styles.line}>
    <View style={[styles.linebox, { width: wp(1300), height: hp(0.1) }]} />
    </View>
    <View style={{flexDirection:'row', marginTop:10}}>
<MaterialCommunityIcons name="view-dashboard-outline" color={'black'} size={size}/>
<Text style={{fontWeight:"600", marginLeft:50, fontSize:15}}>Dashboard</Text>
</View>
<View style={{...styles.line, marginTop:10}}>
    <View style={[styles.linebox, { width: wp(1300), height: hp(0.1) }]} />
    </View>
</View>

  )}}/> 


<Drawer.Screen name="Login" component={Login} options={{title:'', drawerIcon:({color, size})=>(
<View style={{alignItems:'center' ,flexDirection:'row'}}>
<MaterialCommunityIcons name="login" color={'black'} size={size}/>
<Text style={{fontWeight:"600", marginLeft:50, fontSize:15}}>Login</Text>
<MaterialCommunityIcons name="chevron-right" color={'black'} size={size} style={{marginLeft:150}}/>
</View>
 )}}/> 


<Drawer.Screen name="Registration" component={Registration} options={{title:'', drawerIcon:({color, size})=>(
<View style={{alignItems:'center' ,flexDirection:'row'}}>
<MaterialCommunityIcons name="registered-trademark" color={'black'} size={size}/>
<Text style={{fontWeight:"600", marginLeft:50, fontSize:15}}>Registration</Text>
<MaterialCommunityIcons name="chevron-right" color={'black'} size={size} style={{marginLeft:105}}/>
</View>

  )}}/> 

<Drawer.Screen name="Tracking" component={Tracking} options={{title:'', drawerIcon:({color, size})=>(
<View style={{alignItems:'center' ,flexDirection:'row'}}>
<Feather name="map-pin" color={'black'} size={size}/>
<Text style={{fontWeight:"600", marginLeft:50, fontSize:15}}>Tracker</Text>
<MaterialCommunityIcons name="chevron-right" color={'black'} size={size} style={{marginLeft:140}}/>
</View>

  )}}/> 

<Drawer.Screen name="Designers" component={Designers} options={{title:'', drawerIcon:({color, size})=>(
<View style={{alignItems:'center' ,flexDirection:'row'}}>
<MaterialCommunityIcons name="pencil-ruler" color={'black'} size={size}/>
<Text style={{fontWeight:"600", marginLeft:50, fontSize:15}}>Designers</Text>
<MaterialCommunityIcons name="chevron-right" color={'black'} size={size} style={{marginLeft:120}}/>
</View>

  )}}/> 

<Drawer.Screen name="Vendors" component={Vendors} options={{title:'', drawerIcon:({color, size})=>(
<View style={{alignItems:'center' ,flexDirection:'row'}}>
<MaterialCommunityIcons name="account-convert" color={'black'} size={size}/>
<Text style={{fontWeight:"600", marginLeft:50, fontSize:15}}>Vendors</Text>
<MaterialCommunityIcons name="chevron-right" color={'black'} size={size} style={{marginLeft:130}}/>
</View>

  )}}/>

 <Drawer.Screen name="SiteEngineers" component={SiteEngineers} options={{ title:'', drawerIcon:({color, size})=>(
<View style={{alignItems:'center' ,flexDirection:'row'}}>
<MaterialIcons name="engineering" color={'black'} size={size}/>
<Text style={{fontWeight:"600", marginLeft:50, fontSize:15}}>Site Engineers</Text>
<MaterialCommunityIcons name="chevron-right" color={'black'} size={size} style={{marginLeft:90}}/>
</View>

  )}}/>

<Drawer.Screen name="Users" component={Users} options={{title:'', drawerIcon:({color, size})=>(
<View style={{alignItems:'center' ,flexDirection:'row'}}>
<Feather name="user" color={'black'} size={size}/>
<Text style={{fontWeight:"600", marginLeft:50, fontSize:15}}>Users</Text>
<MaterialCommunityIcons name="chevron-right" color={'black'} size={size} style={{marginLeft:150}}/>
</View>

  )}}/>

<Drawer.Screen name="ViewProfile" component={ViewProfile} options={{title:'', drawerIcon:({color, size})=>(
<View style={{alignItems:'center' ,flexDirection:'row'}}>
<Feather name="user" color={'black'} size={size}/>
<Text style={{fontWeight:"600", marginLeft:50, fontSize:15}}>View Profile</Text>
<MaterialCommunityIcons name="chevron-right" color={'black'} size={size} style={{marginLeft:105}}/>
</View>

  )}}/>

<Drawer.Screen name="Projects" component={Projects} options={{title:'', drawerIcon:({color, size})=>(
<View style={{alignItems:'center' ,flexDirection:'row'}}>
<Foundation name="clipboard-pencil" color={'black'} size={size}/>
<Text style={{fontWeight:"600", marginLeft:50, fontSize:15}}>Projects</Text>
<MaterialCommunityIcons name="chevron-right" color={'black'} size={size} style={{marginLeft:135}}/>
</View>

  )}}/>


<Drawer.Screen name="Projectsupcoming" component={Projectsupcoming} options={{title:'', drawerIcon:({color, size})=>(
<View style={{alignItems:'center' ,flexDirection:'row'}}>
<Foundation name="clipboard-pencil" color={'black'} size={size}/>
<Text style={{fontWeight:"600", marginLeft:50, fontSize:15}}>Projects upcoming</Text>
<MaterialCommunityIcons name="chevron-right" color={'black'} size={size} style={{marginLeft:60}}/>
</View>

  )}}/>












<Drawer.Screen name="Projectsongoing" component={Projectsongoing} options={{title:'', drawerIcon:({color, size})=>(
<View style={{alignItems:'center' ,flexDirection:'row'}}>
<Foundation name="clipboard-pencil" color={'black'} size={size}/>
<Text style={{fontWeight:"600", marginLeft:50, fontSize:15}}>Projects ongoing</Text>
<MaterialCommunityIcons name="chevron-right" color={'black'} size={size} style={{marginLeft:70}}/>
</View>

  )}}/>

<Drawer.Screen name="ProjectList" component={ProjectList} options={{title:'', drawerIcon:({color, size})=>(
<View style={{alignItems:'center' ,flexDirection:'row'}}>
<Feather name="shopping-bag" color={'black'} size={size}/>
<Text style={{fontWeight:"600", marginLeft:50, fontSize:15}}>Products</Text>
<MaterialCommunityIcons name="chevron-right" color={'black'} size={size} style={{marginLeft:120}}/>
</View>

  )}}/>
  <Drawer.Screen name="Listview" component={Listview} options={{title:'', drawerIcon:({color, size})=>(
<View style={{alignItems:'center' ,flexDirection:'row'}}>
<Feather name="menu" color={'black'} size={size}/>
<Text style={{fontWeight:"600", marginLeft:50, fontSize:15}}>List view</Text>
<MaterialCommunityIcons name="chevron-right" color={'black'} size={size} style={{marginLeft:118}}/>
</View>

  )}}/>


<Drawer.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} options={{title:'', drawerIcon:({color, size})=>(
<View style={{alignItems:'center' ,flexDirection:'row'}}>
<MaterialCommunityIcons name="login" color={'black'} size={size}/>
<Text style={{fontWeight:"600", marginLeft:50, fontSize:15}}>Forgot Password</Text>
<MaterialCommunityIcons name="chevron-right" color={'black'} size={size} style={{marginLeft:65}}/>
</View>

  )}}/>

<Drawer.Screen name="Dashboardone" component={Dashboardone} options={{title:'', drawerIcon:({color, size})=>(
    
    <View style={{flexDirection:'column'}}>
    <View style={styles.line}>
        <View style={[styles.linebox, { width: wp(1300), height: hp(0.1) }]} />
        </View>
        <View style={{flexDirection:'row', marginTop:10}}>
    <MaterialCommunityIcons name="view-dashboard-outline" color={'black'} size={size}/>
    <Text style={{fontWeight:"600", marginLeft:50, fontSize:15}}>Dashboard One</Text>
    </View>
    <View style={{...styles.line, marginTop:10}}>
        <View style={[styles.linebox, { width: wp(1300), height: hp(0.1) }]} />
        </View>
    </View>
    
      )}}/> 




</Drawer.Navigator>

);

const App = () => {
  
 const [screenWidth,setScreenWidth]=useState(Dimensions.get('window').width);


useEffect(() =>{
const updateScreenWidth =() =>{
  setScreenWidth(Dimensions.get('window').width);
};
Dimensions.addEventListener('change',updateScreenWidth);
return() =>{
  Dimensions.removeEventListener('change', updateScreenWidth);
};

},[]);


  return (
    
    <>
  {Platform.OS==='web'?
   <NavigationContainer>
{screenWidth>=600 ? <SidebarNavigation/>:<BottomNavigation/>}
   </NavigationContainer> :<GestureHandlerRootView>
<NavigationContainer>
{screenWidth>=600?<SidebarNavigation/>:<BottomNavigation/>}
</NavigationContainer>
</GestureHandlerRootView>
  } 
   </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white',
  },
  authContainer: {
    width: '80%',
    maxWidth: 400,
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    borderRadius: 4,
  },
  buttonContainer: {
    marginBottom: 16,
  },
  toggleText: {
    color: '#3498db',
    textAlign: 'center',
  },
  bottomContainer: {
    marginTop: 20,
  },
  emailText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  line: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  linebox: {
    backgroundColor: '#ECECEC',
  },
  containericon: {
    flex: 1,
  },
  logoicon: {
    width: "40%",
    height: 30,
    resizeMode: "cover",
    alignSelf:'center',
    marginTop:10,
  },
  buttonContainer: {
    backgroundColor: '#C99780',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  logoout:{
    backgroundColor:'#C99780',
    width:150,
    height:40,
    borderRadius:8,
  }
});

export default App;
