import React from 'react';
import { Text, View, ScrollView, StyleSheet, Platform, CameraRoll, Modal, TouchableHighlight, Image, Dimensions } from 'react-native';
import Button from 'apsl-react-native-button';
import ModalStyles from '../components/common/modal/modalStyles';

const { width } = Dimensions.get('window');

export default class ContestDocument extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      photos: [],
      index: null,
    };
  }

  setIndex = (index) => {
    if (index === this.state.index) {
      index = null
    }
    this.setState({ index })
  };

  getPhotos = () => {
    CameraRoll.getPhotos({
      first: 20,
      assetType: 'All'
    })
      .then(r => this.setState({ photos: r.edges }))
  };

  toggleModal = () => {
    this.setState({ modalVisible: !this.state.modalVisible });
  };

  handlePhotoIndex = i => () => {
    this.setIndex(i);
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        <Text
          style={{ marginBottom: 20}}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam beatae doloribus eligendi quisquam? Blanditiis consequatur eius excepturi in recusandaedd.
          {this.state.index}
        </Text>
        <Button
          onPress={() => { this.toggleModal(); this.getPhotos() }}
          style={{ borderColor: '#26dd70' }}
          textStyle={{ color:'#26dd70' }}
        >
          Browse photos
        </Button>
        <Button
          onPress={() =>
            navigate('Camera')
          }
          style={{ borderColor: '#26dd70' }}
          textStyle={{ color:'#26dd70' }}
        >
          Take a photo
        </Button>

        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => console.log('closed')}
        >
          <View style={ModalStyles.modalContainer}>
            <Button
              onPress={this.toggleModal}
              style={{ borderColor: '#26dd70' }}
              textStyle={{ color:'#26dd70' }}
            >
              Close
            </Button>
            <ScrollView
              contentContainerStyle={ModalStyles.imageList}>
              {
                this.state.photos.map((picture, i) => {
                  return (
                    <TouchableHighlight
                      style={{opacity: i === this.state.index ? 0.5 : 1}}
                      key={i}
                      underlayColor='transparent'
                      onPress={this.handlePhotoIndex(i)}
                    >
                      <Image
                        style={{
                          width: width/3,
                          height: width/3
                        }}
                        source={{uri: picture.node.image.uri}}
                      />
                    </TouchableHighlight>
                  )
                })
              }
            </ScrollView>
          </View>
        </Modal>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    ...Platform.select({
      ios: {
        backgroundColor: '#fff',
      },
      android: {
        backgroundColor: 'blue',
      },
    }),
  },
  modalContainer: {
    paddingTop: 20,
    flex: 1
  },
});