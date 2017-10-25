/* @flow */

import React, { Component } from 'react';
import { Container,Content, Card, CardItem, Text ,Header, InputGroup, Input, Icon, Button, Right, Item } from 'native-base';

export default class SearchScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
      header: (
        <Header searchBar rounded>
          <Item>
           <Icon name="ios-search" />
           <Input placeholder="Search"  />
         <Button transparent>
           <Icon name="md-funnel" />
         </Button>
         </Item>
        </Header>
      )
  })

  render() {
    return (

      <Container>
           <Content>
               <Card>
                   <CardItem>
                       <Text>
                           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                       </Text>
                   </CardItem>
               </Card>
               <Card>
                   <CardItem>
                       <Text>
                           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                       </Text>
                   </CardItem>
               </Card>
               <Card>
                   <CardItem>
                       <Text>
                           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                       </Text>
                   </CardItem>
               </Card>
           </Content>
        
         </Container>

    );
  }
}
