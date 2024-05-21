import React,{useState} from 'react';
import { View,Text,StyleSheet,TouchableOpacity,button,Image,TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp,heightPercentageToDP as hp,} from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {  Picker } from '@react-native-picker/picker';


const Registrationdetails = () => {
const navigation = useNavigation();
const handleProfilePress = () => {

navigation.navigate('Login');
 };
 const [selectedValue, setSelectedValue] = useState(null);

  const data = [
    { label: 'Choose One' },
    { label: 'Product Based', value: 'Product Based' },
    { label: 'Service Based', value: 'Service Based' },
    
  ];
  const dataone = [
    { label: 'Select a Bank' },
    { label: 'HDFC', value: 'HDFC' },
    { label: 'Yes Bank', value: 'Yes Bank' },
    { label: 'ICCI', value: 'ICCI' },
  ];
  const [name, setName] = useState('');
  const [errorName, setErrorName] = useState('');
  const [address, setAddress] = useState('');
  const [erroraddress, setErroraddress] =useState('');
  const [email, setEmail] = useState('');
  const [erroremail ,setErroremail] =useState('');
  const [area, setArea] = useState('');
  const [errorarea ,setErrorArea] =useState('');
  const [bankName, setBankName] = useState('');
  const[errorbankName,setErrorBankName] =useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [erroraccountNumber, setErrorAccountNumber] =useState('');
  const [reenteraccountnumber,setreenterAccountnumber] =useState('');
  const [errorreenteraccountnumber,setErrorreenterAccountnumber] =useState('');
  const [branch, setBranch] = useState('');
  const [ifscCode, setIfscCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errorphoneNumber , setErrorPhoneNumber] =useState('');
  const [teamSize, setTeamSize] = useState('');
  const [errorteamSize, setErrorTeamSize]= useState('');
  const [city, setCity] = useState('');
  const [errorcity ,setErrorcity] =useState('');
  const [gstNumber, setGstNumber] = useState('');
  const [errorgstNumber, setErrorGstNumber] =useState('');
  const [venderType, setVenderType] = useState(''); 
  const[errorvenderType,setErrorVenderType] =useState('');
  const [errorOption, setErrorOption] = useState('');

  const handleNameChange = (text) => {
    setName(text);
    if (!text.trim()) {
      setErrorName('Enter your name');
    } else {
      setErrorName('');
    }
  };
  const handleaddressChange = (text) => {
    setAddress(text);
    if (!text.trim()) {
      setErroraddress('Enter your Address details');
    } else {
      setErroraddress('');
    }
  };
  const handleemailChange = (text) => {
    setEmail(text);
    if (!text.trim()) {
      setErroremail('Enter your email address');
    } else if (!validateEmail(text)) {
      setErroremail('Enter valid email address');
    } else {
      setErroremail('');
    }
  };
  
  const validateEmail = (email) => {
    
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  
  const handlephoneNumberChange = (text) => {
    setPhoneNumber(text)
    const formattedPhoneNumber = text.replace(/\D/g, '');
    
    if (formattedPhoneNumber.length !== 10) {
      setErrorPhoneNumber('Enter valid Mobile Number');
    } else {
      setErrorPhoneNumber('');
      setPhoneNumber(formattedPhoneNumber);
    }
  };
  const handleTeamSizeChange =(text) =>{
    setTeamSize(text);
    if(!text.trim()){
      setErrorTeamSize('Mention Team Size');
    }
    else{
      setErrorTeamSize('');
    }
  }
  const handleAreaChange =(text) =>{
setArea(text);
if(!text.trim())
{
  setErrorArea('Area is Required');
}
else{
  setErrorArea('');
}
  }
  const handlecityChange =(text) =>{
    setCity(text);
    if(!text.trim())
    {
      setErrorcity('City is Required');
    }
    else{
      setErrorcity('');
    }
      }
    const handleaccountNumberChange =(text) =>{
      setAccountNumber(text);
      if(!text.trim())
      {
        setErrorAccountNumber('Account Number is Required');
      }
      else if(!/^\d+$/.test(text))
      {
        setErrorAccountNumber('Account Number should contain digits');

      }
      else{
        setErrorAccountNumber('');
      }
    }
    const handlegstNumberChange =(text) =>{
      setGstNumber(text);
      if(!text.trim())
      {
        setErrorGstNumber('Gst Number is Required');
      }
      else if(!/^\d+$/.test(text)){
          setErrorGstNumber('Gst Number should conain only numbers');
      }
      else{
        setErrorGstNumber('');
      }

    }
    const handlereenterAccountNumberChange = (text, reEnteredText) => {
      console.log("Entered Re-Entered Account Number:", text); 
      setreenterAccountnumber(text);
      
      if (!text.trim()) {
        setErrorreenterAccountnumber('Re-Entering Account Number is Required');
      } else if (text.trim() !== accountNumber.trim()) {
        setErrorreenterAccountnumber('Account Numbers do not match');
      } else if (!/^\d+$/.test(text)) {
        setErrorreenterAccountnumber(' Re-Entering Account Number should contain only digits');
      } else {
        setErrorreenterAccountnumber('');
      }
    }
    const handlevenderTypeChange =(text) =>{
      setVenderType(text);
      if(!text.trim()){
        setErrorVenderType('Choosing a vendor type is Required ');
      }
      else{
        setErrorVenderType('');
      }
    }
    const handlebankNameTypeChange =(text) =>{
      setBankName(text);
      if(!text.trim()){
        setErrorBankName('Choose your Bank');
      }
      else{
        setErrorBankName('');
      }
    }
    
    
  
  const handleSignup = async () => {
    let nameError = '';
    let addressError ='';
    let emailError ='';
    let phoneNumberError ='';
    let teamSizeError='';
    let AreaError ='';
    let cityError ='';
    let accountNumberError ='';
    let gstNumberError ='';
    let reenteraccountnumberError='';
    let venderTypeError='';
    let bankNameError='';
  

  if (!name.trim()) {
    nameError = 'Enter your name';
  }
  if (!address.trim()) {
    addressError = 'Enter your address details';
  }
  if (!email.trim() ) {
    emailError = 'Enter email address ';
  }
  if(!phoneNumber.trim()){
    phoneNumberError ='Enter Phone Number';
  }
  if (!teamSize.trim()){
    teamSizeError ='Mention Team size';
  }
  if(!area.trim())
  {
    AreaError ='Area is Required';
  }
  if(!city.trim())
  {
    cityError ='City is Required';
  }
  if(!accountNumber.trim())
  {
    accountNumberError='Account Number is Required';
  }
  if(!gstNumber.trim())
  {
    gstNumberError='Gst Number is Required';
  }
  if(!reenteraccountnumber.trim())
  {
    reenteraccountnumberError='Re-Entering of Account Number is Required';
  }
  if(!venderType.trim())
  {
    venderTypeError='Choosing a vender Type is Required';
  }
  if(!bankName.trim())
  {
    bankNameError='Choose Your bank';
  }

  setErrorName(nameError);
  setErroraddress(addressError);
  setErroremail(emailError);
  setErrorPhoneNumber(phoneNumberError);
  setErrorTeamSize(teamSizeError);
  setErrorArea(AreaError);
  setErrorcity(cityError);
  setErrorAccountNumber(accountNumberError);
  setErrorGstNumber(gstNumberError);
  setErrorreenterAccountnumber(reenteraccountnumberError);
  setErrorVenderType(venderTypeError);
  setErrorBankName(bankNameError);

  if (!nameError && !addressError && !emailError && !phoneNumberError && !teamSizeError && !AreaError && !cityError && !accountNumberError && !gstNumberError && !reenteraccountnumberError && !venderTypeError && !bankNameError) {
    setName('');
    setAddress('');
    setEmail('');
    setPhoneNumber('');
    setTeamSize('');
    setArea('');
    setCity('');
    setAccountNumber('');
    setGstNumber('');
    setreenterAccountnumber('');
    setVenderType('');
    setBankName('');
    try {
      const response = await fetch('http://localhost:9000/venderSignup', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          address,
          email,
          area,
          bankName,
          accountNumber,
          branch,
          ifscCode,
          PhoneNumber: phoneNumber,
          teamSize,
          city,
          gstNumber,
          venderType,
        }),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log('Signup successful:', responseData);
      } else {
        console.error('Signup failed:', await response.text());
      }
    } catch (error) {
      console.error('Error during signup:', error.message);
    }
  }
    
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
     </View>
     <View style={styles.horizontalline} />
     <Image
        source={require('./assets/designalley.png')}
        style={styles.Image}
        resizeMode="contain"
      />
      <View style={styles.horizontallineone} />
      <ScrollView>
       <View>
        <Text style={{fontWeight:'bold', fontSize:15, alignSelf:"center" , marginTop:wp('4.5%')}}> Registration Details</Text>
        <View style={styles.horizontallinetwo}/>
       </View>
       <View style={{flexDirection:'row', }}>
      <View style={{flexDirection:'column',marginTop:wp('1.5%') }}>
        <Text style={{fontSize:15, fontWeight:'500' ,marginLeft:wp('2.5%')}}>Name</Text>
        <View style={styles.Frameone}>
        <TextInput style={styles.TextInputone} 
        value={name}
        onChangeText={handleNameChange}
        />
        </View>
        {errorName ? <Text style={{...styles.error , marginLeft:wp('3.0%'), }}>{errorName}</Text> : null}
      </View>
      <View style={{flexDirection:'column',marginTop:wp('1.5%') }}>
        <Text style={{fontSize:15, fontWeight:'500' ,marginLeft:-wp('1.3%')}}>Mobile</Text>
        <View style={styles.Frametwo}>
        <TextInput  style={styles.TextInputtwo}
         value={phoneNumber}
         onChangeText={handlephoneNumberChange} />
      </View>
      {errorphoneNumber ? <Text style={{...styles.error , marginLeft:-wp('0.4%'),}}>{errorphoneNumber}</Text> : null}
      </View>
      </View>
      <View style={{flexDirection:'column',marginTop:wp('1.5%') }}>
        <Text style={{fontSize:15, fontWeight:'500' ,marginLeft:wp('2.5%')}}>Address</Text>
        <View style={styles.Framethree}>
        <TextInput style={styles.TextInputthree}
        value={address}
        onChangeText={handleaddressChange}></TextInput>
      </View>
      {erroraddress ? <Text style={{...styles.error , marginLeft:wp('3.0%')}}>{erroraddress}</Text> : null}
      </View>
      <View style={{flexDirection:'row', }}>
      <View style={{flexDirection:'column',marginTop:wp('1.5%') }}>
        <Text style={{fontSize:15, fontWeight:'500' ,marginLeft:wp('2.5%')}}>Email Id</Text>
        <View style={styles.Framefour}>
        <TextInput style={styles.TextInputfour}
        value={email}
        onChangeText={handleemailChange} />
      </View>
      {erroremail ? <Text style={{...styles.error , marginLeft:wp('3.0%')}}>{erroremail}</Text> : null}
      </View>
      <View style={{flexDirection:'column',marginTop:wp('1.5%') }}>
        <Text style={{fontSize:15, fontWeight:'500' ,marginLeft:-wp('1.3%')}}>Team Size</Text>
        <View style={styles.Framefive}>
        <TextInput  style={styles.TextInputfive} 
        value={teamSize}
        onChangeText={handleTeamSizeChange}/>
      </View>
      {errorteamSize ? <Text style={{...styles.error, marginLeft:-wp('0.4%'),}}>{errorteamSize}</Text>:null}
      </View>
      </View>
      <View style={{flexDirection:'row', }}>
      <View style={{flexDirection:'column',marginTop:wp('1.5%') }}>
        <Text style={{fontSize:15, fontWeight:'500' ,marginLeft:wp('2.5%')}}>Vendor Type</Text>
        <View style={styles.Framesix}>
         <Picker
        selectedValue={venderType}
        onValueChange={handlevenderTypeChange}
        style={{borderColor:'transparent', backgroundColor:'transparent'}}
      >
        {data.map((item, index) => (
          <Picker.Item
            key={index}
            label={item.label}
            value={item.value}
           style={{ color: 'black', fontWeight: 'bold' }}
          />
        ))}
      </Picker>
      </View>
      {errorvenderType ?<Text style={{...styles.error , marginLeft:wp('3.0%')}}>{errorvenderType}</Text>:null}
      </View>
      
      </View>
      <View style={{flexDirection:'row', }}>
      <View style={{flexDirection:'column',marginTop:wp('1.5%') }}>
        <Text style={{fontSize:15, fontWeight:'500' ,marginLeft:wp('2.5%')}}>Area</Text>
        <View style={styles.Frameseven}>
        <TextInput style={styles.TextInputsix} placeholder="Area" placeholderTextColor="#A6A6A6" 
         value={area}
         onChangeText={handleAreaChange}/>
      </View>
      {errorarea ? <Text style={{...styles.error,marginLeft:wp('3.0%')}}>{errorarea}</Text>:null}
      </View>
      <View style={{flexDirection:'column',marginTop:wp('1.5%') }}>
        <Text style={{fontSize:15, fontWeight:'500' ,marginLeft:-wp('1.3%')}}>City</Text>
        <View style={styles.Frameeight}>
        <TextInput  style={styles.TextInputseven}  placeholder="City"  placeholderTextColor="#A6A6A6"
        value={city}
        onChangeText={handlecityChange}/>
      </View>
      {errorcity ? <Text style={{...styles.error,marginLeft:-wp('0.4%'), }}>{errorcity}</Text>:null}
      </View>
      </View>
      <View style={{ flexDirection: 'row' }}>
      <View style={{ flexDirection: 'column', marginTop: wp('1.5%') }}>
        <View style={styles.Framenine}>
          <Picker
            selectedValue={bankName}
            onValueChange={handlebankNameTypeChange}
            style={{ borderColor: 'transparent', backgroundColor: 'transparent' }}
          >
            {dataone.map((item, index) => (
              <Picker.Item
                key={index}
                label={item.label}
                value={item.value}
                style={{ color: '#C99780', fontWeight: 'bold' }}
              />
            ))}
          </Picker>
        </View>
        {errorbankName ?<Text style={{...styles.error , marginLeft:wp('3.0%')}}>{errorbankName}</Text>:null}
      </View>
      
    </View>
    <View style={styles.Frameeleven}>
        <TextInput placeholder='Account Number'  style={styles.TextInputeight} placeholderTextColor='#B5B4B4'
        value={accountNumber}
        onChangeText={handleaccountNumberChange}/>
      </View>
      {erroraccountNumber?<Text style={{...styles.error , marginLeft:wp('3.0%')}}>{erroraccountNumber}</Text>:null}
      <View style={styles.Frametwelve}>
        <TextInput placeholder=' Re- Enter Account Number' value={reenteraccountnumber} onChangeText={handlereenterAccountNumberChange}  style={styles.TextInputnine} placeholderTextColor='#B5B4B4'  />
      </View>
      {errorreenteraccountnumber?<Text style={{...styles.error , marginLeft:wp('3.0%')}}>{errorreenteraccountnumber}</Text>:null}
      <View style={styles.horizontallinethree}/>
      <TouchableOpacity style={styles.button1}>
  <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop:wp('0.5%') }}>
    <Text style={styles.buttonText} onPress={handleSignup}>Register</Text>
    </View>
    </TouchableOpacity>
    <View style={styles.horizontallinefour}/>
    <View style={{flexDirection:'row', alignSelf:'center',  marginTop:wp('2.0%'),marginLeft:wp('2.0%'), }} >
      <Text style={styles.verifytext}>
        ABC Bank, ABC Street Branch, ABC State - 500010
      </Text>
       <Icon name="verified" size={22} color="#c69679"/>
    </View>
    <View style={styles.Framethirteen}>
        <TextInput placeholder='Gst(if Applicable)'  style={styles.TextInputten} placeholderTextColor='#B5B4B4'
         value={gstNumber}
         onChangeText={handlegstNumberChange}/>
      </View>
      {errorgstNumber ?<Text style={{...styles.error , marginLeft:wp('3.0%')}}>{errorgstNumber}</Text>:null}
      <View style={{ flexDirection: 'row', alignSelf:'center' , marginTop:wp('2.0%')}}>
      <Text style={{ color: '#707070',}}>Have an account?</Text>
      <TouchableOpacity onPress={handleProfilePress}>
        <Text style={{ color: '#000000', fontWeight:'600', marginLeft:wp('0.6%')}}>Login</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    paddingTop: hp('5%'),
    width: wp('100%'),
    paddingHorizontal: wp('5%'),
  },
  horizontalline: {
    borderTopWidth: 1,
    borderTopColor: '#F4F4F4',
    width: '100%',
    marginTop: hp('0.7%'),
  },
  horizontallineone:{
   borderTopWidth:1,
   borderTopColor:'#F4F4F4',
   width: '100%',
   paddingHorizontal:wp('5%'),
   marginTop:wp('1.0%')
  },
  horizontallinetwo:{
    borderTopWidth:2,
    borderTopColor:'#F4F4F4',
    width:120,
    alignSelf:"center",
   },
  horizontallinethree:{
    borderTopWidth:2.0,
    borderTopColor:'#F4F4F4',
    width: '100%',
    marginTop:wp('0.5%'),
    paddingHorizontal:wp('5%'),
    alignSelf:"center",
  },
  horizontallinefour:{
    borderTopWidth:2.0,
    borderTopColor:'#F4F4F4',
    width: '100%',
    marginTop:wp('2.5%'),
    paddingHorizontal:wp('5%'),
    alignSelf:"center",
  },
    Image:{
      width: wp('50%'),
      height: hp('8%'), 
      alignSelf: 'center', 
      marginTop: wp('1.5%'), 
 },
 Frameone: {
    borderWidth: 1,
    backgroundColor: '#ECECEC',
    borderColor:'#DADADA',
    borderRadius: 4,
    padding: 10,
    width:wp('50%'),
    marginLeft:wp('2.5%'),
    marginRight:wp('2.5%'),
    marginTop:wp('0.5%'),
    height: hp('5.0%'),
  },
  Frametwo: {
    borderWidth: 1,
    backgroundColor: '#ECECEC',
    borderColor:'#DADADA',
    padding: 10,
    width:wp('45%'),
    borderRadius: 4,
    marginLeft:-wp('1.5%'),
    marginRight:wp('6.5%'),
    marginTop:wp('0.5%'),
    height: hp('5.0%'),
  },
  TextInputone:
  {
      fontWeight:"500",
  },
  TextInputtwo:
  {
      fontWeight:"500",
  },
  Framethree: {
    borderWidth: 1,
    backgroundColor: '#ECECEC',
    borderColor:'#DADADA',
    borderRadius: 4,
    padding: 10,
    width:wp('96%'),
    marginLeft:wp('2.5%'),
    marginRight:wp('2.5%'),
    marginTop:wp('0.5%'),
    height: hp('10.0%'),
  },
 TextInputthree:{
    fontWeight:"500",
    },
    Framefour: 
    {
        borderWidth: 1,
    backgroundColor: '#ECECEC',
    borderColor:'#DADADA',
    borderRadius: 4,
    padding: 10,
    width:wp('50%'),
    marginLeft:wp('2.5%'),
    marginRight:wp('2.5%'),
    marginTop:wp('0.5%'),
    height: hp('5.0%'),
      },
     TextInputfour:{
        fontWeight:"500",
        },
