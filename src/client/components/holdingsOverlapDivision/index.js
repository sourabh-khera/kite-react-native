import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';

const overlapDivision = ({investmentHeading, investmentNumber}) => {
  return (
    <View style={styles.investmentContainerDivision}>
      <Text style={styles.investmentContainerText}>{investmentHeading}</Text>
      <Text style={styles.investmentContainerNumber}>{investmentNumber}</Text>
    </View>
  );
};

export default overlapDivision;
