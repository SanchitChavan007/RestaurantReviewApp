import React, {Component} from 'react';
import { Text, View, StyleSheet, TextInput} from 'react-native';

const restaurants = [
  {name: 'Taj Restaurant', address: '123 xyz street'},
  {name: 'Veg Treat', address: '333 abc street'},
  {name: 'Sahara treat', address: '888 aaa street'},
  {name: 'Mumbai Spice', address: '000 daa street'}
]

export default class App extends Component {

  state = {
search: null
  }

  render() {
    return (
     <View style = {{backgroundColor: 'white', flex: 1}}>
       <Text style = {styles.header}>Restaurant Review</Text>
       <TextInput style = {styles.input} 
       placeholder="Live Search"
       onChangeText={
         text => {this.setState({search: text})}  
       }
       value = {this.state.search}
         />

       {
         restaurants.filter(place => {
           return !this.state.search || place.name.toLowerCase().indexOf(this.state.search.toLowerCase()) > -1
         }).map((place, index) => {
         return (
             <View key = {place.name} style = {[styles.row, {backgroundColor: index % 2 === 0 ? 'white' : '#F3F3F7'}]}>
               <View style = {styles.edges}>
               <Text>{index + 1}</Text> 
               </View>
               <View style = {styles.nameAddress}>
               <Text>{place.name}</Text>
               <Text style = {styles.addressText}>{place.address}</Text>
               </View>
               <View style = {styles.edges}>
              <Text>Info</Text>
              </View>
             </View>
         )
         })
       }

     </View>
    );
  }
}

const styles = StyleSheet.create({

  header: {
    padding : 40,
    fontSize: 30,
    textAlign: 'center',
    color: '#0066CC',
    fontWeight: '300' 
  },
  row: {
    flexDirection:'row'
  },
  edges: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5
  },
  nameAddress: { 
    flexDirection : 'column', 
    flex: 8
  },
  addressText: {
    color: 'grey'
  },
  input: {
    marginBottom: 30,
    padding: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    color:'#444',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#F5F5F5'
  }
})