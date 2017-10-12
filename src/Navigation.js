import { StackNavigator, TabNavigator } from 'react-navigation';
import PeopleList from './PeopleList';
import Karma from './Karma';

const Navigation = TabNavigator(
  {
    PeopleList: { screen: PeopleList },
    Karma: { screen: Karma }
  },
  {
    tabBarOptions: {
      flex: 1,
      activeTintColor: 'black',
      inactiveTintColor: 'white',
      swipeEnabled: true,
      showLabel: true,
      style: {
        backgroundColor: 'lightgrey',
        height: 60
      }
    }
  }
);
export default Navigation
