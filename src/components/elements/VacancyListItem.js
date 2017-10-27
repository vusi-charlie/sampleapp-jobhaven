/* @flow weak */

import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Alert} from 'react-native';

import {

  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  List,
  ListItem,
  Thumbnail,
  Grid,
  Col,
  Row
} from 'native-base';


const VacancyListItem = ({ vacancy, onViewJob }) => (
  <ListItem style={{ marginLeft: 0, paddingLeft: 17 }} button onPress={ () => onViewJob() } >
    <Thumbnail square size={80} source={{
      uri: 'http://loremflickr.com/80/80/dog'
    }}/>

    <Body>
       <Grid>
           <Col style={{width: 200}}>
            <Text>{ vacancy.jobTitle } </Text>
          <Row>
            <Text style={ styles.txtCompanySubtitle } note>
              { vacancy.company.name }
             </Text>
             <Icon name="md-arrow-dropright" style={ styles.seperatorIcon }/>
            <Text style={ styles.txtCompanySubtitle } note>
                { vacancy.company.location }
            </Text>
          </Row>
          <Row>
            <Text note   style={styles.txtTimePosted}><Icon style={styles.txtTimePosted} name="md-time"/> { vacancy.timeCreated } days ago</Text>
          <Text note   style={styles.txtTimePosted}><Icon style={styles.txtTimePosted} name="md-people"/>  5 applied</Text>
          </Row>
           </Col>
           <Col style={{ width: 100}}>
               <Button  style={styles.btnMoreOptions} transparent>
                 <Icon name="md-more"/>
               </Button>
               <Text note style={ styles.txtSalary }>R { vacancy.salary }</Text>
           </Col>
       </Grid>
    </Body>

  </ListItem>
);

VacancyListItem.propTypes = {
  vacancy: PropTypes.object.isRequired,
  onViewJob: PropTypes.func.isRequired
}

export default VacancyListItem;

const styles = StyleSheet.create({
  colRightWidth : {
    width: 200
  },
  colLeftWidth: {
    width: 100
  },
  txtCompanySubtitle: {
     fontSize: 10
  },
  seperatorIcon: {
    fontSize: 15
  },
  txtTimePosted: {
    fontSize: 12,
  },
  btnMoreOptions: {
    marginLeft: 60
  },
  txtSalary: {
    marginLeft: 36,
    color: "#fab416"
  }

});
