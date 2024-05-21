import React, { useRef, useState } from 'react';
import { View, Text, Dimensions, TouchableOpacity, TextInput, Image, StyleSheet, ImageBackground, SafeAreaView ,Button,Alert} from 'react-native';
import { widthPercentageToDP as wp,heightPercentageToDP as hp,} from 'react-native-responsive-screen';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native'; 


const Login = () => {
  
  const [toggleOtpCard, setToggleOtpCard] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const navigation = useNavigation(); 
  const [signupMessage,setSignupMessage] =useState('');
  const [signupMessageone,setSignupMessageone] =useState('');
  const [signupMessagetwo,setSignupMessagetwo] =useState('');
  const handleLogin = () => {
    setfirstname('');
    setlastname('');
    setusername('');
    setpassword('');
    setrepassword('');
    setErrorName(firstname.trim() ? '' : 'Enter your first name');
      setErrorlastName(lastname.trim() ? '' : 'Enter your last name');
      setErroruserName(username.trim() ? '' : 'Enter user name');
      setErrorpassword(password.trim() ? '' : 'Enter a Password');
      setErrorrepassword(
        repassword.trim()
          ? repassword === password
            ? ''
            : 'Passwords do not match'
          : 'Re-enter Password'
      );
  
     
      if (
        !firstname ||
        !lastname ||
        !username ||
        !password ||
        !repassword ||
        repassword !== password
      ) {
        
    axios.post('http://localhost:9000/login/', {
      username: username,
      password: password
    })
    .then(response => {
      
      setSignupMessage('SignIn successful ');
      navigation.navigate('Dashboardone', { username: username });
        setTimeout(() => {
        setSignupMessage('');
        setSignupMessage(false);
      }, 2000);
      return;
    })
    .catch(error => {
      setSignupMessageone('SignIn Failed ', 'Invalid username or password');
      setTimeout(() => {
        setSignupMessageone('');
        setSignupMessageone(false);
      }, 1000);
      return;
      
    });
  }
  };
  
 const onChangeVerifyOtp = (text) => {
    setCode(text);
  };
const screenWidth = Dimensions.get('window').width;
  const largeScreenWidth = 1024;
const [firstname, setfirstname] = useState('');
  const [errorName, setErrorName] = useState('');
  const[lastname,setlastname]=useState('');
  const[errorlastName,setErrorlastName]=useState('');
  const[username,setusername]=useState('');
  const[erroruserName,setErroruserName]=useState('');
  const[password,setpassword]=useState('');
  const[errorpassword,setErrorpassword]=useState('');
  const[repassword,setrepassword]=useState('');
  const[errorrepassword,setErrorrepassword]=useState('');



  const handlefirstname = (text) => {
    setfirstname(text);
    if (!text.trim()) {
      setErrorName('Enter your first name');
      return;
    } else {
      setErrorName('');
    }
  };
  const handlelastname = (text) => {
    setlastname(text);
    if (!text.trim()) {
      setErrorlastName('Enter your last name');
      return;
    } else {
      setErrorlastName('');
    }
  };
  const handleusername = (text) => {
    setusername(text);
    if (!text.trim()) {
      setErroruserName('Enter user name');
      return;
    } else {
      setErroruserName('');
    }
  };
  const handlepassword = (text) => {
    setpassword(text);
    if (!text.trim()) {
      setErrorpassword('Enter a Password');
      return;
    } else {
      setErrorpassword('');
    }
  };
  const handlerepassword = (text) => {
    setrepassword(text);
    if (!text.trim() ) {
      setErrorrepassword('Re enter Password');
      return;
    }
    else if(text!==password){
      setErrorrepassword('Passwords do not match');
      return;
    } 
    else {
      setErrorrepassword('');
    }
  };
  
  

return (
    <SafeAreaView style={styles.container}>
     
    
      {screenWidth > largeScreenWidth ? (
        <View style={styles.sideImageView}>
          <Image source={require("./assets/superadminbackgroundimagescreen.png")} style={styles.interiorSideImage} />
        </View>
      ) : null}
  
      <ImageBackground source={require("./assets/Login.png")} style={styles.imageContainer} resizeMode='cover'>
        {toggleOtpCard ? (
          <View style={[styles.loginCardContainer, screenWidth > 786 ? styles.largerScreen : styles.smallerScreen]} >
            <Image source={require("./assets/logo.jpeg")} style={styles.logoImage} />
            <View>
            <View style={styles.contentframe}>
      <View style={{flexDirection:'row'}}>
     <View style={styles.horizontallinezero}></View>
     </View>
    </View>
   
     <View style={{...styles.containertwo,marginTop:-wp('0.2%')}}>
      <Text style={styles.labeltwo}>User Name</Text>
      <View style={styles.frametwo}>
        <TextInput style={styles.inputtwo} value={username}
         onChangeText={handleusername} placeholder="User Name" />
      </View>
      {erroruserName && (
              <Text style={{ color:'red', marginLeft:wp('2.5%')}}>*User Name is required</Text>
            )}
    </View>
     <View style={{...styles.containerthree, marginTop:wp('2.5%')}}>
      <Text style={styles.labelthree}>Password</Text>
      <View style={styles.framethree}>
        <TextInput style={styles.inputthree}  value={password}
         secureTextEntry={true}
         onChangeText={handlepassword} placeholder="Password" />
      </View>
      {errorpassword && (
              <Text style={{ color:'red', marginLeft:wp('2.5%')}}>*Password is Required</Text>
            )}
    </View>
    <TouchableOpacity onPress={() => navigation.navigate('ForgotPasswordScreen')}>
    <Text style={{color:'#888888' , fontSize:wp('0.6%'), fontWeight:'500', alignSelf:'flex-end', marginTop:wp('1.4%')}}> Forgot Password ?</Text>
    </TouchableOpacity>
    </View>
    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop:wp('1.5%') }}>
  <View style={{...styles.horizontalline,marginTop:wp('0.2%'), marginRight:wp('2.5%')}}></View>
  <Text>or</Text>
  <View style={{...styles.horizontalline,marginTop:wp('0.2%'), marginLeft:wp('2.5%')}}></View>
</View>
    <View>
      <View style={styles.buttonContainer}>
        <Button  onPress={handleLogin} title="Login" color="#C99780"  />
      </View>
    </View>
    <Text >{signupMessage}</Text>
    <Text >{signupMessageone}</Text>
     <View style={{...styles.signInbutton, marginTop:-wp('8%')}}>
      <Text style={styles.textaccount}>Don't Have an account ?</Text>
      <TouchableOpacity style={styles.signin} onPress={() => navigation.navigate('Registration')}>
        <Text style={styles.buttonTextsignin}>Sign Up</Text>
      </TouchableOpacity>
    </View>
            
          </View>
        ) : (
          <View style={[styles.loginCardContainer, screenWidth > 786 ? styles.largerScreen : styles.smallerScreen]} >
            <Image source={require("./assets/logo.jpeg")} style={styles.logoImage} />
            <View>
              <TextInput style={styles.input} placeholder="Enter OTP" type="number" onChangeText={onChangeVerifyOtp} />
            </View>
            <Text style={styles.errorText}>{errorMessage}</Text>
            <Text style={styles.signupLinkText}>Don't have an Account</Text>
          </View>
        )}
      </ImageBackground>
    </SafeAreaView>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: "row",
    width: '100%',
    height: '100%',
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: "row",
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  sideImageView: {
    width: "65%",
  },
  loginCardOuterImage: {
    height: "100%",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  loginCardContainer: {
    height: 350,
    backgroundColor: '#ffffff',
    boxShadow: 'brown',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  largerScreen: {
    width: 500,
    height: 800,
    backgroundColor: 'white',
    shadowColor: 'gray',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 5,
  },
  smallerScreen: {
    width: "80%",
    backgroundColor: 'white',
    shadowColor: 'gray',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 5,
  },
  logoImage: {
    height: "8%",
    width: "90%",
    resizeMode: "contain",
    marginTop:wp('4%'),
  }
  , interiorSideImage: {
    height: "100%",
    width: "100%",
    resizeMode: "cover"
  },
  input: {
    width: 300,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    marginBottom: 20,
    borderRadius: 3
  },
  optButton: {
    backgroundColor: '#cb937e',
    padding: 10,
    borderRadius: 3,
    textAlign: "center"
  },
  customButtonText: {
    color: "#ffffff",
    textAlign: "center"
  },
  signupLinkText: {
    color: "black",
    fontSize: 10,
    textDecorationLine: "underline",
    marginBottom: 10

  },
  sideLogoImage: {
    height: 'auto',
    width: '50%'
  },
  Frametwo: {
    borderWidth: 1,
    backgroundColor: '#ECECEC',
    borderColor:'#DADADA',
    padding: 10,
    width:wp('15%'),
    borderRadius: 4,
    marginLeft:-wp('1.5%'),
    marginRight:wp('6.5%'),
    marginTop:wp('0.5%'),
    height: hp('3.0%'),
  },
  TextInputtwo:
  {
      fontWeight:"500",
  },
  containerzero: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelzero: {
    fontWeight: 600,
    marginBottom: 10,
    marginLeft:-100,
  },
  framezero: {
    borderWidth: 1,
    backgroundColor: '#ECECEC',
    borderColor:'white',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  inputzero: {
    width: '100%',
    height: 40,
    color:'#B6B6B6',
  },
  containerone: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelone: {
    fontWeight: 600,
    marginBottom: 10,
    marginLeft:-100,
  },
  frameone: {
    borderWidth: 1,
    backgroundColor: '#ECECEC',
    borderColor:'white',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  inputone: {
    width: '100%',
    height: 40,
    color:'#B6B6B6',
  },
  containertwo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  labeltwo: {
    fontWeight: 600,
    marginBottom: 10,
    alignSelf:'flex-start',
    marginLeft:wp('1%')
  },
  frametwo: {
    borderWidth: 1,
    backgroundColor: '#ECECEC',
    borderColor:'white',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width:wp('20%'),
  },
  inputtwo: {
    width: '100%',
    height: 40,
    color:'#B6B6B6',
  },
  containerthree: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelthree: {
    fontWeight: 600,
    marginBottom: 10,
    alignSelf:'flex-start',
    marginLeft:wp('1%')
  },
  framethree: {
    borderWidth: 1,
    backgroundColor: '#ECECEC',
    borderColor:'white',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width:wp('20%'),
  },
  inputthree: {
    width: '100%',
    height: 40,
    color:'#B6B6B6',
  },
  containerfour: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelfour: {
    fontWeight: 600,
    marginBottom: 10,
    marginLeft:-100,
  },
  framefour: {
    borderWidth: 1,
    backgroundColor: '#ECECEC',
    borderColor:'white',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  inputfour: {
    width: '100%',
    height: 40,
    color:'#B6B6B6',
  },
  orframe: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 8,
  },
  horizontalline:{
    width:90,
    borderBottomWidth:4,
    borderColor:'#ECECEC',
  },
    horizontallineone:{
    width:90,
    borderBottomWidth:2.5,
    borderColor:'#ECECEC',
  },
  buttonContainer: {
    backgroundColor: '#C99780',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop:wp('5%'),
    width:wp('15%'),
    marginTop:-wp('0.5%')
  },
  signInbutton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:-wp('4.0%'),
  },
  textaccount: {
    flex: 1, 
    color: 'black',
    fontSize: 16,
  },
  signin: {
    backgroundColor: '#ECECEC',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonTextsignin: {
    color: 'black', 
    fontSize: 16,
  },
  contentframe: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 8,
  },
  horizontalline:{
    width:90,
    borderBottomWidth:2.5,
    borderColor:'#ECECEC',
    alignSelf:'Center'
  },
  horizontallinezero:{
    width:400,
    borderBottomWidth:1.5,
    borderColor:'#ECECEC',
    alignSelf:'Center',
    marginTop:-wp('5.0%')
  }
});
