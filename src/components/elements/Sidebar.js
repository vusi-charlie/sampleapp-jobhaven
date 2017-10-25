import React from "react";
import { AppRegistry, Image, StatusBar } from "react-native";
import {
  Button,
  Text,
  Container,
  List,
  ListItem,
  Content,
  Icon
} from "native-base";

const routes = ["Home", "Profile"]; //, "Notifications", "Settings", "Help", "Logout"

export default class Sidebar extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <Image
            source={ require('./src/assets/images/material-bg.jpg') }
            style={{
              height: 120,
              alignSelf: "stretch",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Image
              square
              style={{ height: 80, width: 70 }}
              source={ require('./src/assets/images/placeholder-avatar.jpg') }
            />
          </Image>
          <List
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem button onPress={() => this.props.navigation.navigate(data)} >
                  <Text>{data}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}
