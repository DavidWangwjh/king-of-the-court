import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '@/components/Themed';
import Container from '@/components/Container';
import { StyledText } from '@/components/StyledText';
import Colors from '@/constants/Colors';
import { CrownIcon, TrophyIcon } from '@/assets/icons';
import { useState } from 'react';
import { User } from '@/constants/Types';
import Profile from '@/components/Profile';
import { user } from '@/constants/TestData';
import TabScreenContainer from '@/components/TabScreenContainer';

export default function LeaderboardScreen() {
  const [selectedTab, setSelectedTab] = useState('crowns');

  type leaderboardItemProps = {
    rank: number;
    user: User;
  }
  const LeaderboardItem = (props: leaderboardItemProps) => {
    const { rank, user} = props;
    const color = rank == 1? Colors.gold : rank == 2? Colors.silver : rank == 3? Colors.bronze : Colors.white;
    return (
      <Container direction='row'>
        <StyledText style={styles.leaderboardItemRank} color={color} size={24} weight={7}>{rank}</StyledText>
        <Container style={styles.leaderboardItemProfile}>
          <Profile user={user} imageSize={45} iconSize={16} titleTextSize={16} contentTextSize={14} padding={5}/>
        </Container>     
      </Container>
    )
  }

  const leaderboardCrownsResult = [user, user, user, user, user, user, user, user, user, user];
  const leaderboardChampionsResult = [user, user, user, user, user, user, user, user];
  
  return (
    <TabScreenContainer>
      <StyledText style={{width: '100%'}} size={36} weight={5}>Season 1</StyledText>
      <Container style={styles.tabContainer} direction='row'>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 'crowns' ? styles.activeTab : null]}
          onPress={() => setSelectedTab('crowns')}
        >
          <CrownIcon size={20} color={Colors.gold}/>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 'champions' ? styles.activeTab : null]}
          onPress={() => setSelectedTab('champions')}
        >
          <TrophyIcon size={20} color={Colors.gold}/>
        </TouchableOpacity>
      </Container>
      <Container style={{width: '100%', paddingBottom: 10}} direction='row'>
        <StyledText style={{width: '20%'}} weight={4} size={24}>#</StyledText>
        <StyledText style={{width: '80%'}} weight={4} size={24}>Player</StyledText>
      </Container>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1, gap: 20 }}>
        {
          selectedTab == 'crowns'? (
            leaderboardCrownsResult.map((value, key) => (
              <LeaderboardItem key={key} rank={key+1} user={value} />
            ))
          ) : (
            leaderboardChampionsResult.map((value, key) => (
              <LeaderboardItem key={key} rank={key+1} user={value} />
            ))
          )
          
        }
      </ScrollView>
    </TabScreenContainer>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    padding: 20,
    height: '100%'
  },
  tabContainer: {
    marginBottom: 20,
  },
  tab: {
    flex: 1,
    padding: 10,
    backgroundColor: '#795548',
    marginHorizontal: 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#F2690D',
  },
  tabText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  leaderboardItemRank: {
    width: '20%',
  },
  leaderboardItemProfile: {
    width: '80%'
  }
});
