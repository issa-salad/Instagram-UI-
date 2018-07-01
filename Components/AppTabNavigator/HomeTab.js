import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';

import { Container, Content, Icon, Thumbnail, Header, Left, Right, Body } from 'native-base'
import CardComponent from '../CardComponent'

class HomeTab extends Component {

  static navigationOptions = {

    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-home" style={{ color: tintColor }} />
    )
  }

  render() {
    return (
      <Container style={styles.container}>

        <Header>
          <Left><Icon name="ios-camera-outline" sytle={{paddingLeft: 10}}></Icon></Left>
          <Body><Text style={{fontWeight: 'bold'}}>Instagram</Text></Body>
          <Right><Icon name="ios-send-outline" style={{paddingRight: 10}}></Icon></Right>

        </Header>
        <Content>

          <View style={{height: 100}}>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent:
              'space-between', alignItems: 'center', paddingHorizontal: 7 }}>
            <Text style={{fontWeight: 'bold' }}>Stories</Text>
          <View style={{flexDirection: 'row', 'alignItems': 'center'  }}>
            <Icon name="md-play" style={{fontSize: 14 }}></Icon>
            <Text style={{fontWeight: 'bold'}}> Watch All</Text>
          </View>
          </View>
          <View style={{ flex: 3}}>
            <ScrollView
              horizontal={true}
              showHorizantalScrollIndicator={false}
              contentContainerStyle={{
                alignItems: 'center',
                paddingStart: 5,
                paddingEnd: 5
              }}
              >
              <Thumbnail
                style={{ marginHorizontel: 5, borderColor: 'lightblue',
                 borderWidth: 2 }}
                source={require('../../pics/pp.jpeg')} />
                <Thumbnail
                  style={{ marginHorizontel: 5, borderColor: 'lightblue',
                   borderWidth: 2 }}
                  source={require('../../pics/pp.jpeg')} />
                  <Thumbnail
                    style={{ marginHorizontel: 5, borderColor: 'lightblue',
                     borderWidth: 2 }}
                    source={require('../../pics/pp.jpeg')} />
                    <Thumbnail
                      style={{ marginHorizontel: 5, borderColor: 'lightblue',
                       borderWidth: 2 }}
                      source={require('../../pics/pp.jpeg')} />
                      <Thumbnail
                        style={{ marginHorizontel: 5, borderColor: 'lightblue',
                         borderWidth: 2 }}
                        source={require('../../pics/pp.jpeg')} />
                        <Thumbnail
                          style={{ marginHorizontel: 5, borderColor: 'lightblue',
                           borderWidth: 2 }}
                          source={require('../../pics/pp.jpeg')} />
                          <Thumbnail
                            style={{ marginHorizontel: 5, borderColor: 'lightblue',
                             borderWidth: 2 }}
                            source={require('../../pics/pp.jpeg')} />
                            <Thumbnail
                              style={{ marginHorizontel: 5, borderColor: 'lightblue',
                               borderWidth: 2 }}
                              source={require('../../pics/pp.jpeg')} />
                              <Thumbnail
                                style={{ marginHorizontel: 5, borderColor: 'lightblue',
                                 borderWidth: 2 }}
                                source={require('../../pics/pp.jpeg')} />
            </ScrollView>
          </View>
        </View>

          <CardComponent imagesSource="1"
            Likes="101"/>
          <CardComponent imagesSource="1"
            likes="201"/>
          <CardComponent imagesSource="1"
            likes="301"/>
        </Content>
      </Container>

    );
  }
}
export default HomeTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
});
