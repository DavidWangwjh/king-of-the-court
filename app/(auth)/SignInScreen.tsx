import { StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { StyledText } from '@/components/StyledText'
import Colors from '@/constants/Colors'
import { Image } from 'expo-image';
import googleIcon from '@/assets/google-icon.png';
import { router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

const { width, height } = Dimensions.get('screen')

const SignInScreen = () => {

  const handleSignIn = () => {
    router.replace('/(auth)/CreateUsernameScreen')
  }

  return (
    <SafeAreaView edges={['top']} style={{ flex: 1, width: '100%', justifyContent: 'flex-start', alignItems: 'center', backgroundColor: Colors.black}}>
      <StyledText size={36} weight={7} color={Colors.primaryOrange} style={styles.title}>King of The Court</StyledText>
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
  title: {
    marginTop: height*0.3,
    marginBottom: height*0.1,
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