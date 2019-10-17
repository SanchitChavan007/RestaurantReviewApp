import React, { Component } from 'react';

import {

    View,
    Text,
    ScrollView,
    Image,
    StyleSheet,
    TouchableOpacity

} from 'react-native';

import Stars from '../components/Stars';

export default class RestaurantInfo extends Component {

    static navigationOptions ={
        title: 'Restaurant Info',
        headerStyle:{
            backgroundColor: '#0066CC',
            color:'#FFF'
        },
        headerTintColor: '#FFF',
        headerTitleStyle:{
            color: '#FFF'
        }
    }

    render(){

        addReview = () => {
            this.props.navigation.navigate('AddReview')
          }

        const place = this.props.navigation.getParam('place')
        return(

            <ScrollView style ={styles.root}>

                <View style ={styles.infoHeader}>
                    <Image 
                    source = {{
                        uri: place.image_url
                    }}
                    style = {styles.image}
                    resizeMode = "contain"
                    />
                    <View style = {styles.info}>
                        <Text style = {styles.name}>
                            {place.name}
                        </Text>
                        <Text style = {styles.address}>
                            {place.address}
                        </Text>
                        <Stars price = {place.price}></Stars>
                        <TouchableOpacity style={styles.button}
                            onPress={this.addReview}>
                            <Text style={styles.buttonText}>Add Review</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </ScrollView>

        )
    }


}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor : '#fff'
    },
    infoHeader: {
        flex: 1
    },
    info: {
        marginTop: 20,
        margin:20

    },
    name: {
        fontSize: 24,
        flexWrap: 'wrap',
        alignItems: 'flex-start'
    },
    address: {
        color: 'grey',
        marginBottom: 5
    },
    image:{
        width:200,
        height:200,
        margin:20
    },
    buttonText: {
        color: '#0066CC',
        fontSize: 12,
        textAlign:'center'
      },
      button : {
        borderWidth: 1,
        borderColor: '#0066CC',
        borderRadius: 14,
        paddingHorizontal: 10,
        paddingVertical: 3,
        backgroundColor: '#fff',
        marginTop:10
      }
})