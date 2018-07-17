


import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image
} from 'react-native';

import {Icon, Container, Content, Header, Left, Right, Body, Button } from 'native-base'

import EntypoIcon from 'react-native-vector-icons/Entypo'
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
class ProfileTab extends Component {

  static navigationOptions = {



    tabBarIcon: ({ tintColor }) => (
      <Icon name="person" style={{ color: tintColor }} />
    )
  }
  constructor(props) {
    super(props)

    this.state = {
      activeIndex: 0
    }
  }
segmentClicked = ( index ) =>{
    this.setState({
      activeIndex: index
    })
}

renderSectionOne = () => {
  return images.map((image,index) => {
    return(
      <View key={index} style={[ {width: (width) / 3}, {height: (width) /
      3 }, {marginBottom: 2},
        index % 3 !== 0 ? {paddingLeft: 2} : {paddingLeft: 0 }

      ]}>
      <Image style={{flex: 1, width: undefined, height: undefined}}

          source={image}
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
  else if (this.state.activeIndex == 1)
  {
    return(
      <View>
      <CardComponent imageSource="1" likes="100" />
      <CardComponent imageSource="1" likes="100" />
      <CardComponent imageSource="1" likes="100" />
    </View>


    )
  }
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
      <View style={{flexDirection: 'row',  justifyContent: 'space-around', borderTopColor: 'grey', borderTopWidth: 1}}>
        <Button
          transparent
          onPress={() => this.segmentClicked(0)}
          active={this.state.activeIndex == 0}

          >
          <Icon name="ios-apps-outline"
              style={[this.state.activeIndex == 0 ? {} :{color: 'grey'}]}
          />
        </Button>

        <Button
           transparent
           onPress={() => this.segmentClicked(1)}
           active={this.state.activeIndex == 1}

          >
          <Icon name="ios-list-outline"
              style={[this.state.activeIndex == 1 ? {} :{color: 'red'}]}
           />
        </Button>
        <Button
          transparent
          onPress={() => this.segmentClicked(2)}
          active={this.state.activeIndex == 2}

          >
          <Icon name="ios-people-outline"
              style={[this.state.activeIndex == 2 ? {} :{color: 'green'}]}
          />
        </Button>
        <Button
          transparent
          onPress={() => this.segmentClicked(3)}
          active={this.state.activeIndex == 3}
          >
          <Icon name="ios-bookmark-outline"
            style={[this.state.activeIndex == 3 ? {} :{color: '#F2994A'}]}
          />
        </Button>
      </View>

        {this.renderSection()}

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