Framefive: 
{
            borderWidth: 1,
    backgroundColor: '#FFFFFF',
    borderColor:'#DADADA',
    padding: 10,
    width:wp('45%'),
    borderRadius: 4,
    marginLeft:-wp('1.5%'),
    marginRight:wp('6.5%'),
    marginTop:wp('0.5%'),
    height: hp('5.0%'),
},
TextInputfive:
{
    fontWeight:"500",
},
Framesix: 
{
    borderWidth: 1,
backgroundColor: '#ECECEC',
borderColor:'#DADADA',
borderRadius: 4,
padding: 10,
width:wp('96%'),
marginLeft:wp('2.5%'),
marginRight:wp('2.5%'),
marginTop:wp('0.5%'),
height: hp('5.0%'),
  },
  Frameseven: 
    {
        borderWidth: 1,
    backgroundColor: '#ECECEC',
    borderColor:'#DADADA',
    borderRadius: 4,
    padding: 10,
    width:wp('50%'),
    marginLeft:wp('2.5%'),
    marginRight:wp('2.5%'),
    marginTop:wp('0.5%'),
    height: hp('5.0%'),
      },
     TextInputsix:{
        fontWeight:"500",
        },
Frameeight: 
{
            borderWidth: 1,
    backgroundColor: '#ECECEC',
    borderColor:'#DADADA',
    padding: 10,
    width:wp('45%'),
    borderRadius: 4,
    marginLeft:-wp('1.5%'),
    marginRight:wp('6.5%'),
    marginTop:wp('0.5%'),
    height: hp('5.0%'),
},
TextInputseven:
{
    fontWeight:"500",
},
Framenine: {
    borderWidth: 1,
    backgroundColor: '#ECECEC',
    borderColor: 'transparent',
    borderRadius: 4,
    padding: 10,
    width:wp('96%'),
    marginLeft: wp('2.5%'),
    marginRight: wp('2.5%'),
    marginTop: wp('0.5%'),
    height: hp('5.0%'),
  },
  Frameeleven: {
    borderWidth: 1,
   backgroundColor: '#ECECEC',
   borderColor:'transparent',
   padding: 10,
   width:wp('96%'),
   marginLeft:wp('2.5%'),
   marginRight:wp('2.5%'),
   marginTop:wp('2.0%'),
   height: hp('5.0%'),
   },
   TextInputeight:{
  fontWeight:"500",
  
   },
   Frametwelve: {
    borderWidth: 1,
   backgroundColor: '#ECECEC',
   borderColor:'transparent',
   padding: 10,
   width:wp('96%'),
   marginLeft:wp('2.5%'),
   marginRight:wp('2.5%'),
   marginTop:wp('2.0%'),
   height: hp('5.0%'),
   },
   TextInputnine:{
  fontWeight:"500",
  },
  button1: {
    width: wp('20%'), 
    height: hp('4%'), 
    backgroundColor: '#c69679',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:'center',
    borderRadius: wp('0.4%'),
    marginTop:wp('1.5%'),
  },
  buttonText: {
    color: '#ffffff',
    fontSize: hp('2%'), 
    marginTop:-wp('0.5%'),
  },
  verifytext: {
    alignSelf:'center',
    color:"#CACACA",
    fontWeight:'bold',
    marginRight:wp('1.5%'),
  },
  Framethirteen: {
    borderWidth: 1,
   backgroundColor: '#ECECEC',
   borderColor:'transparent',
   padding: 10,
   width:wp('96%'),
   marginLeft:wp('2.5%'),
   marginRight:wp('2.5%'),
   marginTop:wp('2.0%'),
   height: hp('5.0%'),
   },
   TextInputten:{
  fontWeight:"500",
  
   },
});

export default Registrationdetails;
