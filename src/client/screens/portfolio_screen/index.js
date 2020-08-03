import React from 'react';
import {View, Text} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FocusAwareStatusBar from '../../components/focusStatusBar';
import styles from './style';

const PortfolioScreen = () => {
  return (
    <View style={styles.portfolioContainer}>
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />
      <View style={styles.headerContainer}>
        <View style={styles.headerHeadingContainer}>
          <Text style={styles.headerText}>Portfolio</Text>
          <FontAwesome name={'angle-down'} size={36} color={'#434446'} />
        </View>
      </View>
      <View style={styles.contentContainer} />
      <View style={styles.overlapContainer}>
        <View style={styles.investmentContainer}>
          <View style={styles.investmentContainerLeftPart}>
            <Text style={styles.investmentContainerText}>Invested</Text>
            <Text style={styles.investmentContainerNumber}>3,17,220.95</Text>
          </View>
          <View style={styles.investmentContainerRightPart}>
            <Text style={styles.investmentContainerText}>Current</Text>
            <Text style={styles.investmentContainerNumber}>3,16,220.95</Text>
          </View>
        </View>
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

export default PortfolioScreen;
