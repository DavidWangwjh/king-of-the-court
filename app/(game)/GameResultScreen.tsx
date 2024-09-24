import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Container from '@/components/Container'
import { StyledText } from '@/components/StyledText'
import Colors from '@/constants/Colors'
import ActionButton from '@/components/ActionButton'
import { router } from 'expo-router'

type Props = {}

const GameResultScreen = (props: Props) => {

  const goToHome = () => {
    router.replace('/(tabs)/HomeScreen')
  }

  return (
    <Container style={styles.screenContainer} direction='column' background={Colors.black} >
      <StyledText weight={4} size={26}>Results</StyledText>
      <ActionButton text='Ok' action={goToHome}/>
    </Container>
  )
}

export default GameResultScreen

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1
  },
})