import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PositionScreen = () => {
  return (
    <View style={styles.appsContainer}>
      <Text>Positions!</Text>
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

export default PositionScreen;
