import PeopleItem from './PeopleItem'
import React, { Component } from 'react';
import { Text, View, StyleSheet, ListView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Karma from './Karma'

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginTop: 20,
    flex: 1
  },
  headerContainer: {
    flex: 1,
    padding: 8,
    paddingTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#C1C1C1',
  },
  input: {
    height: 30,
    flex: 1,
    paddingHorizontal: 8,
    fontSize: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 2,
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
});

export default class PeopleList extends Component{
  static navigationOptions = {
    tabBarLabel: 'People List',
    tabBarIcon: ({ tintColor }) =>
      <Icon name={'contacts'} size={40} style={{ color: tintColor }} />
  };
  constructor(props){
    super(props)
    this.state = {
      showDetailView: false,
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      })
    };
  }

  componentDidMount = () => {
    this.setState({ dataSource: this.state.dataSource.cloneWithRows([
      {
        title: "Jeff Cohen",
        team: "Technology Team",
        imagePath: '/Users/jcohen/Documents/Code/iOS/react-native/ExecOnline/src/Images/jeff.jpg'
      },
      {
        title: "Joe Gesualdo",
        team: "Technology Team",
        imagePath: '/Users/jcohen/Documents/Code/iOS/react-native/ExecOnline/src/Images/joe.jpg'
      },
      {
        title: "Josh Seyer",
        team: "Commercial Team",
        imagePath: '/Users/jcohen/Documents/Code/iOS/react-native/ExecOnline/src/Images/josh.jpg'
      },

    ])
  })
  }

  _renderItem(item){
    return <PeopleItem item={item}/>
  }

  setDetailView = () => {
    this.setState({ showDetailView: true })
  }

  render = () => {
    const { navigate } = this.props.navigation;
    navigate('PeopleDetail')
    if (this.state.showDetailView == false){
      return(
      <View style={styles.container}>
        <ListView
        dataSource={this.state.dataSource}
        renderRow={this._renderItem.bind(this)}
        enableEmptySections={true}
        renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
        onPress={this.setDetailView}
        //renderHeader={() => <Header />}
      />
      </View>)
      }
      else{
        return <Karma/>
      }
  }
}

const Header = (props) => (
  <View style={styles.headerContainer}>
    <TextInput
      style={styles.input}
      placeholder="Search..."
      onChangeText={(text) => console.log('searching for ', text)}
    />
  </View>
);
