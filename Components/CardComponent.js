
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';

import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base'

class CardComponent extends Component {
  render() {


    const images ={
      "1": require('../pics/pp.jpeg'),
      "1": require('../pics/pp.jpeg'),
      "1": require('../pics/pp.jpeg')



    }

    return (
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={images[this.props.imagesSource]} />
            <Body>
              <Text>Issa</Text>
              <Text note>May 31, 3030</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image source={require('../pics/pp.jpeg')} style={{ height: 250, width: null, flex: 1 }} />
        </CardItem>
        <CardItem style={{height: 45}}>
          <Left>

            <Button transparent>
              <Icon name="ios-heart-outline" style={{ color:'red' }} />
            </Button>

            <Button transparent>
              <Icon name="ios-chatbubbles-outline" style={{color:'green'}} />
            </Button>

            <Button transparent>
              <Icon name="ios-send-outline" style={{color:'blue'}} />
            </Button>
          </Left>
        </CardItem>

      <CardItem style={{height: 50}}>
        <Text>{this.props.likes} </Text>
      </CardItem>
      <CardItem>
        <Body>
          <Text>
            <Text style={{ fontWeight: "900"}}>Issa </Text>
            “People are chasing cash, not happiness. When you chase money, you’re going to lose. You’re just going to. Even if you get the money, you’re not going to be happy.” – Gary Vaynerchuk
          </Text>
        </Body>

      </CardItem>
      </Card>
    );
  }
}

export default CardComponent;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent: 'center'
  },
});
