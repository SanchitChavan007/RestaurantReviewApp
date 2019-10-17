import React, { Component } from 'react';
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome'

import RestaurantList from 'components/RestaurantList';
import RestaurantInfo from 'components/RestaurantInfo';

import About from 'components/About';
import AddReview from 'components/AddReview';

const List = createStackNavigator({
  Home: { screen: RestaurantList },
  Info: { screen: RestaurantInfo },
  AddReview: { screen: AddReview }
}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#0066cc',
      color: '#fff'
    },
    headerTintColor: '#fff',
    headerTitleStyle: { color: '#fff' }
  }
});

const TabNavigator = createBottomTabNavigator({
  List: { screen: List },
  About: { screen: About}
}, {
  defaultNavigationOptions: ({ navigation }) => {
    return {
      tabBarIcon: ({ tintColor }) => {
        const route = navigation.state.routeName;
        console.log('route', route);
        const name = {
          'List': 'list',
          'About':'info-circle'
        }[route]
        return <Icon name={name} color={tintColor} size={22} />
      },
      tabBarOptions: {
        activeBackgroundColor: '#E6F0FA'
      }
    }
  }
});

export default createAppContainer(TabNavigator);