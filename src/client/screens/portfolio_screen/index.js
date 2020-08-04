import React from 'react';
import {View, Text} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import FocusAwareStatusBar from '../../components/focusStatusBar';
import HoldingsScreen from '../../screens/holdings_screen';
import {elevationShadowStyle} from '../../utils';

import styles from './style';

const PortfolioScreen = () => {
  const Tab = createMaterialTopTabNavigator();
  const tabBarLabel = ({focused, color}) => {
    return (
      <View style={styles.labelContainer}>
        <Text style={{color, fontWeight: 'bold'}}>Holdings</Text>
        {focused ? (
          <View style={styles.tabBarLabel}>
            <Text style={styles.badgeIcon}>8</Text>
          </View>
        ) : null}
      </View>
    );
  };
  return (
    <View style={styles.portfolioContainer}>
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />
      <View style={styles.headerContainer}>
        <View style={styles.headerHeadingContainer}>
          <Text style={styles.headerText}>Portfolio</Text>
          <FontAwesome name={'angle-down'} size={36} color={'#434446'} />
        </View>

        <Tab.Navigator
          initialRouteName={'Holdings'}
          tabBarOptions={{
            style: styles.tabBar,
            labelStyle: styles.tabLabel,
            activeTintColor: '#88abeb',
            inactiveTintColor: '#434446',
            indicatorStyle: styles.tabIndicator,
          }}>
          <Tab.Screen
            name="Holdings"
            component={HoldingsScreen}
            options={{tabBarLabel}}
          />
          <Tab.Screen name="Positions" component={HoldingsScreen} />
        </Tab.Navigator>
      </View>
    </View>
  );
};

export default PortfolioScreen;
