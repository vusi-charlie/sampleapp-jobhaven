import React, {Component} from 'react';
import { StyleSheet } from 'react-native';
import {
  Container,
  Grid,
  Col,
  Header,
  Content,
  List,
  ListItem,
  Text,
  Icon,
  Left,
  Body,
  Right,
  Switch
} from 'native-base';

export default class SettingsScreen extends Component {

  static navigationOptions = {

    title: "Settings",
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: "#334393"
    }
  }

  render() {
    return (
      <Container>
        <Content>
         <List>
           <ListItem  itemDivider>
             <Text>ACCOUNT</Text>
           </ListItem>
           <ListItem icon  style={styles.listItemLeft}>
             <Left>
               <Icon name="plane" />
             </Left>
             <Body>
               <Text>Airplane Mode</Text>
             </Body>
             <Right>
               <Switch value={false} />
             </Right>
           </ListItem>
           <ListItem icon style={styles.listItemLeft} >
             <Left>
               <Icon name="wifi" />
             </Left>
             <Body>
               <Text>Wi-Fi</Text>
             </Body>
             <Right>
               <Text>GeekyAnts</Text>
               <Icon name="arrow-forward" />
             </Right>
           </ListItem>
           <ListItem icon style={styles.listItemLeft}>
             <Left>
               <Icon name="bluetooth" />
             </Left>
             <Body>
               <Text>Bluetooth</Text>
             </Body>
             <Right>
               <Text>On</Text>
               <Icon name="arrow-forward" />
             </Right>
           </ListItem>
         </List>
         <List>
           <ListItem  itemDivider>
             <Text>NOTIFICATIONS</Text>
           </ListItem>
           <ListItem icon  style={styles.listItemLeft}>
             <Left>
               <Icon name="plane" />
             </Left>
             <Body>
               <Text>Airplane Mode</Text>
             </Body>
             <Right>
               <Switch value={false} />
             </Right>
           </ListItem>
           <ListItem icon style={styles.listItemLeft} >
             <Left>
               <Icon name="wifi" />
             </Left>
             <Body>
               <Text>Wi-Fi</Text>
             </Body>
             <Right>
               <Text>GeekyAnts</Text>
               <Icon name="arrow-forward" />
             </Right>
           </ListItem>
           <ListItem icon style={styles.listItemLeft}>
             <Left>
               <Icon name="bluetooth" />
             </Left>
             <Body>
               <Text>Bluetooth</Text>
             </Body>
             <Right>
               <Text>On</Text>
               <Icon name="arrow-forward" />
             </Right>
           </ListItem>
         </List>
       </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  listItemLeft: { marginLeft: 0, paddingLeft: 17 }
});
