'use strict';

import React from 'react';
import { View, Text, TextInput } from 'react-native';
import createSelector from 'react-native-conditional-stylesheet';
import ContactFormStyles from './ContactFormStyles'

export default class InputBox extends React.Component {
  static propTypes = {
    children: React.PropTypes.node,
    extraStyles: React.PropTypes.object,
    isInvalid: React.PropTypes.bool,
    label: React.PropTypes.string,
    multiline: React.PropTypes.bool,
    numberOfLines: React.PropTypes.number,
    onChangeText: React.PropTypes.func.isRequired,
    placeholder: React.PropTypes.string,
    value: React.PropTypes.string.isRequired,
  };

  static defaultProps = {
    children: null,
    extraStyles: {},
    isInvalid: false,
    label: '',
    multiline: false,
    numberOfLines: 1,
    placeholder: '',
  };

  constructor(props) {
    super(props);
    this.state = {
      isFocusing: false,
    };
  }

  onLabelPress = () => {
    this.input.focus();
  };

  onInputFocus = () => {
    this.setState({
      isFocusing: this.input.isFocused(),
    });
  };

  render() {
    const classNames = createSelector(ContactFormStyles);
    return (
      <View style={ContactFormStyles.formInputConteiner}>
        {this.props.label && (
          <Text
            style={ContactFormStyles.formInputLabel}
            onPress={this.onLabelPress}
          >
            {this.props.label}
          </Text>
        )}
        <TextInput
          ref={ref => (this.input = ref)}
          value={this.props.value}
          placeholder={this.props.placeholder}
          multiline={this.props.multiline}
          numberOfLines={this.props.numberOfLines}
          style={[classNames('formInput', {
            inputIsFocus: this.state.isFocusing,
            inputIsInvalid: this.props.isInvalid,
          }), this.props.extraStyles]}
          onChangeText={this.props.onChangeText}
          onFocus={this.onInputFocus}
          onBlur={this.onInputFocus}
        />
        {this.props.children}
      </View>
    );
  }
}
