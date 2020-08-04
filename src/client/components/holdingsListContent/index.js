import React from 'react';
import {View, Text} from 'react-native';

import styles from './style';

const holdingsListContent = ({item}) => {
  return (
    <View style={styles.contentListContainer}>
      <View style={styles.contentLeftPart}>
        <View style={styles.quantityAvgContainer}>
          <Text
            style={
              styles.contentLeftPartLeftText
            }>{`${item.leftPartValue1} `}</Text>
          <Text style={styles.contentLeftPartRightText}>Qty,</Text>
          <View style={styles.bullet} />
          <Text style={styles.contentLeftPartLeftText}>Avg. </Text>
          <Text style={styles.contentLeftPartRightText}>
            {item.leftPartValue2}
          </Text>
        </View>
        <Text style={styles.contentLeftPartMiddleText}>
          {item.leftPartMiddle}
        </Text>
        <View style={styles.quantityAvgContainer}>
          <Text style={styles.contentLeftPartLeftText}>Invested </Text>
          <Text style={styles.contentLeftPartRightText}>
            {item.leftPartValue3}
          </Text>
        </View>
      </View>
      <View style={styles.contentRightPart}>
        <Text
          style={
            styles.contentRightPartTextCommon
          }>{`${item.rightPartValue1} %`}</Text>
        <Text style={styles.contentRightPartMiddleText}>
          {item.rightPartValue2}
        </Text>
        <View style={styles.ltpContainer}>
          <Text style={styles.contentLeftPartLeftText}>LTP </Text>
          <Text style={styles.contentLeftPartRightText}>
            {item.rightPartValue3}
          </Text>
          <Text
            style={
              styles.contentRightPartTextCommon
            }>{` (${item.rightPartValue4})%`}</Text>
        </View>
      </View>
    </View>
  );
};

export default holdingsListContent;
