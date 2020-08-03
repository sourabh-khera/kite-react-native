import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const OrdersScreen = () => {
  return (
    <View style={styles.ordersContainer}>
      <Text>Orders!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ordersContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default OrdersScreen;
