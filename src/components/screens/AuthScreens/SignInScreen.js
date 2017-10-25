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

export default class SignInScreen extends Component {

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
          }}>Sign in below</H1>
          <Form style={{
            paddingVertical: 20
          }}>
            <Item>

              <Icon active name='md-person'/>
              <Input placeholder='Email'/>
            </Item>
            <Item>
              <Icon active name='lock'/>
              <Input secureTextEntry placeholder='Password'/>
            </Item>
          </Form>
          <Button block>
            <Text>Sign In</Text>
          </Button>
          <Grid>
            <Row style={{
              marginVertical: 10
            }}>
              <Text note>Don't have an account yet?</Text>
              <Button onPress={() => this.props.navigation.navigate('SignUp')} transparent small>
                <Text>Sign up here</Text>
              </Button>
            </Row>
          </Grid>
        </Content>
      </Container>
    );
  }
}
