import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, H3, Row, Grid } from 'native-base';

import Hr from '../elements/Hr';
import Chip from '../elements/Chip';

export default class VacancyScreen extends Component {

  static navigationOptions = {
    title: "Vacancy"
  }

  render() {
    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <H3>IT Engineer</H3>
              <Grid style={{marginVertical: 5}}>
                <Row><Text note style={{  fontSize: 10}}> <Icon style={{fontSize: 10}} name="md-time"/> 3 days ago </Text><Text note style={{  fontSize: 10}}> <Icon style={{fontSize: 10}} name="md-time"/> 3 days ago </Text></Row>
              </Grid>
              </Body>
            </CardItem>

              <Hr  lineStyle={{ backgroundColor: "#ddd", height: 1 }}/>
            <CardItem>
              <Body>
                <Text style={{paddingVertical: 10, color: "green"}} note><Icon  style={{fontSize: 15, color:"green"}}  name="md-briefcase"/>  Permanent, fulltime</Text>
              <Text style={{paddingBottom: 10}} >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy </Text>
            <Grid>
              <Row><Chip key={1}  text={"Javascripts"} /><Chip key={2}  text={"Scrum"} /></Row>
            </Grid>
              </Body>
            </CardItem>
              <Hr  lineStyle={{ backgroundColor: "#ddd", height: 1 }}/>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'http://loremflickr.com/80/80/dog'}} />
                <Body>
                  <Text>NativeBase <Icon style={{fontSize: 15, color: "#fab416"}} name="md-checkmark-circle"/></Text>
                <Text note>Sannton Central, Johannesburg</Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
        </Content>
      
      </Container>
    );
  }
}
