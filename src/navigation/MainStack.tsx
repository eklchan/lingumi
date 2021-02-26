import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import RecentScreen from '../screens/RecentScreen';
import { Ionicons } from '@expo/vector-icons';

const BottomTab = createBottomTabNavigator();

const MainStack = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => <Ionicons name="home-sharp" size={25} />,
          unmountOnBlur: true,
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: () => <Ionicons name="search" size={25} />,
          unmountOnBlur: true,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default MainStack;
