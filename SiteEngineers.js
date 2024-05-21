import React,{useState} from 'react';
import { View, TextInput,Button,Alert } from 'react-native';


const SiteEngineers =() =>{
 const [Name ,setName] =useState('');
 const [MobileNumber,setMobileNumber]=useState('');
 const[Gender,setGender]=useState('');
 const [Address,setAddress] =useState('');


 const registerHouseOwner =async () => {
    const requestBody={
        Name,
        MobileNumber, 
        Gender,
        Address,
       
    }

    try{
        const response =await fetch('http://localhost:9000/siteengineer',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify(requestBody),
    });

    if(!response.ok)
        {
            const errorMessage =await response.json();
            throw new Error(errorMessage);
        }
        const responseData =await response.json();
        Alert.alert('Sucess',responseData);
 }
 catch(error){
Alert.alert('Error','An Error Occured.');
console.error('Error in registration', error);

 };

}
return (
    <View>
<TextInput placeholder='Name'  value={Name} onChangeText={setName}>
</TextInput>

<TextInput placeholder='Mobile Number' value={MobileNumber} onChangeText={setMobileNumber}>
</TextInput>

<TextInput placeholder='Gender' value={Gender} onChangeText={setGender} >
</TextInput>

<TextInput placeholder='Address' value={Address} onChangeText={setAddress}>
</TextInput>



<Button title='Register' onPress={registerHouseOwner}/>

    </View>
 );

};

export default SiteEngineers;