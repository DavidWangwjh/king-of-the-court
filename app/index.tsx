import { useEffect } from 'react';
import { Redirect, router } from 'expo-router';
import { useGlobalContext } from '@/context/GlobalProvider';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '@/constants/Colors';
import { ActivityIndicator, Dimensions } from 'react-native';
import { Image } from 'expo-image';
import logo from '@/assets/kotc-logo.png'

const { width, height } = Dimensions.get('screen')

export default function Index() {
  const { loading, isLoggedIn } = useGlobalContext();
  if (!loading && isLoggedIn) return <Redirect href="/(tabs)/HomeScreen" />;
  if (!loading && !isLoggedIn) return <Redirect href="/(auth)/SignInScreen" />;

  return (
    <SafeAreaView style={{backgroundColor: Colors.black, height: '100%', justifyContent: 'center', alignItems: 'center'}}>
      <Image
        style={{width: width*0.8, height: width*0.8}}
        source={logo}
        transition={1000}
      />
      <ActivityIndicator size="large" />
    </SafeAreaView>
  );
}