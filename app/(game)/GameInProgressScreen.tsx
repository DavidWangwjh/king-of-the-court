import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Container from '@/components/Container'
import { StyledText } from '@/components/StyledText'
import Colors from '@/constants/Colors'
import ActionButton from '@/components/ActionButton'
import { router } from 'expo-router'

type Props = {}

const GameInProgressScreen = (props: Props) => {

  const goToResult = () => {
    router.replace('/(game)/GameResultScreen')
  }

  return (
    <Container style={styles.screenContainer} direction='column' background={Colors.black} >
      <StyledText weight={4} size={26}>Game in progress</StyledText>
      <ActionButton text='Next' action={goToResult}/>
    </Container>
  )
}

export default GameInProgressScreen

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1
  },
})