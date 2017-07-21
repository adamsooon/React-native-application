import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  formInputConteiner: {
    marginBottom: 20,
  },
  formInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 15,
    paddingRight: 15,
  },

  inputIsInvalid: {
    borderColor: 'red',
  },

  formError: {
    marginTop: 10,
    color: 'red',
  },

  formMessageInput: {
    height: 80,
  },
});