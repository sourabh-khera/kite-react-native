import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const WatchListScreen = () => {
  return (
    <View style={styles.watchListContainer}>
      <Text>WatchList!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  watchListContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default WatchListScreen;
