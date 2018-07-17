/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SearchBar,
  TextInput,
  ScrollView

} from 'react-native';

import {Container, Content, Icon, Thumbnail, Header, Left, Right, Body} from 'native-base'
class SearchTab extends Component {


  static navigationOptions = {

    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-search" style={{ color: tintColor }} />
    )
  }

  render() {
    return (
      <Container style={{flex: 1, backgroundColor: 'white'}}>
        <Content>
          <Header>
            <View style={{justifyContent:
              'center', alignItems: 'space-between'}}>

            <Right><Icon name="ios-search"  style={{ fontSize: '15', padding: 4,}}></Icon><TextInput  placeholder="Search" placeholderTextColor="grey" style={{fontWeight:'700', padding: 4}}/></Right>
            </View>
          </Header>
          <View style={{ flex: 3}}>
            <ScrollView
              horizontal={true}
              showHorizantalScrollIndicator={false}
              contentContainerStyle={{
                alignItems: 'center',
                paddingStart: 5,
                paddingEnd: 5,
                padding: 10
              }}
              >
              <Thumbnail
                style={{ Rectangle: 5, borderColor: 'lightblue', width: 35 * 3, height: 70}}
                source={require('../../pics/pp.jpeg')} />
                <Thumbnail
                  style={{ Rectangle: 5, borderColor: 'lightblue', width: 35 * 3, height: 70 }}
                  source={require('../../pics/pp.jpeg')} />
                  <Thumbnail
                    style={{ Rectangle: 5, borderColor: 'lightblue', width: 35 * 3, height: 70 }}
                    source={require('../../pics/pp.jpeg')} />
                    <Thumbnail
                      style={{ Rectangle: 5, borderColor: 'lightblue', width: 35 * 3, height: 70 }}
                      source={require('../../pics/pp.jpeg')} />
                      <Thumbnail
                        style={{ Rectangle: 5, borderColor: 'lightblue', width: 35 * 3, height: 70}}
                        source={require('../../pics/pp.jpeg')} />
                        <Thumbnail
                          style={{ Rectangle: 5, borderColor: 'lightblue', width: 35 * 3, height: 70 }}
                          source={require('../../pics/pp.jpeg')} />
                          <Thumbnail
                            style={{ Rectangle: 5, borderColor: 'lightblue', width: 35 * 3, height: 70 }}
                            source={require('../../pics/pp.jpeg')} />
                            <Thumbnail
                              style={{ Rectangle: 5, borderColor: 'lightblue', width: 35 * 3, height: 70 }}
                              source={require('../../pics/pp.jpeg')} />
                              <Thumbnail
                                style={{ Rectangle: 5, borderColor: 'lightblue', width: 35 * 3, height: 70 }}
                                source={require('../../pics/pp.jpeg')} />
            </ScrollView>
          </View>
        </Content>

      </Container>
    );
  }
}
export default SearchTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
