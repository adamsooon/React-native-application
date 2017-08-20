import React from 'react';
import { View, StyleSheet, TouchableHighlight } from 'react-native';
import Camera from 'react-native-camera';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class CameraDocument extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  takePicture = () => {
    const options = {};
    //options.location = ...
    this.camera.capture({metadata: options})
      .then((data) => console.log(data))
      .catch(err => console.error(err));
  };

  render() {
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}>
          <TouchableHighlight
            onPress={this.takePicture}
            style={{ marginBottom: 30}}
          >
            <MaterialIcons
              name={'camera'}
              size={35}
              style={{ color: '#26dd70', backgroundColor: 'black' }}
            />
          </TouchableHighlight>
        </Camera>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
});