/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SearchBar,
  TextInput,
  ScrollView,
  Dimensions,
  Image

} from 'react-native';

import {Container, Content, Icon, Thumbnail, Header, Left, Right, Body, Button} from 'native-base'

import CardComponent from '../CardComponent'

  let images = [
    require('../../pics/pp1.jpeg'),
    require('../../pics/pp.jpeg'),
    require('../../pics/image-1.jpg'),
    require('../../pics/image-2.jpg'),
    require('../../pics/image-3.jpg'),
    require('../../pics/image-4.jpg'),
    require('../../pics/image.jpg'),
    require('../../pics/pp.jpeg'),
    require('../../pics/Los.jpg'),
    require('../../pics/dub.jpg'),
    require('../../pics/la.jpg'),
    require('../../pics/pp1.jpeg')

  ]

let {width,height} = Dimensions.get('window')

class SearchTab extends Component {


  segmentClicked = ( index ) => {

  }


  renderSectionOne = () => {
    return images.map((image,index) => {
      return(
        <View key={index} style={[ {width: (width) / 2}, {height: (width) /
        2 }, {marginBottom: 2},
          index % 3 !== 0 ? {paddingLeft: 2} : {paddingLeft: 0 }

        ]}>
        <Image style={{flex: 1, width: undefined, height: undefined}}

            source={ image }
        />
        </View>
      )
    })
  }

  renderSection = () => {

    if (this.state.activeIndex == 0) {
      return(
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            {this.renderSectionOne()}
        </View>
      )
    }
  }
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

            <Right><Icon name="ios-search"  style={{ fontSize: '15', padding: 4}}></Icon><TextInput  placeholder="Search" placeholderTextColor="grey" style={{fontWeight:'700', padding: 4,}}/></Right>
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
                style={{ Rectangle: 5, borderColor: 'lightblue', width: 35 * 3, height: 70, margin: 2, borderRadius: 10}}
                source={require('../../pics/pp.jpeg')} />
                <Thumbnail
                  style={{ Rectangle: 5, borderColor: 'lightblue', width: 35 * 3, height: 70, margin: 2, borderRadius: 10 }}
                  source={require('../../pics/pp.jpeg')} />
                  <Thumbnail
                    style={{ Rectangle: 5, borderColor: 'lightblue', width: 35 * 3, height: 70, margin: 2, borderRadius: 10 }}
                    source={require('../../pics/pp.jpeg')} />
                    <Thumbnail
                      style={{ Rectangle: 5, borderColor: 'lightblue', width: 35 * 3, height: 70, margin: 2, borderRadius: 10 }}
                      source={require('../../pics/pp.jpeg')} />
                      <Thumbnail
                        style={{ Rectangle: 5, borderColor: 'lightblue', width: 35 * 3, height: 70, margin: 2, borderRadius: 10}}
                        source={require('../../pics/pp.jpeg')} />
                        <Thumbnail
                          style={{ Rectangle: 5, borderColor: 'lightblue', width: 35 * 3, height: 70, margin: 2, borderRadius: 10 }}
                          source={require('../../pics/pp.jpeg')} />
                          <Thumbnail
                            style={{ Rectangle: 5, borderColor: 'lightblue', width: 35 * 3, height: 70, margin: 2, borderRadius: 10 }}
                            source={require('../../pics/pp.jpeg')} />
                            <Thumbnail
                              style={{ Rectangle: 5, borderColor: 'lightblue', width: 35 * 3, height: 70, margin: 2, borderRadius: 10 }}
                              source={require('../../pics/pp.jpeg')} />
                              <Thumbnail
                                style={{ Rectangle: 5, borderColor: 'lightblue', width: 35 * 3, height: 70, margin: 2, borderRadius: 10 }}
                                source={require('../../pics/pp.jpeg')} />
            </ScrollView>
          </View>
          <View>

          <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            {this.renderSectionOne()}
          </View>





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
