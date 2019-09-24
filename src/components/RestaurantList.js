import React, {Component} from 'react';
import { Text, View, StyleSheet, TextInput, Platform, ScrollView, FlatList, Image} from 'react-native';

import Header from '../components/Header';

import axios from 'axios';

import ResImage from '../images/cutlery.png';

import RestaurantRow from '../components/RestaurantRow';

export default class RestaurantList extends Component {

  static navigationOptions = {
    header: null
  }

state = {
search: null,
restaurants: [],
  }

  componentDidMount() {
    axios.get('http://opentable.herokuapp.com/api/restaurants?country=US')
    .then(response => {
      this.setState({ restaurants: response.data.restaurants});
    })
  }

  render() {
    return (
     <View style = {{flex: 1, backgroundColor: "#FFFFFF"}}>
       <View style ={{ marginTop: 70, alignItems: 'center'}}>
       <Image source = {ResImage} style = {{ height: 120, width: 120 }}></Image>
       </View>
   
       <Header />
       <TextInput style = {styles.input} 
       placeholder="Live Search"
       onChangeText={
         text => {this.setState({search: text})}  
       }
       value = {this.state.search}
         />

<FlatList
          data = {
            this.state.restaurants.filter(place => {
              return !this.state.search ||
                place.name.toLowerCase().indexOf(this.state.search.toLowerCase()) > -1
            })
          }
          renderItem={({ item, index }) => 
            <RestaurantRow place={item} index={index} navigation = {this.props.navigation} />
          }
          keyExtractor={item => item.name}
          initialNumToRender={16}
        />
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
    padding: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    color:'#444',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#F5F5F5'
  }
})
