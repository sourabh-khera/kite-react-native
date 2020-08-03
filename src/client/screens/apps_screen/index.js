import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const AppsScreen = () => {
  return (
    <View style={styles.appsContainer}>
      <Text>Apps!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  appsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AppsScreen;
