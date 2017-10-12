import React, { Component } from 'react'
import { WebView, Text, View, StyleSheet, ListView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: 'Cochin',
  }
})
export default class Karma extends Component {
  static navigationOptions = {
    tabBarLabel: 'Karma Leaderboard',
    tabBarIcon: ({ tintColor }) =>
      <Icon name={'stars'} size={45} style={{ color: tintColor }} />
  };
  constructor(props){
    super(props)
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      })
    }
  }

  componentDidMount = () => {
    this.setState({ dataSource: this.state.dataSource.cloneWithRows([
      {
        "username": "@jcohen",
        "points": "36",
        imagePath: '/Users/jcohen/Documents/Code/iOS/react-native/ExecOnline/src/Images/jeff.jpg'
      },
      {
        "username": "@jgesualdo",
        "points": "28",
        imagePath: '/Users/jcohen/Documents/Code/iOS/react-native/ExecOnline/src/Images/joe.jpg'
      },
      {
        "username": "@jseyer",
        "points": "27",
        imagePath: '/Users/jcohen/Documents/Code/iOS/react-native/ExecOnline/src/Images/josh.jpg'
      },
    ])
   })
  }


  render = () => {
    return (
      <ListView
      dataSource={this.state.dataSource}
      enableEmptySections={true}
      renderRow={(data) => <Row {...data} />}
    />
    )
  }
}

const Row = (props) =>
  <View style={{padding: 12, marginTop: 20, flexDirection: 'row', justifyContent: 'space-between'}}>
      <Image source={{ uri: props.imagePath, height: 30, width: 30 }}>
      </Image>
      <Text style={styles.text}>
      {`${props.username}`}
      </Text>
      <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
        <Icon name={ (props.username === '@jcohen') ? 'mood' : 'whatshot' } size={30} />
        <Icon name={(props.username === '@jseyer') ? 'cake' : 'star'} size={30} />
        <Icon name={(props.username === '@jgesualdo') ? 'public' : 'free-breakfast'} size={30} />
        <Text style={{paddingLeft: 20,fontSize: 22, fontWeight: 'bold', fontFamily: 'Cochin'}}>
        {`${props.points}`}
        </Text>
    </View>

  </View>;
