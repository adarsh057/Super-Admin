import React, { useRef, useState } from 'react';
import { View, Text, Dimensions, TouchableOpacity, TextInput, Image, StyleSheet, ImageBackground, SafeAreaView ,Button,Alert} from 'react-native';
import { widthPercentageToDP as wp,heightPercentageToDP as hp,} from 'react-native-responsive-screen';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native'; 
const ForgotPasswordScreen = () => {
const [toggleOtpCard, setToggleOtpCard] = useState(true);
    const navigation = useNavigation(); 
  const screenWidth = Dimensions.get('window').width;
  const largeScreenWidth = 1024;
  const [username, setUsername] = useState('');
  const[erroruserName,setErroruserName]=useState('');
  const [newPassword, setNewPassword] = useState('');
  const[errornewpassword,setErrornewpassword]=useState('');
  const [reenterNewPassword, setReenterNewPassword] = useState('');
  const[errorreenternewpassword,setErrorreenternewpassword]=useState('');
  const [passwordresetsucess,setpasswordresetsucess] =useState('');
  const [fillfields, setfillfields] =useState('');
  const[passwordmismatch, setpasswordmismatch] =useState('');
  const [errorMessage, seterrorMessage] =useState('');
  const handleChangePassword = async () => {
    try {
      if (!username || !newPassword || !reenterNewPassword) {
        setfillfields('Please fill all the details');
        setTimeout(() => {
          setfillfields('');
          setfillfields(false);
        }, 2000);
        Alert.alert('Error', 'Please fill all fields');
        return;
      }

      if (newPassword !== reenterNewPassword) {
        setpasswordmismatch('Passwords dont match');
        setTimeout(() => {
          setpasswordmismatch('');
          setpasswordmismatch(false);
        }, 2000);
        Alert.alert('Error', 'New passwords do not match');
        return;
      }

      const response = await axios.post('http://localhost:9000/changepassword/', {
        username: username,
        newPassword: newPassword,
      });
   
      setpasswordresetsucess('Password Updated Successfully' , response);
      setTimeout(() => {
        setpasswordresetsucess('');
        setpasswordresetsucess(false);
      }, 2000);
      navigation.navigate('Login');
      Alert.alert('Success', response.data);
    } catch (error) {
      seterrorMessage('error occurred',error);
      setTimeout(() => {
        seterrorMessage('');
        seterrorMessage(false);
      }, 2000);
      Alert.alert('Error', error.response.data);
    }
  };

  const handleusername = (text) => {
    setUsername(text);
    if (!text.trim()) {
      setErroruserName('Enter user name');
      return;
    } else {
      setErroruserName('');
    }
  };
  const handlenewpassword = (text) => {
    setNewPassword(text);
    if (!text.trim()) {
      setErrornewpassword('Enter new Password');
      return;
    } else {
      setErrornewpassword('');
    }
  };

  const handlereenternewpassword = (text) => {
    setReenterNewPassword(text);
    if (!text.trim()) {
      setErrorreenternewpassword('Enter new Password');
      return;
    } else {
      setErrorreenternewpassword('');
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
        <TextInput style={styles.inputtwo} 
       placeholder="User Name"
       value={username}
         onChangeText={handleusername} />
      </View>
      {erroruserName && (
              <Text style={{ color:'red', marginLeft:wp('2.5%')}}>*User name is Required</Text>
            )} 
    </View>
     <View style={{...styles.containerthree, marginTop:wp('2.5%')}}>
      <Text style={styles.labelthree}> New Password</Text>
      <View style={styles.framethree}>
        <TextInput style={styles.inputthree}  
         secureTextEntry={true}
          placeholder=" New Password" 
          onChangeText={handlenewpassword}
          value={newPassword}
        />
      </View>
      {errornewpassword && (
              <Text style={{ color:'red', marginLeft:wp('2.5%')}}>* New Password is Required</Text>
            )}
    </View>
    <View style={{...styles.containerreenter, marginTop:wp('2.5%')}}>
      <Text style={styles.labelreenter}> Re-Enter New Password</Text>
      <View style={styles.framereenter}>
        <TextInput style={styles.inputreenter}  
         secureTextEntry={true}
          placeholder=" Renter New Password" 
          onChangeText={handlereenternewpassword}
          value={reenterNewPassword}/>
      </View>
      {errorreenternewpassword && (
              <Text style={{ color:'red', marginLeft:wp('2.5%')}}>* rentering of new Password is Required</Text>
            )}
    </View>
    </View>
    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop:wp('1.5%') }}>
  <View style={{...styles.horizontalline,marginTop:wp('0.2%'), marginRight:wp('2.5%')}}></View>
  <Text>or</Text>
  <View style={{...styles.horizontalline,marginTop:wp('0.2%'), marginLeft:wp('2.5%')}}></View>
</View>
    <View>
      <View style={styles.buttonContainer}>
        <Button  title="Update" onPress={handleChangePassword} color="#C99780"  />
      </View>
    </View>
    <Text style={{marginTop:-wp('1.5%')}}>{passwordresetsucess}</Text>
      <Text style={{marginTop:-wp('1.5%')}}>{fillfields}</Text>
      <Text style={{marginTop:-wp('1.5%')}}>{passwordmismatch}</Text>
      <Text style={{marginTop:-wp('1.5%')}}>{errorMessage}</Text>
    {/**   <View style={{...styles.signInbutton, marginTop:-wp('8%')}}>
      <Text style={styles.textaccount}>Don't Have an account ?</Text>
      <TouchableOpacity style={styles.signin}>
        <Text style={styles.buttonTextsignin}>Sign Up</Text>
      </TouchableOpacity>
        </View> */}
            
          </View>
        ) : (
         {/**  <View style={[styles.loginCardContainer, screenWidth > 786 ? styles.largerScreen : styles.smallerScreen]} >
            <Image source={require("./assets/logo.jpeg")} style={styles.logoImage} />
            <View>
              <TextInput style={styles.input} placeholder="Enter OTP" type="number" onChangeText={onChangeVerifyOtp} />
            </View>
            <Text style={styles.errorText}>{errorMessage}</Text>
            <Text style={styles.signupLinkText}>Don't have an Account</Text>
        </View> */}
        )}
      </ImageBackground>
    </SafeAreaView>
  );
}
export default ForgotPasswordScreen;
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
  },
containerreenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelreenter: {
    fontWeight: 600,
    marginBottom: 10,
    alignSelf:'flex-start',
    marginLeft:wp('1%')
  },
  framereenter: {
    borderWidth: 1,
    backgroundColor: '#ECECEC',
    borderColor:'white',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width:wp('20%'),
  },
  inputreenter: {
    width: '100%',
    height: 40,
    color:'#B6B6B6',
  },

});
