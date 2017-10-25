/* @flow weak */

import React from 'react';
import { StackNavigator } from 'react-navigation';


import  SignUpScreen from './src/components/screens/AuthScreens/SignUpScreen';
import  SignInScreen from './src/components/screens/AuthScreens/SignInScreen';

const AuthNavigator = StackNavigator({
  SignIn: { screen: SignInScreen },
  SignUp: { screen: SignUpScreen }
  // PasswordReset: { screen: VacancyScreen }
}, {
  headerMode: "none"
});

export default AuthNavigator;
