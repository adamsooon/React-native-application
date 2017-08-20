import { StyleSheet } from 'react-native';
import Fonts from '../themes/Fonts';
import Variables from '../themes/Variables';

export default StyleSheet.create({
  formInputConteiner: {
    marginBottom: Variables.margins.marginLarge,
  },

  formInput: {
    height: 40,
    borderColor: Variables.colors.mako,
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 15,
    paddingRight: 15,
  },

  inputIsFocus: {
    borderColor: Variables.colors.cornflower,
  },

  inputIsInvalid: {
    borderColor: Variables.colors.red,
  },

  formError: {
    marginTop: Variables.margins.marginSmall,
    color: 'red',
  },

  formMessageInput: {
    height: 80,
  },

  // Input label
  formInputLabel: {
    ...Fonts.style.labelText,
    marginBottom: Variables.margins.marginSmall,
    color: Variables.colors.mako,
  },

  // Counter of letter

  counterText: {
    marginTop: Variables.margins.marginSmall,
    textAlign: 'right',
  }
});