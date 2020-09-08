import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {
  ProfileStack,
  WatchlistStack,
  OrdersStack,
  PortfolioStack,
  AppsStack,
} from './stack_navigation';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Portfolio"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName;
            let color = focused ? '#1e90ff' : '#000';
            if (route.name === 'Watchlist') {
              iconName = 'bookmark-outline';
              return <Ionicons name={iconName} size={28} color={color} />;
            } else if (route.name === 'Orders') {
              iconName = 'book';
              return <AntDesign name={iconName} size={28} color={color} />;
            } else if (route.name === 'Portfolio') {
              iconName = 'briefcase';
              return <Feather name={iconName} size={28} color={color} />;
            } else if (route.name === 'Apps') {
              iconName = 'cube-outline';
              return <Ionicons name={iconName} size={28} color={color} />;
            } else if (route.name === 'Profile') {
              iconName = 'user';
              return <Feather name={iconName} size={28} color={color} />;
            }
            return () => {};
          },
        })}
        tabBarOptions={{
          activeTintColor: '#1e90ff',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Watchlist" component={WatchlistStack} />
        <Tab.Screen name="Orders" component={OrdersStack} />
        <Tab.Screen name="Portfolio" component={PortfolioStack} />
        <Tab.Screen name="Apps" component={AppsStack} />
        <Tab.Screen name="Profile" component={ProfileStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default TabNavigator;
