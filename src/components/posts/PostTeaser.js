import React, { PropTypes } from 'react';
import { View, Text, Image } from 'react-native';
import Fonts from '../themes/Fonts';
import Button from 'apsl-react-native-button'

export default function PostTeaser({source, content, header, isLoading, onPress}) {
  return (
    <View style={{ flex: 1, borderWidth: 1, marginBottom: 20, borderColor: '#26dd70'}}>
      <Image
        style={{ width: '100%', height: 170 }}
        source={{ uri: source }}
      />
      <View style={{ padding: 10 }}>
        <Text
          style={[
            Fonts.style.title,
            { marginBottom: 10 },
          ]}
        >
          {header}
        </Text>
        <Text style={{ fontSize: 12, marginBottom: 10 }}>
          {content}
        </Text>
        <View style={{ width: '100%', alignItems: 'flex-end' }}>
          <View style={{ width: '50%' }}>
            <Button
              onPress={onPress}
              isLoading={isLoading}
              style={{ borderColor: '#26dd70', marginBottom: 10 }}
              textStyle={{ color:'#26dd70' }}
            >
              More
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
}

PostTeaser.PropTypes = {
  source: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
  header: PropTypes.string.isRequired,
};