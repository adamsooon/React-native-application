import React from 'react';
import { Text, ScrollView, StyleSheet, Platform, Animated } from 'react-native';
import ContactForm from '../components/forms/ContactForm';
// import MapView from 'react-native-maps';

export default class ContactDocument extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0.0122,
        longitudeDelta: 0.0121,
      },
      /* userPosition: new MapView.AnimatedRegion({
        latitude: 0,
        longitude: 0,
      }), */
      errorGet: null,
      errorWatch: null,
    };
  }

  /* componentDidMount() {
    this.handleInitialPosition();
    this.watchId = navigator.geolocation.watchPosition(
      (position) => {
        this.setState({
          userPosition: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          },
        });
      },
      (error) => this.setState({ errorWatch: error.message }),
      { enableHighAccuracy: true, timeout: 6000, distanceFilter: 10 },
    );
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.userPosition !== nextProps.userPosition) {
      this.state.userPosition.timing({
        ...nextProps.userPosition,
        duration: 500
      }).start();
    }
  }

  handleInitialPosition = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.0122,
            longitudeDelta: 0.0121,
          },
        });
      },
      (error) => this.setState({ errorGet: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  };

  */

  onRegionChange = (region) => {
    this.setState({ region });
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text
          style={{ marginBottom: 20}}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam beatae doloribus eligendi quisquam? Blanditiis consequatur eius excepturi in recusandaed.
        </Text>
        {/* <MapView
          region={this.state.region}
          style={{ width: '100%', height: 200, marginBottom: 20}}
          onRegionChange={this.onRegionChange}
        >
          <MapView.Marker.Animated coordinate={this.state.userPosition} />
        </MapView> */}
        <ContactForm />
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
});