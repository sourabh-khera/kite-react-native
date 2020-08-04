import React from 'react';
import {Text, View, FlatList} from 'react-native';
import OverlapDivision from '../../components/holdingsOverlapDivision';
import ActionItems from '../../components/holdingsActions';
import HoldingList from '../../components/holdingsListContent';
import {
  holdingListConfig,
  holdingOverlapConfig,
  holdingActionsConfig,
} from '../../componentConfig';

import styles from './style';

const Holdings = () => {
  const renderOverlapContent = holdingOverlapConfig.map((item, idx) => {
    return (
      <OverlapDivision
        investmentNumber={item.investmentNumber}
        investmentHeading={item.investmentHeading}
        key={idx}
      />
    );
  });
  const renderActions = holdingActionsConfig.map((action, idx) => {
    return (
      <ActionItems
        key={idx}
        iconName={action.iconName}
        actionName={action.actionName}
        actionItemContainerClass={action.actionItemContainerClass}
      />
    );
  });
  const renderHoldingList = (
    <View style={{flex: 1}}>
      <FlatList
        data={holdingListConfig}
        renderItem={HoldingList}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );

  return (
    <View style={styles.holdingsContainer}>
      <View style={styles.extendedHeader} />
      <View style={styles.contentContainer}>
        <View style={styles.actionContainer}>{renderActions}</View>
        {renderHoldingList}
      </View>
      <View style={styles.overlapContainer}>
        <View style={styles.investmentContainer}>{renderOverlapContent}</View>
        <View style={styles.plContainer}>
          <View style={styles.plContainerLeftPart}>
            <Text style={styles.plContainerLeftPartText}>P&L</Text>
          </View>
          <View style={styles.plContainerRightPart}>
            <Text style={styles.plContainerRightPartText}>-941.85</Text>
            <Text style={styles.plContainerRightPartTextSmall}> -0.30 %</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Holdings;
