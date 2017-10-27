/* @flow */

import React, { Component } from 'react';
import { Container, Header, Content, SwipeRow, View, Text, Icon, Button, List, ListItem, Left, Right, Body, Thumbnail, Grid, Row, Col } from 'native-base';

export default class NotificationsScreen extends Component {

  static navigationOptions = {
    title :"Notifications",
    headerTintColor: "#fff",
    headerStyle: {
      backgroundColor: "#334393"
    },
   headerRight: (

       <Button  transparent onPress={() => alert("More options ")}>
         <Icon style={{color: "#fff"}} name="md-more"/>
       </Button>

   )
  }

  render() {
    return (

      <Container style={{backgroundColor: "#fff"}}>
          <Content scrollEnabled={false}>
            <List>
            <SwipeRow
              rightOpenValue={-55}

              body={
                <ListItem avatar>
                  <View style={{ alignItems: 'flex-start'}}>
                    {/*
                        <Thumbnail small source={{ uri: 'http://loremflickr.com/80/80/dog' }} />
                 */}
                        <Text>Kumar Pratik                                                           <Icon style={{ fontSize: 15, color: 'red'}} name="md-alert"/></Text>
                        <Text note>Doing what you like will always keep you happy . .</Text>
                      <Text note style={{fontWeight: 'bold'}}> 3 min ago</Text>
                    </View>
                </ListItem>
              }
              right={
                <Button danger onPress={() => alert('Trash')}>
                  <Icon active name="trash" />
                </Button>
              }
            />
            </List>
          </Content>
        </Container>
    );
  }
}
