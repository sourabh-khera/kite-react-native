import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import AppsScreen from '../screens/apps_screen';
import ProfileScreen from '../screens/profile_screen';
import PortfolioScreen from '../screens/portfolio_screen';
import OrdersScreen from '../screens/orders_screen';
import WatchListScreen from '../screens/watchlist_screen';
import LoginScreen from '../screens/login_screen';

const Stack1 = createStackNavigator();

export const WatchlistStack = () => {
  return (
    <Stack1.Navigator>
      <Stack1.Screen name="Watchlist" component={WatchListScreen} />
    </Stack1.Navigator>
  );
};

const Stack2 = createStackNavigator();

export const OrdersStack = () => {
  return (
    <Stack2.Navigator>
      <Stack2.Screen name="Orders" component={OrdersScreen} />
    </Stack2.Navigator>
  );
};

const Stack3 = createStackNavigator();

export const PortfolioStack = () => {
  return (
    <Stack3.Navigator screenOptions={{headerShown: false}}>
      <Stack3.Screen name="Portfolio" component={PortfolioScreen} />
    </Stack3.Navigator>
  );
};

const Stack4 = createStackNavigator();

export const AppsStack = () => {
  return (
    <Stack4.Navigator>
      <Stack4.Screen name="Apps" component={AppsScreen} />
    </Stack4.Navigator>
  );
};

const Stack5 = createStackNavigator();

export const ProfileStack = () => {
  return (
    <Stack5.Navigator>
      <Stack5.Screen name="Profile" component={ProfileScreen} />
    </Stack5.Navigator>
  );
};

const Stack6 = createStackNavigator();

export const LoginStack = () => {
  return (
    <NavigationContainer>
      <Stack6.Navigator screenOptions={{headerShown: false}}>
        <Stack6.Screen name="LoginSplash" component={LoginScreen} />
      </Stack6.Navigator>
    </NavigationContainer>
  );
};
