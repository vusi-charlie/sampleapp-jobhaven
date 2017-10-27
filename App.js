import React from 'react';
import Expo, { Font } from 'expo';
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';
import { Drawer } from 'native-base';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      isReady: false,
      isAuth: false

    };
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("native-base/Fonts/Ionicons.ttf")
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return <AppNavigator />
  }
}
