import { StyleSheet, TouchableOpacity, Dimensions, ImageBackground } from 'react-native'
import React from 'react'
import { StyledText } from '@/components/StyledText'
import Colors from '@/constants/Colors'
import { Image } from 'expo-image';
import googleIcon from '@/assets/google-icon.png';
import { router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import splash from '@/assets/images/splash-new.png'
import logo from '@/assets/kotc-logo.png'

const { width, height } = Dimensions.get('screen')

const SignInScreen = () => {

  const handleSignIn = () => {
    router.replace('/(auth)/CreateUsernameScreen')
  }

  return (
    <SafeAreaView edges={['top']} style={styles.screenContainer}>
      <Image
        style={{width: width*0.8, height: width*0.8}}
        source={logo}
        transition={1000}
      />
      <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
        <Image
          style={styles.image}
          source={googleIcon}
          transition={1000}
        />
        <StyledText color={Colors.black} weight={4}>Sign in with Google</StyledText>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default SignInScreen

const styles = StyleSheet.create({
  screenContainer: { 
    flex: 1, 
    width: '100%', 
    height: '100%', 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: Colors.black, 
    gap: 50,
    paddingBottom: 50
  },
  signInButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: Colors.white,
    borderRadius: 50
  },
  image: {
    width: 50,
    height: 50
  },
})