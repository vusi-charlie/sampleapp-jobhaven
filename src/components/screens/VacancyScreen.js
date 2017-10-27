import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

import Hr from '../elements/HR.js';

export default class VacancyScreen extends Component {
  render() {
    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'http://loremflickr.com/80/80/dog'}} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>GeekyAnts</Text>
                </Body>
              </Left>
            </CardItem>
            <Hr />
            <CardItem cardBody>
              <Text>hello world</Text>
            </CardItem>
            <CardItem>

              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
