import React from 'react';
import {TextInput} from 'react-native';
import styles from './style';

const textInput = ({
  label,
  placeholderColor,
  maxLength,
  inputStyles,
  value,
  secure,
  textColor,
  handleTextChange,
  name,
  keyboardType,
  selectionColor,
}) => (
  <TextInput
    placeholder={label}
    placeholderTextColor={placeholderColor}
    style={[styles.inputDefaultStyles, {...inputStyles}]}
    maxLength={maxLength}
    value={value}
    color={textColor}
    secureTextEntry={secure}
    autoCapitalize={'none'}
    autoCorrect={false}
    selectionColor={selectionColor}
    onChangeText={(value) => handleTextChange(value)}
    underlineColorAndroid="transparent"
    keyboardType={keyboardType}
  />
);

textInput.defaultProps = {
  placeholderColor: '#4a4a4a',
  label: 'Enter',
  maxLength: 40,
  secure: false,
  textColor: '#000',
  keyboardType: 'default',
  selectionColor: '#4a4a4a',
};
export default textInput;
