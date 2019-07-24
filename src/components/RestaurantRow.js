import React, { Component } from 'react';
import{
    View,
    Text,
    StyleSheet,
    TextInput,
    ScrollView,
    FlatList,
    TouchableOpacity,
    TouchableHighlight,
    Image
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import Stars from '../components/Stars';

export default class RestaurantRow extends Component{

  state = {
    showInfo: false
  }

  infoPressed = () => {
    // this.setState({ showInfo: !this.state.showInfo })
    this.props.navigation.navigate('Info',{
      place: this.props.place
    })
  }

    render(){

        const {
            place,
            index,
            navigation

        } = this.props

        return (
            <View key = {place.name} style = {{ backgroundColor: index % 2 === 0 ? 'white' : '#F3F3F7'}}>
            <View style = {styles.row}>
            <View style = {styles.stars}>
            <Stars price = {place.price} />
            </View>
            <View style = {styles.nameAddress}>
            <Text>{place.name}</Text>
            <Text style = {styles.addressText}>{place.address}</Text>
            </View>

            <View style = {styles.edges}>
              <TouchableHighlight onPress = {this.infoPressed} style = {styles.button} underlayColor='#5398DC'>
           <Text style={styles.buttonText}>Info</Text>
           </TouchableHighlight>
           </View>
          </View>
          {
            this.state.showInfo && 
            <View style = {styles.info}>
            <Text>
            Restaurant Info
            </Text>
            <Image source= {{ uri: this.props.place.image_url }} style ={{
            flex: 1,
            height: 100,
           }}
           resizeMode = "stretch"
        />
            </View>
          }
  </View>
        )
    }
  }

const styles = StyleSheet.create({
    row: {
      flexDirection:'row'
    },
    edges: {
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 5,
      minWidth: 50
    },
    nameAddress: { 
      flexDirection : 'column', 
      flex: 8
    },
    stars :{
      flex: 1,
      alignItems : 'center',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      padding: 5,
      minWidth: 50
    },
    addressText: {
      color: 'grey'
    },
    button : {
      borderWidth: 1,
      borderColor: '#0066CC',
      borderRadius: 14,
      paddingHorizontal: 10,
      paddingVertical: 3,
      backgroundColor: '#fff'
    },
    buttonText: {
      color: '#0066CC',
      fontSize: 12
    },
    info:{
      marginHorizontal: 40,
      marginVertical: 10,
      padding: 10,
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 4
    }
})
