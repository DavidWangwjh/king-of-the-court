import React from 'react';
import { Entypo, FontAwesome5, FontAwesome6, MaterialIcons, Ionicons } from '@expo/vector-icons';

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

export function HomeOutlineIcon(props: {
  size: number;
  color: string;
}) {
return <Ionicons name='home-outline' {...props}/>;
}

export function HomeFilledIcon(props: {
  size: number;
  color: string;
}) {
return <Ionicons name='home-sharp' {...props}/>;
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

export function TrophyOutlineIcon(props: {
  size: number;
  color: string;
}) {
return <Ionicons name='trophy-outline' {...props}/>;
}

export function TrophyFilledIcon(props: {
  size: number;
  color: string;
}) {
return <Ionicons name='trophy-sharp' {...props}/>;
}

export function LogOutIcon(props: {
  size: number;
  color: string;
}) {
  return <Entypo name='log-out' {...props}/>;
}

export function BackIcon(props: {
  size: number;
  color: string;
}) {
  return <Ionicons name='chevron-back' {...props}/>;
}

export function MenuIcon(props: {
  size: number;
  color: string;
}) {
  return <MaterialIcons name='menu' {...props}/>;
}

export function AccountIcon(props: {
  size: number;
  color: string;
}) {
  return <MaterialIcons name='manage-accounts' {...props}/>;
}

export function InfoIcon(props: {
  size: number;
  color: string;
}) {
return <FontAwesome5 name='info-circle' {...props}/>;
}
