import React ,  { useState } from 'react';
import {StyleSheet, View, Text ,Image,ImageBackground, Dimensions } from 'react-native';


const App = props => {


let [position , setPosition] =  useState({
  top:0,bottom:0,left:0,right:0
})

setTimeout(()=>{
  setPosition(prevState => ({
    top:Math.floor(Math.random()*(Dimensions.get('screen').height-100)),
    left:Math.floor(Math.random()*(Dimensions.get('screen').width-100)),
    right:Math.floor(Math.random()*(Dimensions.get('screen').width-100)),
    bottom:Math.floor(Math.random()*(Dimensions.get('screen').height-100))
  }))
}, 1000)
  
  return(

    <ImageBackground 
    source={require('./assets/pond.jpg')}
    style={{width:'100%',height:'100%'}}>
      <View style={styles.container}>
      <Image source={require('./assets/fish.png')}
       style={{width:50,height:50 ,
       top:position.top,bottom:position.bottom,left:position.left,right:position.right 
       , position:'absolute'}} ></Image>
       </View>
    </ImageBackground>
  )
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
   
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
