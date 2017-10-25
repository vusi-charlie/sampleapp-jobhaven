/* @flow weak */

import React from 'react';
import { StackNavigator } from 'react-navigation';

import  SearchScreen  from './src/components/screens/SearchScreen';

import  HomeScreen from './src/components/screens/HomeScreen';
import  NotificationsScreen from './src/components/screens/NotificationsScreen';
import  SettingsScreen from './src/components/screens/SettingsScreen';


const AppNavigator = StackNavigator({
  Home: { screen: HomeScreen },
  Notifications: { screen: NotificationsScreen },
  Search: { screen: SearchScreen},
  Settings: { screen: SettingsScreen},
  // Vacancy: { screen: VacancyScreen }
}, {
   headerMode: "screen" ,
   headerTintColor: "white",
   headerStyle: {
     backgroundColor: "blue"
   }
});

export default AppNavigator;
