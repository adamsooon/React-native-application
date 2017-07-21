import React from 'react';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import HomePageDocument from './views/HomePageDocument';
import ContactDocument from './views/ContactDocument';
import ContestDocument from './views/ContestDocument';
import CameraDocument from './views/CameraDocument';
import MenuHeader from './components/MenuHeader'
import Ionicons from 'react-native-vector-icons/Ionicons';

const defaultHeader = {
  headerTintColor: 'black',
};

const Router = DrawerNavigator({
  home: {
    screen: HomePageDocument,
    navigationOptions: ({ navigation }) => ({
      ...defaultHeader,
      title: 'Home',
      drawerIcon: () => (
        <Ionicons
          name={'ios-home'}
          size={26}
          style={{ color: 'black' }}
        />
      ),
      headerRight: (
        <MenuHeader
          navigation={navigation}
        />
      ),
    }),
  },
  about: {
    screen: ContactDocument,
    navigationOptions: ({ navigation }) => ({
      ...defaultHeader,
      title: 'Contact',
      drawerIcon: () => (
        <Ionicons
          name={'ios-contact'}
          size={26}
          style={{ color: 'black' }}
        />
      ),
      headerRight: (
        <MenuHeader
          navigation={navigation}
        />
      ),
    }),
  },
  contest: {
    screen: ContestDocument,
    navigationOptions: ({ navigation }) => ({
      ...defaultHeader,
      title: 'Contest',
      drawerIcon: () => (
        <Ionicons
          name={'ios-reverse-camera'}
          size={26}
          style={{ color: 'black' }}
        />
      ),
      headerRight: (
        <MenuHeader
          navigation={navigation}
        />
      ),
    }),
  },
});

const StacksOverTabs = StackNavigator({
  Root: {
    screen: Router,
  },
  Camera: {
    screen: CameraDocument,
    navigationOptions: {
      title: 'Camera',
    },
  },
});

export default StacksOverTabs;