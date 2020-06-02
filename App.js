import React ,  { useState } from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';


const App = props => {
let [counter , setCounter] = useState(0);
let [status , setStatus] = useState(false);
let [check , setCheck] = useState(false);
if (status)
{
 
setTimeout(()=>{
setCounter(counter+1);
},1000)
}
/* else
{
  clearTimeout(check)
} */


return(
  <View style = {styles.container}>
    <Text style={styles.text}>Counter  {counter}</Text>
    
 
  <View style = {styles.btncontainer}>

  

    <Button disabled = {status} title = 'Start' onPress = {() => {
      setStatus(true)
      setCheck(false);
    } } />
    <Button disabled = {!status} title = 'Stop' onPress = {() => {
      setStatus(false),
      setCheck(true);
    } } />
    <Button disabled = {!check} title = 'Reset' onPress = {() => {
      setCounter(0) 
      setCheck(false);
    } } />
  </View>

  </View>
)
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{color:'red',fontSize:25},
  btncontainer:{flexDirection:'row'}
});


export default App;
