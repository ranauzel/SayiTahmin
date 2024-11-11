import { StyleSheet, Text, View,TextInput ,Alert } from 'react-native';
import React, { useState } from 'react';
import CustomButton from '../components/CustomButton';


export default function GameStartScreen() {

const [enteredNumber, setEnteredNumber] = useState('') 
function resetHandler(){
  setEnteredNumber('');
}

function confirmHandler(){
  const chosenNumber=parseInt(enteredNumber)
  if(isNaN(chosenNumber) || chosenNumber<=0 || chosenNumber>99){
    Alert.alert('Geçersiz Sayı', 'Sayı 1 ile 99 arasında olmalıdır', [
      {text:'Tamam', style:'destructive', onPress:resetHandler}
    ])
    return;
 
  }
   
}

function numberHandler(text){
  console.log(text);
 setEnteredNumber(text);
}

  return (
    <View style={styles.container}> 
      <Text>Sayı Tahmin Uygulaması</Text>
      <View style={styles.card}>
        <TextInput style={styles.input}
        keyboardType='number-pad'
        maxLength={2}
        onChangeText={numberHandler}
        value={enteredNumber}
        >

        </TextInput>
       <View style={styles.buttonscontainer}>
       <View style={styles.buttoncontainer}>
       <CustomButton onPress={resetHandler} >Temizle</CustomButton>
        </View>
        <View style={styles.buttoncontainer}>
      <CustomButton onPress={confirmHandler}>Onayla</CustomButton>
      </View>
        </View>
      
      </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    padding:20,
  },
  card:{
    backgroundColor:'orange',
    borderRadius:20,
    justifyContent:'center',
    alignItems:'center',
    padding:16,
    elevation:4,
    shadowColor:'black',
    shadowOffset:{width:0,height:2},
    shadowRadius:6,
    shadowOpacity:0.25,
    marginTop:10,

  },
  input:{
    borderBottomColor:'yellow',

    width:50,
    height:50,
    fontSize:35,
    marginVertical:10,
    fontWeight:'bold'
  },
  buttonscontainer:{
  flexDirection:'row'
  },
  buttoncontainer:{
  flex:1,
  }

});
