/* @flow */

import React, { Component } from 'react';
import { Container, Body ,Header, Content, Icon ,Button ,Form, Item, Input, Label, Left } from 'native-base';

export default class ChatScreen extends Component {

  static navigationOptions = {
    title :"Chat",
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: "#334393"
    }
  }

  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}
