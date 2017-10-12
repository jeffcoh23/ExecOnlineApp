import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableHighlight
} from 'react-native';
import { getTheme, MKIconToggle } from 'react-native-material-kit';
import Icon from 'react-native-vector-icons/EvilIcons';
const theme = getTheme();
import PeopleDetail from './PeopleDetail'

const styles = StyleSheet.create({
  card: {
    marginTop: 20
  },
  title: {
    top: 20,
    left: 80,
    fontSize: 16
  },
  image: {
    height: 140
  },

  companyNameandTeam: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },

  action: {
    flex: 1,
    backgroundColor: '#e93434',
    color: 'white',
    fontSize: 16
  },
  icon: {
    position: 'absolute',
    top: 15,
    left: 0,
    color: 'white',
    backgroundColor: 'rgba(255,255,255,0)'
  },
  likeButton: {
    position: 'absolute',
    top: 15,
    right: 20,
    backgroundColor: 'rgba(255,255,255,0)'
  },
  likeButtonOnToggle: {
    position: 'absolute',
    top: 15,
    right: 20,
    color: 'green'
  }
});

const PeopleItem = props => {
  return (
    <TouchableHighlight onPress={this.setDetailView}>
      <View style={[theme.cardStyle, styles.card]}>
        <Image
          source={{
            uri:
              props.item.imagePath
          }}
          style={[theme.cardImageStyle, styles.image]}
        />
        {/* <Icon name={'user'} size={100} style={styles.icon} /> */}
        <MKIconToggle size={50} style={styles.likeButton}>
          {/* <Icon
            state_checked={true}
            name={'plus'}
            size={50}
            style={styles.likeButton}
          />
          <Icon name={'check'} size={50} style={styles.likeButtonOnToggle} /> */}
        </MKIconToggle>
        <View style={styles.companyNameandTeam}>
          <Text style={[theme.cardActionStyle, styles.action]}>
            {props.item.title}
          </Text>
          <Text style={[theme.cardActionStyle, styles.action]}>
            {props.item.team}
          </Text>
        </View>
        {/* <Text style={[styles.teamName, styles.action]}>
        </Text> */}
      </View>
    </TouchableHighlight>
  );
};

export default PeopleItem
