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

export default class SignUpScreen extends Component {

  static navigationOptions = {}
  render() {
    return (
      <Container style={{
        backgroundColor: "#fff"
      }}>
        <Content padder>
          <Image style={{
            alignSelf: "center",
            width: 100,
            height: 100
          }} source={{
            uri: 'https://www.deluxe.com/sites/www.deluxe.com/files/logo_design/logo/logo-samples-28-300x300.png'
          }}/>
          <H1 style={{
            alignSelf: "center"
          }}>Join Us - Sign Up below</H1>


          <Form style={{
            paddingVertical: 20
          }}>
            <Item>
              <Icon active name='md-person'/>
            <Input placeholder='Firstname'/>
            </Item>
            <Item>
              <Icon active name='md-person'/>
            <Input placeholder='Lastname'/>
            </Item>
            <Item>
              <Icon active name='md-finger-print'/>
            <Input numeric placeholder='Identity Number'/>
            </Item>
            <Item>
              <Icon active name='md-mail'/>
            <Input numeric placeholder='Email'/>
            </Item>
            <Item>
              <Icon active name='lock'/>
              <Input secureTextEntry placeholder='Password'/>
            </Item>
          </Form>
          <Button block>
            <Text>Sign Up</Text>
          </Button>
          <Grid>
            <Row style={{
              marginVertical: 10
            }}>
              <Text note>Already have an account?</Text>
            <Button onPress={() => this.props.navigation.goBack()} transparent small>
                <Text>Sign in here</Text>
              </Button>
            </Row>
          </Grid>
        </Content>
      </Container>
    );
  }
}
