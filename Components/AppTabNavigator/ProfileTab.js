
/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';

import {Icon,Container, Content, Header, Left, Right, Body, Button } from 'native-base'

import EntypoIcon from 'react-native-vector-icons/Entypo'

class ProfileTab extends Component {

  static navigationOptions = {



    tabBarIcon: ({ tintColor }) => (
      <Icon name="person" style={{ color: tintColor }} />
    )
  }

  render() {
    return (
      <Container style={{flex: 1, backgroundColor: 'white'}}>
      <Header>
        <Left><Icon name="md-person-add" sytle={{paddingLeft: 10}}></Icon></Left>
        <Body><Text style={{fontWeight: 'bold'}}>54Throne</Text></Body>
        <Right><EntypoIcon name="back-in-time" style={{paddingRight: 10, fontSize: 32}}></EntypoIcon></Right>
      </Header>
      <Content>
        <View style={{paddingTop: 10}}>
          <View style={{flexDirection: 'row'}}>
           <View style={{flex: 1, alignItems:'center' }}>
            <Image source={require('../../pics/pp.jpeg')}
            style={{width: 75, height: 75, borderRadius: 37.5}}/>
          </View>
          <View style={{flex: 3}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-around' }}>
          <View style={{ alignItems: 'center' }}>
            <Text>20</Text>
            <Text style={{ fontSize: 10, color: 'red' }}>post</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text>404</Text>
            <Text style={{ fontSize: 10, color: 'blue' }}>followers</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text>50</Text>
            <Text style={{ fontSize: 10, color: 'green' }}>following</Text>
          </View>
          </View>

          <View style={{flexDirection: 'row', paddingTop: 10}}>
            <Button bordered dark
              style={{ flex: 3, marginLeft: 10, justifyContent: 'center', height: 30}}
              >
                <Text>Edit profile</Text></Button>
            <Button bordered dark style={{flex: 1, marginRight: 10, height: 30, marginLeft: 5, justifyContent: 'center'}}
              >
                <Icon style={{fontSize: 17}} name="settings"/>
            </Button>
          </View>
          </View>
        </View>
      <View style={{paddingVertical: 10, paddingHorizontal: 10}}>
        <Text style={{ fontWeight: 'bold'}}>Issa Salad</Text>
        <Text>🇸🇴| Comdain | Captain S </Text>
        <Text>www.findmeontheinternet.som</Text>
      </View>

        </View>
      </Content>
    </Container>
    );
  }
}
export default ProfileTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
