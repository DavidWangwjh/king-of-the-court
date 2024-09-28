import React, { useEffect, useState } from 'react';
import { BuildIcon, HomeFilledIcon, HomeIcon, HomeOutlineIcon, LeaderboardIcon, TrophyFilledIcon, TrophyOutlineIcon } from '@/assets/icons';
import BuildScreen from './BuildScreen';
import HomeScreen from './HomeScreen';
import LeaderboardScreen from './LeaderboardScreen';
import Colors from '@/constants/Colors';
import { Image } from 'expo-image';
import playerFilledIcon from '@/assets/player-filled-icon.png'
import playerOutlineIcon from '@/assets/player-outline-icon.png'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();

export default function TabLayout() {

  return (
    <Tab.Navigator
      initialRouteName="home"
      screenOptions={({route}) => ({
        tabBarActiveTintColor: Colors.activeTab,
        tabBarInactiveTintColor: Colors.activeTab,
        tabBarIndicatorStyle: { display: 'none' },
        tabBarLabelStyle: { fontSize: 12 },
        tabBarIconStyle: { width:36, height: 36, justifyContent: 'flex-end', alignItems: 'center'},
        tabBarStyle: { backgroundColor: Colors.navbarBackground, justifyContent: 'center', paddingBottom: 10},
        tabBarIcon: ({ focused, color }) => {
          let iconSize = 32; // Example: bigger size when active, smaller when inactive
    
          // Based on the route, return the respective icon component
          if (route.name === 'BuildScreen') {
            // return <BuildIcon size={iconSize} color={color} />;
            return focused? 
              <Image
                style={{width: iconSize, height: iconSize}}
                source={playerFilledIcon}
              /> : 
              <Image
                style={{width: iconSize, height: iconSize}}
                source={playerOutlineIcon}
              />
          } else if (route.name === 'HomeScreen') {
            return focused? <HomeFilledIcon size={iconSize} color={color} /> : <HomeOutlineIcon size={iconSize} color={color} /> ;
          } else if (route.name === 'LeaderboardScreen') {
            return focused? <TrophyFilledIcon size={iconSize} color={color} /> : <TrophyOutlineIcon size={iconSize} color={color} /> ;
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
