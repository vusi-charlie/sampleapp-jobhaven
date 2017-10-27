/* @flow */

import React, {Component} from 'react';
import {Image} from 'react-native';
import {
  Container,
  Body,
  Header,
  Content,
  Thumbnail,
  Icon,
  Button,
  Form,
  Text,
  Item,
  Input,
  Label,
  Left,
  H1,
  Grid,
  Col,
  Row
} from 'native-base';

export default class WelcomeScreen extends Component {

  static navigationOptions = {}
  render() {
    return (
      <Container style={{
        backgroundColor: "#fff"
      }}>
        <Content padder>
          <Image style={{
            alignSelf: "center",
            width: 200,
            height: 200
          }} source={{
            uri: 'https://www.deluxe.com/sites/www.deluxe.com/files/logo_design/logo/logo-samples-28-300x300.png'
          }}/>
          <H1 style={{
            alignSelf: "center"
          }}>Welcome to Job Haven</H1>

        <Button style={{marginVertical: 10}} block warning>
            <Text>Create An Account</Text>
          </Button>
          <Button style={{marginVertical: 10}} block>
            <Text>I have an Account</Text>
          </Button>

        </Content>
      </Container>
    );
  }
}
