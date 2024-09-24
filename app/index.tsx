import { useEffect } from 'react';
import { Redirect, router } from 'expo-router';
import { useGlobalContext } from '@/context/GlobalProvider';

export default function Index() {
  const { loading, isLoggedIn } = useGlobalContext();
  if (!loading && isLoggedIn) return <Redirect href="/(tabs)/HomeScreen" />;

  return null;  // No need to render anything, just redirect
}