/* @flow */

import React, {Component} from 'react';
import {
  // Navbar Components
  Header,
  Left,
  Button,
  Icon,
  Title,
  Body,
  Right,

  // View Components
  Container,
  Content,
  Seperator,
  ListItem
} from 'native-base';

export default class ProfileScreen extends Component {
  render() {
    return (
      <Container>
       <Content>
         <Separator bordered>
           <Text>FORWARD</Text>
         </Separator>
         <ListItem >
           <Text>Aaron Bennet</Text>
         </ListItem>
         <ListItem>
           <Text>Claire Barclay</Text>
         </ListItem>
         <ListItem last>
           <Text>Kelso Brittany</Text>
         </ListItem>
         <Separator bordered>
           <Text>MIDFIELD</Text>
         </Separator>
         <ListItem>
           <Text>Caroline Aaron</Text>
         </ListItem>
       </Content>
     </Container>
    );
  }
}

Profile.navigationOptions = ({navigation}) => ({
  header: (
    <Header>
      <Left>
        <Button transparent onPress={() => navigation.navigate("DrawerOpen")}>
          <Icon name="menu"/>
        </Button>
      </Left>
      <Body>
        <Title>Profile</Title>
      </Body>
      <Right/>
    </Header>
  )});
