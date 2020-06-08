import React  from 'react';
import {StyleSheet, View, Text , FlatList, SafeAreaView } from 'react-native';

const App = () => {

  const items = [
    {id:1 , name: 'a'},
    {id:2 , name: 'b'},
    {id:3 , name: 'c'},
    {id:4 , name: 'd'},
    {id:5 , name: 'e'},
    {id:6 , name: 'f'},
    {id:7 , name: 'g'},
    {id:8 , name: 'h'},
    {id:9 , name: 'i'},
    {id:10 , name: 'j'},
    {id:11, name: 'k'},
    {id:12 , name: 'l'},
    {id:13 , name: 'm'},
    {id:14 , name: 'n'},
    {id:15, name: 'o'},

  ]

  return (
    <SafeAreaView style = {styles.container}>
    
  <FlatList style={styles.text} data={items}  
  renderItem={({item})=>
  <View style = {{...styles.listItem, margin: 20}} >
    <Text>{item.name}</Text>
    </View>
    } 
  keyExtractor={({id},index)=>index.toString()  }>


    </FlatList>

    </SafeAreaView>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
   
   
  
  },
  text:{
    color:'black',
    fontSize:25,

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
  },
  listItem:{
    backgroundColor:'gray',
    margin:5,
    padding:10,
    width:100,
    flexDirection:'row'

  }
});


export default App;
