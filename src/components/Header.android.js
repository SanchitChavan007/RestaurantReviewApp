import React, { Component } from 'react';

import { Text } from 'react-native';

import HeaderStyle from 'styles/HeaderStyle';

export default class Header extends Component {

    render(){
        return(
            <Text style = { HeaderStyle.header}>        
                Restaurant List
            </Text>
        )
    }

}