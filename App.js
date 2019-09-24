import React, {Component} from 'react';

import { createStackNavigator, createAppContainer } from 'react-navigation';

import RestaurantList from './src/components/RestaurantList';

import RestaurantInfo from './src/components/RestaurantInfo';

const AppNavigator =  createStackNavigator({
  Home: { screen: RestaurantList },
  Info: { screen: RestaurantInfo }
}, {
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#0066CC',
      color: '#FFF'
    },
    headerTintColor: '#FFF',
    headerTitleStyle: {
      color: '#FFF'
    }
  }
})

export default createAppContainer(AppNavigator);

