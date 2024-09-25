import { ScrollView, StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import Container from '@/components/Container'
import { StyledText } from '@/components/StyledText'
import Colors from '@/constants/Colors'
import ActionButton from '@/components/ActionButton'
import { router } from 'expo-router'
import { User } from '@/constants/Types'
import { useLocalSearchParams } from 'expo-router';
import Profile from '@/components/Profile'
import { BackIcon } from '@/assets/icons'

const GameResultScreen = () => {

  const { results } = useLocalSearchParams();
  const gameResults = results ? JSON.parse(results as string) : [];

  const goToHome = () => {
    router.replace('/(tabs)/HomeScreen')
  }

  const goBackToGameInProgress = () => {
    router.back();
  }

  type resultItemProps = {
    rank: number;
    player: User;
    score: number;
  }
  const ResultItem = (props: resultItemProps) => {
    const { rank, player, score} = props;
    const color = rank == 1? Colors.gold : rank == 2? Colors.silver : rank == 3? Colors.bronze : Colors.white;
    return (
      <Container direction='row'>
        <StyledText style={styles.rankColumn} color={color} size={24} weight={7}>{rank}</StyledText>
        <Container style={styles.profileColumn}>
          <Profile user={player} imageSize={45} iconSize={16} titleTextSize={16} contentTextSize={14} padding={5}/>
        </Container>     
        <StyledText style={styles.scoreColumn} size={24} weight={7}>{score}</StyledText>
      </Container>
    )
  }

  return (
    <Container style={styles.screenContainer} bgColor={Colors.black} >
      <TouchableOpacity style={styles.backButton} onPress={goBackToGameInProgress}>
        <BackIcon size={26} color={Colors.white}/>
        <StyledText>Back</StyledText>
      </TouchableOpacity>
      {/* <StyledText weight={4} size={26} style={{marginBottom: 10}}>Results</StyledText> */}
      <Container style={{width: '100%', paddingBottom: 10}} direction='row'>
        <StyledText style={styles.rankColumn} weight={4} size={24}>#</StyledText>
        <StyledText style={styles.profileColumn} weight={4} size={24}>Player</StyledText>
        <StyledText style={styles.scoreColumn} weight={4} size={24}>Score</StyledText>
      </Container>
      <Container direction='col' style={{ height: '70%' }}>
        <FlatList 
          showsVerticalScrollIndicator={false} 
          contentContainerStyle={{ gap: 20 }}
          data={gameResults.results}
          renderItem={({ item, index }) => (
            <ResultItem rank={index+1} player={item.player} score={item.score}/>
          )}
        />
      </Container>
      <ActionButton text='Ok' action={goToHome}/>
    </Container>
  )
}

export default GameResultScreen

const styles = StyleSheet.create({
  screenContainer: {
    padding: 10,
    height: '100%',
  },
  rankColumn: {
    width: '15%',
  },
  profileColumn: {
    width: '65%'
  },
  scoreColumn: {
    width: '20%'
  },
  backButton: {
    position: 'absolute',
    left: 10,
    top: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})