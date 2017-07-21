import React from 'react';
import { TouchableHighlight, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function MenuHeader({ navigation }) {
  return (
    <TouchableHighlight
      onPress={() => navigation.navigate('DrawerOpen')}
    >
      <Ionicons
        name={'ios-menu'}
        size={26}
        style={styles.menu}
      />
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  menu: {
    marginRight: 15,
    color: 'black',
  }
});
