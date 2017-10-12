import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableHighlight
} from 'react-native';

export default class PeopleDetail extends Component {
  static navigationOptions = {
    title: "Details"
  }
  constructor(props){
    super(props)
    this.state = {
      person: this.props.person
    }
  }
  render = () => {
    return(
    <Text>sdf</Text>
    )
  }
}
