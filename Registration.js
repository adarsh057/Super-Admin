import React, { useRef, useState } from 'react';
import { View, Text, Dimensions, TouchableOpacity, TextInput, Image, StyleSheet, ImageBackground, SafeAreaView ,Button} from 'react-native';
import { widthPercentageToDP as wp,heightPercentageToDP as hp,} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native'; 
const Registration = () => {
  const navigation = useNavigation(); 
const [phoneNumber, setPhoneNumber] = useState('');
  const [code, setCode] = useState('');
  const [verificationId, setVerificationId] = useState(null);
  const [toggleOtpCard, setToggleOtpCard] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const recaptchaVerifier = useRef(null);

  const onChangePhoneNumber = (text) => {
    setPhoneNumber(text);
  };

  const onChangeVerifyOtp = (text) => {
    setCode(text);
  };

  const screenWidth = Dimensions.get('window').width;
  const largeScreenWidth = 1024;
  const [signupMessage,setSignupMessage] =useState('');
  const [signupMessageone,setSignupMessageone] =useState('');
  const [signupMessagetwo,setSignupMessagetwo] =useState('');

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
  
  const handleSignup = async () => {

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
        return;
      }

    try {
      const response = await fetch('http://localhost:9000/register1/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          repassword:repassword,
          password:password,
          username:username,
          lastname:lastname,
          firstname:firstname,
          
         
        }),
      });

      if (response.ok) {
        
        setSignupMessage('Signup successful ' , response);
        setTimeout(() => {
          setSignupMessage('');
          setSignupMessage(false);
        }, 2000);
      } else {
        setSignupMessageone('Signup failed', await response.text());
        setTimeout(() => {
          setSignupMessageone('');
        setSignupMessageone(false);
        }, 2000);
      }
    } catch (error) {
      setSignupMessagetwo('Error during signup', error.message);
      setTimeout(() => {
        setSignupMessagetwo('');
        setSignupMessagetwo(false);
      }, 2000);
    }
  
  
  };
  
return (
    <SafeAreaView style={styles.container}>
     {screenWidth > largeScreenWidth ? (
        <View style={styles.sideImageView}>
          <Image source={require("./assets/Superadminregistration.png")} style={styles.interiorSideImage} />
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
    <Text style={{...styles.labelaccount, alignSelf:'center'}}>Create an account</Text>
    <View style={{flexDirection:'row', marginTop:wp('1.5%')}}>
    <View style={styles.containerzero}>
      <Text style={styles.labelzero}>First Name</Text>
      <View style={styles.framezero}>
        <TextInput style={styles.inputzero}
          placeholder="Name" 
          value={firstname}
          onChangeText={handlefirstname}/>
      </View>
     {errorName && (
              <Text style={{ color:'red', marginLeft:wp('2.5%')}}>*First name is Required</Text>
            )} 
    </View>
    <View style={styles.containerone}>
      <Text style={styles.labelone}>Last Name</Text>
      <View style={styles.frameone}>
        <TextInput style={styles.inputone} 
         placeholder="Last Name" 
         value={lastname}
         onChangeText={handlelastname}/>
      </View>
    {errorlastName && (
              <Text style={{ color:'red', marginLeft:wp('2.5%')}}>*Last name is Required</Text>
            )} 
    </View>
    </View>
     <View style={styles.containertwo}>
      <Text style={styles.labeltwo}>User Name</Text>
      <View style={styles.frametwo}>
        <TextInput style={styles.inputtwo} 
         placeholder="User Name"
         value={username}
         onChangeText={handleusername} />
      </View>
       {erroruserName && (
              <Text style={{ color:'red', marginLeft:wp('2.5%')}}>*User name is Required</Text>
            )} 
    </View>
     <View style={styles.containerthree}>
      <Text style={styles.labelthree}>Password</Text>
      <View style={styles.framethree}>
        <TextInput style={styles.inputthree}  
         secureTextEntry={true}
          placeholder="Password"
          value={password}
         onChangeText={handlepassword} />
      </View>
      {errorpassword && (
              <Text style={{ color:'red', marginLeft:wp('2.5%')}}>*Password is Required</Text>
            )} 
    </View>
     <View style={styles.containerfour}>
      <Text style={styles.labelfour}> Re-Password</Text>
      <View style={styles.framefour}>
        <TextInput style={styles.inputfour}  
         secureTextEntry={true}
        placeholder="Re-Password"
        value={repassword}
        onChangeText={handlerepassword} />
      </View>
     {errorrepassword && (
              <Text style={{ color:'red', marginLeft:wp('2.5%')}}>* Re-Password is Required</Text>
            )}
    </View>
    </View>
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
  <View style={{...styles.horizontalline,marginTop:wp('0.2%'), marginRight:wp('2.5%')}}></View>
  <Text>or</Text>
  <View style={{...styles.horizontalline,marginTop:wp('0.2%'), marginLeft:wp('2.5%')}}></View>
</View>

<View>
      <View style={styles.buttonContainer}>
        <Button  title="Register" onPress={handleSignup} color="#C99780" />
      </View>
    </View>
     <Text style={styles.errorText}>{signupMessage}</Text> 
   <Text style={styles.errorText}>{signupMessageone}</Text>
    <Text style={styles.errorText}>{signupMessagetwo}</Text> 
   
    <View style={styles.signInbutton}>
      <Text style={styles.textaccount}>Have an account ?</Text>
      <TouchableOpacity style={{...styles.signin,marginLeft:wp('1.5%')}} onPress={() => navigation.navigate('Login')}>
        <Text style={{...styles.buttonTextsignin,}}>Sign In</Text>
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
export default Registration;
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
    marginTop:wp('1.4%'),
  },
   interiorSideImage: {
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
    marginTop:wp('1.4%'),
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
    marginTop:wp('1.5%'),
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
    marginTop:wp('1.5%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelfour: {
    fontWeight: 600,
    marginBottom: 10,
    alignSelf:'flex-start',
    marginLeft:wp('1%')
  },
  framefour: {
    borderWidth: 1,
    backgroundColor: '#ECECEC',
    borderColor:'white',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width:wp('20%'),
  },
  inputfour: {
    width: '100%',
    height: 40,
    color:'#B6B6B6',
  },
  orframe: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'pink',
    padding: 8,
    marginTop:-wp('6%'),
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
    marginTop:-wp('6%')
   
  },
  buttonContainer: {
    backgroundColor: '#C99780',
    borderTopLeftRadius:wp('12%'),
    borderTopRightRadius:wp('12%'),
    borderBottomLeftRadius:wp('12%'),
    borderBottomRightRadius:wp('12%'),
    width:wp('15%'),
    marginTop:-wp('1%'),
  },
  signInbutton: {
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  textaccount: {
    flex: 1, 
    color: 'black',
    fontWeight:'500',
    fontSize: wp('1.2%'),
  },
  signin: {
    backgroundColor: '#ECECEC',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonTextsignin: {
    color: 'black', 
    fontSize: wp('0.8%'),
    fontWeight:'500',
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
    marginTop:-wp('6.0%')
  },
  labelaccount: {
    fontWeight:'600',
    marginTop:-wp('3.5%'),
   alignSelf:'center',
   fontSize:wp('1.2%')
  },
});
