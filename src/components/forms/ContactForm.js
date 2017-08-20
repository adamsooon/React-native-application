import React, { PropTypes } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from 'apsl-react-native-button'
import InputBox from './InputBox'
import isNameFormatValid from './isNameFormatValid'
import isEmailFormatValid from './isEmailFormatValid'
import isPhoneFormatValid from './isPhoneFormatValid'
import ContactFormStyles from './ContactFormStyles'
import createSelector from 'react-native-conditional-stylesheet';
import isEmpty from 'lodash/isEmpty';
import Variables from '../themes/Variables';

function isFormValid(state) {
  return isNameFormatValid(state.name)
    && !isEmpty(state.name)
    && isEmailFormatValid(state.email)
    && !isEmpty(state.email)
    && isNameFormatValid(state.surname)
    && !isEmpty(state.surname)
    && isPhoneFormatValid(state.phone)
    && !isEmpty(state.phone)
    && !isEmpty(state.message)
    && state.message.length <= 255
}

export default class ContactForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      surname: '',
      email: '',
      phone: '',
      message: '',
      isSubmitted: false,
      isSending: false,
      isSent: false,
    };
  }

  handleName = (value) => {
    this.setState({
      name: value
    })
  };

  handleSurname = (value) => {
    this.setState({
      surname: value
    })
  };

  handleEmail = (value) => {
    this.setState({
      email: value
    })
  };

  handlePhone = (value) => {
    this.setState({
      phone: value
    })
  };

  handleMessage = (value) => {
    this.setState({
      message: value
    })
  };

  onSubmit = () => {
    this.setState({
      isSubmitted: true,
    });
    if (isFormValid(this.state)) {
      this.setState({
        isSending: true,
      });
    }
  };

  isFocused = () => {
    this.setState({
      isFocusing: this.input.isFocused(),
    });
  };

  // callToApi = () => {
  //   const formData = new FormData();
  //   formData.append('base64file', res);
  //   formData.append('user_name', this.state.name);
  //
  //   const fetchOptions = {
  //     body: formData,
  //     method: 'POST',
  //   };
  //
  //   fetch(
  //     '/api/file', fetchOptions
  //   )
  //     .then(
  //       this.setState({
  //         isSending: false,
  //         isSend: true,
  //       })
  //     );
  // };

  render() {
    const classNames = createSelector(ContactFormStyles);
    return (
      <View style={{ flex: 1 }}>
        {!this.state.isSent ? (
          <View>
            <InputBox
              isInvalid={!isNameFormatValid(this.state.name) && this.state.isSubmitted}
              onChangeText={this.handleName}
              label="Name"
              value={this.state.name}
            >
              {isEmpty(this.state.name) && this.state.isSubmitted && (
                <Text style={ContactFormStyles.formError}>This field is required.</Text>
              )}
              {!isEmpty(this.state.name) && !isNameFormatValid(this.state.name)
              && this.state.isSubmitted && (
                <Text style={ContactFormStyles.formError}>
                  Please provide your name. It can contain at least 3 letters
                </Text>
              )}
            </InputBox>
            <InputBox
              isInvalid={!isNameFormatValid(this.state.surname) && this.state.isSubmitted}
              onChangeText={this.handleSurname}
              label="Surname"
              value={this.state.surname}
            >
              {isEmpty(this.state.surname) && this.state.isSubmitted && (
                <Text style={ContactFormStyles.formError}>This field is required.</Text>
              )}
              {!isEmpty(this.state.surname) && !isNameFormatValid(this.state.surname)
              && this.state.isSubmitted && (
                <Text style={ContactFormStyles.formError}>
                  Please provide your surname. It can contain at least 3 letters
                </Text>
              )}
            </InputBox>
            <InputBox
              isInvalid={!isEmailFormatValid(this.state.email) && this.state.isSubmitted}
              onChangeText={this.handleEmail}
              label="E-mail"
              value={this.state.email}
            >
              {isEmpty(this.state.email) && this.state.isSubmitted && (
                <Text style={ContactFormStyles.formError}>This field is required.</Text>
              )}
              {!isEmpty(this.state.email) && !isEmailFormatValid(this.state.email)
              && this.state.isSubmitted && (
                <Text style={ContactFormStyles.formError}>
                  Please provide a valid e-mail address to be sure that we will answer you. This field is required.
                </Text>
              )}
            </InputBox>
            <InputBox
              isInvalid={!isPhoneFormatValid(this.state.phone) && this.state.isSubmitted}
              onChangeText={this.handlePhone}
              label="Phone number"
              value={this.state.phone}
            >
              {isEmpty(this.state.phone) && this.state.isSubmitted && (
                <Text style={ContactFormStyles.formError}>This field is required.</Text>
              )}
              {!isEmpty(this.state.phone) && !isPhoneFormatValid(this.state.phone)
              && this.state.isSubmitted && (
                <Text style={ContactFormStyles.formError}>
                  Please provide a valid phone number. It can contain numbers from 0 to 9,
                  and below signs: (), +, -.
                </Text>
              )}
            </InputBox>
            <InputBox
              extraStyles={StyleSheet.flatten(ContactFormStyles.formMessageInput)}
              isInvalid={(isEmpty(this.state.message) || this.state.message.length > 255)
                && this.state.isSubmitted}
              onChangeText={this.handleMessage}
              label="Message"
              multiline = {true}
              numberOfLines = {4}
              value={this.state.message}
            >
              <Text
                style={[classNames({
                  formError: (isEmpty(this.state.message)
                  || this.state.message.length > 255)
                  && this.state.isSubmitted,
                }), ContactFormStyles.counterText ]}
              >
                {this.state.message.length}/255
              </Text>
              {isEmpty(this.state.message) && this.state.isSubmitted && (
                <Text style={ContactFormStyles.formError}>This field is required.</Text>
              )}
            </InputBox>
            <Button
              onPress={this.onSubmit}
              isLoading={this.state.isSending}
              style={{ borderColor: Variables.colors.green }}
              textStyle={{ color: Variables.colors.green }}
            >
              Send
            </Button>
          </View>
        ) : (
          <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Text>The form has been sent</Text>
          </View>
        )}
      </View>
    );
  }
}
