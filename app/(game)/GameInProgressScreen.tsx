import { FlatList, StyleSheet, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Container from '@/components/Container'
import { StyledText } from '@/components/StyledText'
import Colors from '@/constants/Colors'
import ActionButton from '@/components/ActionButton'
import { router } from 'expo-router'
import { gameLog, user } from '@/constants/TestData'
import { CrownIcon } from '@/assets/icons'
import SafeAreaContainer from '@/components/SafeAreaContainer'

const GameInProgressScreen = () => {

  const gameResults = { results: [{player: user, score: 11}, {player: user, score: 10}, {player: user, score: 8}, {player: user, score: 7}, {player: user, score: 4}, {player: user, score: 2}, {player: user, score: 1}]}

  const goToResult = () => {
    router.push({
      pathname: '/(game)/GameResultScreen',
      params: { results: JSON.stringify(gameResults) },
    });
  }

  // State to keep track of the logs displayed on the screen
  const [displayedLogs, setDisplayedLogs] = useState<any[]>([]);
  const [gameFinished, setGameFinished] = useState<boolean>(false);

  useEffect(() => {
    let logIndex = 0
    const intervalId = setInterval(() => {
      if (logIndex < gameLog.length) {
        // Add the next log to the list of displayed logs
        setDisplayedLogs(prevLogs => [...prevLogs, gameLog[logIndex]]);
        logIndex++;
      } else {
        setGameFinished(true);
        clearInterval(intervalId); // Clear interval when all logs are displayed
      }
    }, 800); // Delay between each log being added (1000ms = 1 second)

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const flatListRef = useRef<FlatList>(null);

  const ListItem = ({item, index}: {item: any, index: number}) => {
    return (
      <Container style={{width: '100%', marginBottom: 20, marginTop: index === 0? 20 : 0}} direction='row'>
        <Container style={styles.profilePictureContainer}>
          <View style={{width: 45, height: 45, borderRadius: 25, borderColor: Colors.white, borderWidth: 2, backgroundColor: item.profilePicture }}></View>
        </Container>
        <Container direction='row' style={styles.playInfoContainer} bgColor={index == displayedLogs.length-1? Colors.primaryOrange : Colors.secondaryOrange}>
          <Container style={styles.playInfoLeftContainer} align='flex-start'>
            <StyledText size={16} weight={5} style={{textDecorationLine: 'underline'}}>{item.username}</StyledText>
            <StyledText size={16}>{item.play}</StyledText>
          </Container>
          <Container style={styles.playInfoRightContainer} bgColor={item.final || item.score? Colors.darkOrange : 'transparent'}> 
          {
            item.final? (
              <CrownIcon size={20} color={Colors.gold}/>
            ) : 
            item.score? (
              <StyledText>+1</StyledText>
            ) : (<></>)
          }
          </Container>
        </Container>
      </Container>
    )
  }

  return (
    <SafeAreaContainer bgColor={Colors.black} >
      <StyledText weight={4} size={26} >Game in progress</StyledText>
      <Container direction='col' style={styles.listContainer}>
        <FlatList
          ref={flatListRef}
          data={displayedLogs}
          renderItem={({ item, index }) => (
            <ListItem item={item} index={index}/>
          )}
          showsVerticalScrollIndicator={false}
          onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: true })}
          contentContainerStyle={{ paddingHorizontal: 5 }}
        />
      </Container>
      {
        gameFinished && <ActionButton text='Next' action={goToResult}/>
      }
    </SafeAreaContainer>
  )
}

export default GameInProgressScreen

const styles = StyleSheet.create({
  listContainer: { 
    width: '95%', 
    height: '70%', 
    borderWidth: 2, 
    borderColor: Colors.white, 
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 40
  },
  profilePictureContainer: {
    maxWidth: '20%',
    marginRight: 10,
  },
  playInfoContainer: {
    width: '80%',
    padding: 5,
    borderRadius: 10
  },
  playInfoLeftContainer: {
    width: '80%',
  },
  playInfoRightContainer: {
    width: 40,
    height: 40,
    borderRadius: 10
  }
})