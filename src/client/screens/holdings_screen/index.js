import React, { useEffect } from 'react';
import { Text, View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import Loader from '../../components/loader';
import OverlapDivision from '../../components/holdingsOverlapDivision';
import ActionItems from '../../components/holdingsActions';
import HoldingList from '../../components/holdingsListContent';
import { getHoldings } from '../../actions/asyncActions/portfolio_async';
import {
  holdingOverlapConfig,
  holdingActionsConfig,
} from '../../componentConfig';

import styles from './style';

const Holdings = ({ getHoldings, holdings, showLoader }) => {
  useEffect(() => {
    getHoldings();
  }, [getHoldings]);
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
    <View style={{ flex: 1 }}>
      <FlatList
        data={holdings.length && holdings}
        renderItem={HoldingList}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
  const renderLoader = showLoader ? <Loader /> : null;
  return (
    <View style={styles.holdingsContainer}>
      {renderLoader}
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
          </View>
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = ({ portfolioReducer, commonReducer }) => ({
  holdings: portfolioReducer.holdings,
  showLoader: commonReducer.showLoader,
});
const mapDispatchToProps = {
  getHoldings,
};

export default React.memo(
  connect(mapStateToProps, mapDispatchToProps)(Holdings),
);
