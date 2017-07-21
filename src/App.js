import React from 'react';
import { View } from 'react-native';
import Router from './Router';

// function cacheFonts(fonts) {
//   return fonts.map(font => Expo.Font.lwaoadAsync(font));
// }

export default class App extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   appIsReady: false,
    // };
  }

  // componentWillMount() {
  //   this.loadAssetsAsync();
  // }
  //
  // async loadAssetsAsync() {
  //
  //   const fontAssets = cacheFonts([
  //     require('./assets/fonts/Roboto-Regular.ttf'),
  //     require('./assets/fonts/Roboto-Bold.ttf')
  //   ]);
  //
  //   await Promise.all([
  //     ...fontAssets,
  //   ]);
  //
  //   this.setState({appIsReady: true});
  // }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Router />
      </View>
    );
  }
}

