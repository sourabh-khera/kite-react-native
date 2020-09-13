import React from 'react';
import { View, Text } from 'react-native';

import styles from './style';

const holdingsListContent = ({ item }) => {
  return (
    <View style={styles.contentListContainer}>
      <View style={styles.contentLeftPart}>
        <View style={styles.quantityAvgContainer}>
          <Text style={styles.contentLeftPartLeftText}>Qty. </Text>
          <Text
            style={styles.contentLeftPartRightText}>{`${item.quantity} `}</Text>
          <Text style={styles.contentLeftPartLeftText}>Avg. </Text>
          <Text style={styles.contentLeftPartRightText}>
            {item.average_price}
          </Text>
        </View>
        <Text style={styles.contentLeftPartMiddleText}>
          {item.tradingsymbol}
        </Text>
        <View style={styles.quantityAvgContainer}>
          <Text style={styles.contentLeftPartLeftText}>Invested </Text>
          <Text style={styles.contentLeftPartRightText}>
            {item.quantity * item.average_price}
          </Text>
        </View>
      </View>
      <View style={styles.contentRightPart}>
        <Text style={styles.contentRightPartTextCommon}>-17.50 %</Text>
        <Text style={styles.contentRightPartMiddleText}>{item.pnl}</Text>
        <View style={styles.ltpContainer}>
          <Text style={styles.contentLeftPartLeftText}>LTP </Text>
          <Text style={styles.contentLeftPartRightText}>{item.last_price}</Text>
          <Text style={styles.contentRightPartTextCommon}>(-4.94) %</Text>
        </View>
      </View>
    </View>
  );
};

export default holdingsListContent;
