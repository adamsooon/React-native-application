import React from 'react';
import { StyleSheet, Text, ScrollView, View, ActivityIndicator, Platform } from 'react-native';
import PostTeaser from '../components/posts/PostTeaser';

export default class HomePageDocument extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
  }

  toggleIndicator = () => {
    this.setState({
      isLoading: !this.state.isLoading,
    })
  };

  render() {
    // const { navigation } = this.props;
    return (
      <ScrollView style={styles.container}>
        <Text style={{ marginBottom: 20}}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum eos maxime natus obcaecati optio qui reprehenderit rerum totam unde vero.
        </Text>
        {this.state.isLoading && (
          <ActivityIndicator
            animating
            size={0}
          />
        )}
        <PostTeaser
          header="Lorem ipsum dolor sit amet"
          source="https://startups.talentdays.pl/img/video_mobile.jpg"
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid deserunt dolores fugiat incidunt, minus perferendis similique ullam veniam vero."
          onPress={this.toggleIndicator}
        />
        <PostTeaser
          header="Lorem ipsum dolor sit amet"
          source="https://startups.talentdays.pl/img/video_mobile.jpg"
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid deserunt dolores fugiat incidunt, minus perferendis similique ullam veniam vero."
          onPress={this.toggleIndicator}
        />
        <View style={{ flex: 1, flexDirection: 'row', marginBottom: 50 }}>
          <View style={{ flexGrow: 0, flexShrink: 1, flexBasis: '50%', paddingLeft: 5, paddingRight: 5 }}>
            <Text>Lorem ipsum dolor sit amet, consectetur.</Text>
          </View>
          <View style={{ flexGrow: 0, flexShrink: 1, flexBasis: '50%', paddingLeft: 5, paddingRight: 5 }}>
            <Text>Lorem ipsum dolor sit amet, consectetur.</Text>
          </View>
        </View>

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
