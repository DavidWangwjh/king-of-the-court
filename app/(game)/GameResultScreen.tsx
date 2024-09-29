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
import SafeAreaContainer from '@/components/SafeAreaContainer'

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
      <Container direction='row' style={{ paddingTop: 5, paddingBottom: 15}}>
        <StyledText style={styles.rankColumn} color={color} size={24} weight={7}>{rank}</StyledText>
        <Container style={styles.profileColumn}>
          <Profile user={player} imageSize={45} iconSize={16} titleTextSize={16} contentTextSize={14} padding={5}/>
        </Container>     
        <StyledText style={styles.scoreColumn} size={24} weight={7}>{score}</StyledText>
      </Container>
    )
  }

  return (
    <SafeAreaContainer bgColor={Colors.black} style={{paddingHorizontal: 10}}>
      <TouchableOpacity style={styles.backButton} onPress={goBackToGameInProgress}>
        <BackIcon size={26} color={Colors.white}/>
        <StyledText>Back</StyledText>
      </TouchableOpacity>
      {/* <Container style={{width: '100%'}} direction='row'>
        <StyledText style={styles.rankColumn} weight={4} size={24}>#</StyledText>
        <StyledText style={styles.profileColumn} weight={4} size={24}>Player</StyledText>
        <StyledText style={styles.scoreColumn} weight={4} size={24}>Score</StyledText>
      </Container> */}
      <Container direction='col' style={styles.listContainer}>
        <Container style={{width: '100%', marginVertical: 10}} direction='row'>
          <StyledText style={styles.rankColumn} weight={4} size={20}>#</StyledText>
          <StyledText style={styles.profileColumn} weight={4} size={20}>Player</StyledText>
          <StyledText style={styles.scoreColumn} weight={4} size={20}>Score</StyledText>
        </Container>
        <FlatList 
          showsVerticalScrollIndicator={false}
          data={gameResults.results}
          renderItem={({ item, index }) => (
            <ResultItem rank={index+1} player={item.player} score={item.score}/>
          )}
        />
      </Container>
      <ActionButton text='Ok' action={goToHome}/>
    </SafeAreaContainer>
  )
}

export default GameResultScreen

const styles = StyleSheet.create({
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
    top: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  listContainer: { 
    width: '95%',
    height: '80%', 
    marginBottom: 20,
    borderWidth: 2, 
    backgroundColor: Colors.black,
    borderColor: Colors.white, 
    borderRadius: 10
  }
})