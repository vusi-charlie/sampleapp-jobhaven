import React, {Component} from 'react';
import { Alert, TouchableOpacity } from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  Tabs,
  List,
  ListItem,
  Thumbnail,
  Input,
  Tab,
  Item,
  Grid,
  Col,
  Row
} from 'native-base';

import VacancyListItem from '../elements/VacancyListItem';
export default class HomeScreen extends Component {

  static navigationOptions = ({navigation}) => ({header: (
      <Header hasTabs>
        <Body>
          <Title>Job Haven</Title>
        </Body>
        <Right>
          <Button transparent onPress={() => navigation.navigate('Search')}>
            <Icon name="search"/>
          </Button>
          <Button transparent onPress={() => navigation.navigate('Chat')}>
            <Icon name="md-notifications"/>
          </Button>
          <Button transparent onPress={() => navigation.navigate('Chat')}>

            <Icon name="md-options"/>
          </Button>
        </Right>
      </Header>

    )});

  render() {
    return (
      <Container>
        <Tabs>
          <Tab heading="Job Listings">
            <Content>
              <List>
               <VacancyListItem
                 vacancy={{ jobTitle:"IT Engineer" ,company: { "imgSrc": "" ,name: "Kubo Inc", location: "Gau, Jhb"}, timeCreated: 1, salary: 15000 }}
                  onViewJob={ () => Alert.alert("View Job Action handler") } >
               </VacancyListItem>
              </List>
            </Content>

          </Tab>
          <Tab heading="Applied Jobs">
            <Text>Tab2</Text>
          </Tab>
          <Tab heading="Saved Jobs">
            <Text>Tab3</Text>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
