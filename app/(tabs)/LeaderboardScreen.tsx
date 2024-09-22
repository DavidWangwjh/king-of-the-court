import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import Container from '@/components/Container';
import { StyledText } from '@/components/StyledText';
import Colors from '@/constants/Colors';

export default function LeaderboardScreen() {
  return (
    <Container style={styles.container} background={Colors.black}>
      <StyledText style={styles.title}>Leaderboard</StyledText>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
