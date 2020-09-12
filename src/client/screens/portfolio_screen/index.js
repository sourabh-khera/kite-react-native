import React from 'react';
import { View, Text } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FocusAwareStatusBar from '../../components/focusStatusBar';
import HoldingsScreen from '../../screens/holdings_screen';
import { elevationShadowStyle } from '../../utils';

import styles from './style';

const PortfolioScreen = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <View style={styles.portfolioContainer}>
      <FocusAwareStatusBar
        barStyle="dark-content"
        backgroundColor="#ebecee"
        translucent={true}
      />
      <View style={styles.headerContainer}>
        <View style={styles.headerHeadingContainer}>
          <Text style={styles.headerText}>Portfolio</Text>
        </View>

        <Tab.Navigator
          initialRouteName={'Holdings'}
          tabBarOptions={{
            style: styles.tabBar,
            labelStyle: styles.tabLabel,
            activeTintColor: '#0075d2',
            inactiveTintColor: '#434446',
            indicatorStyle: styles.tabIndicator,
          }}>
          <Tab.Screen name="Holdings" component={HoldingsScreen} />
          <Tab.Screen name="Positions" component={HoldingsScreen} />
        </Tab.Navigator>
      </View>
    </View>
  );
};

export default PortfolioScreen;
