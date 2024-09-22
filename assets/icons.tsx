import React from 'react';
import { Entypo, FontAwesome5, FontAwesome6, MaterialIcons } from '@expo/vector-icons';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
export function BuildIcon(props: {
    size: number;
    color: string;
}) {
  return <FontAwesome6 name='person-running' {...props}/>;
}

export function LeaderboardIcon(props: {
    size: number;
    color: string;
}) {
  return <MaterialIcons name='leaderboard' {...props}/>;
}

export function HomeIcon(props: {
    size: number;
    color: string;
}) {
  return <Entypo name='home' {...props}/>;
}

export function CrownIcon(props: {
    size: number;
    color: string;
}) {
  return <FontAwesome6 name='crown' {...props}/>;
}

export function TrophyIcon(props: {
    size: number;
    color: string;
}) {
  return <FontAwesome5 name='trophy' {...props}/>;
}
