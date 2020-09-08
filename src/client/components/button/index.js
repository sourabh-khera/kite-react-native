import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './style';

const buttonWithOpacity = ({
  buttonText,
  buttonStyles,
  buttonTextStyles,
  handleButtonClick,
}) => (
  <TouchableOpacity
    style={[styles.buttonDefaultStyles, {...buttonStyles}]}
    onPress={() => handleButtonClick()}>
    <Text style={[styles.buttonTextDefaultStyles, {...buttonTextStyles}]}>
      {buttonText}
    </Text>
  </TouchableOpacity>
);

export default buttonWithOpacity;
