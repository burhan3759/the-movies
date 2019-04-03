import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import FavouritesScreen from '../screens/FavouritesScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarOptions: {
    activeTintColor: '#000000',
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? 'ios-home'
          : 'md-home'
      }
    />
  ),
};

const FavouritesStack = createStackNavigator({
  Favourites: FavouritesScreen,
});

FavouritesStack.navigationOptions = {
  tabBarLabel: 'Favourites',
  tabBarOptions: {
    activeTintColor: '#000000',
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'md-heart'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  FavouritesStack,
});
