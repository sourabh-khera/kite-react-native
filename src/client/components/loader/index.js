import React from 'react';
import { ActivityIndicator } from 'react-native';
import styles from './style';

const loader = () => {
  return (
    <ActivityIndicator
      size="large"
      color="#000"
      style={styles.loaderContainer}
    />
  );
};

export default loader;
