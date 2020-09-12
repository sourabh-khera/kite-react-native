import React from 'react';
import { View, Text } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import styles from './style';

const actionItems = ({ iconName, actionItemContainerClass, actionName }) => {
  return (
    <View style={styles[actionItemContainerClass]}>
      <Feather
        style={styles.actionIcon}
        name={iconName}
        size={16}
        color={'#0075d2'}
      />
      <Text style={styles.actionText}>{actionName}</Text>
    </View>
  );
};

export default actionItems;
