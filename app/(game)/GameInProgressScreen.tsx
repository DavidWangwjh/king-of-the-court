import { FlatList, StyleSheet, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Container from '@/components/Container'
import { StyledText } from '@/components/StyledText'
import Colors from '@/constants/Colors'
import ActionButton from '@/components/ActionButton'
import { router } from 'expo-router'
import { gameLog } from '@/constants/TestData'
import { FlashList } from "@shopify/flash-list";
import { CrownIcon } from '@/assets/icons'

type Props = {}

const GameInProgressScreen = (props: Props) => {

  const goToResult = () => {
    router.replace('/(game)/GameResultScreen')
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
    }, 1000); // Delay between each log being added (1000ms = 1 second)

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const flatListRef = useRef<FlatList>(null);

  const ListItem = ({item, index}: {item: any, index: number}) => {
    return (
      <Container style={styles.listItemContainer} direction='row'>
        <Container style={styles.profilePictureContainer}>
          <View style={{width: 45, height: 45, borderRadius: 25, borderColor: Colors.white, borderWidth: 2, backgroundColor: item.profilePicture }}></View>
        </Container>
        <Container direction='row' style={styles.playInfoContainer} bgColor={index == displayedLogs.length-1? Colors.primaryOrange : Colors.secondaryOrange}>
          <Container style={styles.playInfoLeftContainer} align='flex-start'>
            <StyledText size={16}>{item.username}</StyledText>
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
    <Container style={styles.screenContainer} bgColor={Colors.black} >
      <StyledText weight={4} size={26} style={{marginBottom: 10}}>Game in progress</StyledText>
      <Container direction='col' style={{width: '90%', height: '70%' }}>
        <FlatList
          ref={flatListRef}
          data={displayedLogs}
          renderItem={({ item, index }) => (
            <ListItem item={item} index={index}/>
          )}
          showsVerticalScrollIndicator={false}
          onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: true })}
        />
      </Container>
      {
        gameFinished && <ActionButton text='Next' action={goToResult}/>
      }
    </Container>
  )
}

export default GameInProgressScreen

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1
  },
  listItemContainer: {
    width: '100%',
    marginVertical: 5
  },
  profilePictureContainer: {
    width: '20%',
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