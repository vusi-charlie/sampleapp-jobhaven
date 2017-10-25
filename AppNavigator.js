/* @flow weak */

import React from 'react';
import { StackNavigator } from 'react-navigation';

import  SearchScreen  from './src/components/screens/SearchScreen';

import  HomeScreen from './src/components/screens/HomeScreen';
import  ChatScreen from './src/components/screens/ChatScreen';


const AppNavigator = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen },
  Search: { screen: SearchScreen},
  // Vacancy: { screen: VacancyScreen }
}, {
   headerMode: "screen" ,
   headerTintColor: "white",
   headerStyle: {
     backgroundColor: "blue"
   }
});

export default AppNavigator;
