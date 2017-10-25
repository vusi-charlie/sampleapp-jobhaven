/* @flow */

import React, { Component } from 'react';
import { Container, Body ,Header, Content, Icon ,Button ,Form, Item, Input, Label, Left } from 'native-base';

export default class SignUpScreen extends Component {

  static navigationOptions = {

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
          </Form>
        </Content>
      </Container>
    );
  }
}
