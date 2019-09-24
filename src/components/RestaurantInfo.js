import React, { Component } from 'react';

import {

    View,
    Text,
    ScrollView,
    Image,
    StyleSheet

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
    }
})