import React, { useEffect, useState } from 'react';
import { BuildIcon, HomeIcon, LeaderboardIcon } from '@/assets/icons';
import BuildScreen from './BuildScreen';
import HomeScreen from './HomeScreen';
import LeaderboardScreen from './LeaderboardScreen';
import Colors from '@/constants/Colors';
import { getUser } from '@/service/userService';
import { Text } from 'react-native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { User } from '@/constants/Types';

const Tab = createMaterialTopTabNavigator();

export default function TabLayout() {

  return (
    <Tab.Navigator
      initialRouteName="home"
      screenOptions={({route}) => ({
        tabBarActiveTintColor: Colors.activeTab,
        tabBarInactiveTintColor: Colors.inactiveTab,
        tabBarIndicatorStyle: { display: 'none' },
        tabBarLabelStyle: { fontSize: 12 },
        tabBarIconStyle: { width:36, height: 36, justifyContent: 'flex-end', alignItems: 'center'},
        tabBarStyle: { backgroundColor: Colors.navbarBackground, justifyContent: 'center', paddingBottom: 10},
        tabBarIcon: ({ focused, color }) => {
          let iconSize = focused ? 32 : 28; // Example: bigger size when active, smaller when inactive
    
          // Based on the route, return the respective icon component
          if (route.name === 'BuildScreen') {
            return <BuildIcon size={iconSize} color={color} />;
          } else if (route.name === 'HomeScreen') {
            return <HomeIcon size={iconSize} color={color} />;
          } else if (route.name === 'LeaderboardScreen') {
            return <LeaderboardIcon size={iconSize} color={color} />;
          }
        },
      })}
      tabBarPosition='bottom'
    >
      <Tab.Screen
        name="BuildScreen"
        component={BuildScreen}
        options={{
          title: 'Build',
        }}
      />
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Home',
        }}
      />
      <Tab.Screen
        name="LeaderboardScreen"
        component={LeaderboardScreen}
        options={{
          title: 'Leaderboard',
        }}
      />
    </Tab.Navigator>
  );
}
