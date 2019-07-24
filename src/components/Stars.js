import React from 'react';

import { View } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const Stars = ({ price }) => { 
    const stars = [...Array(Math.ceil(price))]

    return (
        <View style = {{ flexDirection: 'row'}}>
            {
                stars.map((_, i) => {

                    const name = Math.floor(price) > i ? 'star' : 'star-half';
                    return <Icon key = {i} name = {name} color="#FFD64C" />
                    
                })
            }   
            </View>
    )
 }

 export default Stars