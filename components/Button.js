import React  from 'react';
import {StyleSheet, Text, TouchableOpacity, ImagePropTypes,Platform, addons} from 'react-native';

const Button = props => {

    return(
        <TouchableOpacity onPress = {props.onPress}>
        <Text  style={[styles.buttons, props.style]} >{props.title}</Text>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({ 
  
    buttons:{
    textAlign:'center',
      //backgroundColor:'black',
      fontSize:22,
     padding:15,
     color: 'red',
     ...Platform.select({
         ios:{
            backgroundColor:'grey',
         },
         android:{
            backgroundColor:'black',
         },
         web:{backgroundColor:'blue',}
     })
    }
  });

export default Button;