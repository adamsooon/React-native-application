import React from 'react';
import { View, StyleSheet } from 'react-native';
import Button from 'apsl-react-native-button';
import Camera from 'react-native-camera';

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
          <Button
            onPress={this.takePicture}
            style={{ borderColor: '#26dd70' }}
            textStyle={{ color:'#26dd70' }}
          >
            Take a photo
          </Button>
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