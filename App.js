import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import fb from './Screens/fb';
import insta from './Screens/insta';
export default class App extends React.Component {
  render(){
  return (
    <View><AppContainer/></View>
  )
}
}
const TabNavigator = createBottomTabNavigator({
  fb:{screen:fb},
  insta:{screen:insta}
})
const AppContainer = createAppContainer(
  TabNavigator
)