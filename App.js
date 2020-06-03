import React ,  { useState } from 'react';
import {StyleSheet, View, Text ,TextInput , Platform} from 'react-native';
import Button from './components/Button';

const App = props => {
let [result , setResult] = useState(0);
let [num1 , setNum1] = useState('25');
let [num2 , setNum2] = useState('4');



  
  return(

      <View style = {styles.container}>
        <Text style = {styles.text}  >Math Guru {Platform.OS} </Text>
        
        <TextInput style ={styles.input} autoCapitalize='none' keyboardType='number-pad' autoFocus={true} value={num1} onChangeText={val => setNum1(val)} />
        <TextInput style ={styles.input} autoCapitalize='none' keyboardType='number-pad' autoFocus={false}  value={num2} onChangeText={val => setNum2(val)}/>

        <View style = {styles.btncontainer}>
           
        <Button style = {{color:'red'}} title = "+"  onPress={()=>{
          const val1 = parseFloat(num1)
          const val2 = parseFloat(num2)
          setResult(val1+val2)

        }} />

        <Button style = {{color:'orange'}} title = "-" onPress={()=>{
          const val1 = parseFloat(num1)
          const val2 = parseFloat(num2)
          setResult(val1-val2)

        }} />
        <Button style = {{color:'blue'}} title = "*" onPress={()=>{
          const val1 = parseFloat(num1)
          const val2 = parseFloat(num2)
          setResult(val1*val2)

        }} />
        <Button  title = "/" onPress={()=>{
          const val1 = parseFloat(num1)
          const val2 = parseFloat(num2)
          if(val2 <= 0)
          {
            setResult(0)
          }
          
          else{setResult(val1/val2)}
          

        }} />
        


      </View>
      <Text style = {styles.text}>Result: {result}  </Text> 
      </View>

  )
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
   marginVertical: 80
  },
  text:{
    color:'red',fontSize:25
  },
  btncontainer:{
    flexDirection:'row',
   justifyContent:'space-between',
   width:'50%',
   
  },
  input:{
    borderBottomWidth:2,
    borderBottomColor:'blue',
    padding:5,
    marginVertical:10,
    fontSize:22,
    width:'100%'
  }
});


export default App;
