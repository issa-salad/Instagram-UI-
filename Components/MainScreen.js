import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform
} from "react-native";

import HomeTab from './AppTabNavigator/HomeTab'
import SearchTab from './AppTabNavigator/SearchTab'
import AddMediaTab from './AppTabNavigator/AddMediaTab'
import LikesTab from './AppTabNavigator/LikesTab'
import ProfileTab from './AppTabNavigator/ProfileTab'
import {TabNavigator} from 'react-navigation'
import { Icon } from 'native-base'

class MainScreen extends Component{

    static navigationOptions = {

      headerLeft: <Icon style={{paddingLeft: 10}} name="ios-camera-outline" />,
      title: "54Throne",
      headerRight:<Icon style={{paddingRight: 10}} name="ios-send-outline" />
    }

  render(){
      return (
        <AppTabNavigator />
      );
  }
}
export default MainScreen;

const AppTabNavigator = TabNavigator({
  HomeTab: {
    screen: HomeTab
  },
  SearchTab: {
    screen:SearchTab
  },
  AddMediaTab: {
    screen: AddMediaTab
  },
  LikeTab: {
    screen: LikesTab
  },
  ProfileTab: {
    screen: ProfileTab
  }
}, {
  animationEnabled: true,
  swipeEnabled: true,
  TabBarPosition: "bottom",
  tabBarOptions: {
    style:{
      ...Platform.select({
          android: {
            backgroundColor:'white'
          }
      })
    },
    activeTintColor: '#e07228',
    inactiveTintcolor: '#d1cece',
    showLabel: false,
    showIcon: true
  }
})

const style = StyleSheet.create({
  container:{
    flex: 1,
    alignItems:'center',
    justifyContent: 'center'
  }
});
