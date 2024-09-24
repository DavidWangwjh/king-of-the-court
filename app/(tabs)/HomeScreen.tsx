import { StyleSheet, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import Profile from '@/components/Profile'
import { getUser } from '@/service/userService'
import { User } from '@/constants/Types';
import Colors from '@/constants/Colors';
import { StyledText } from '@/components/StyledText';
import { Image } from 'expo-image';
import basketball from "@/assets/basketball.png";
import Container from '@/components/Container';
import { LogOutIcon } from '@/assets/icons';
import { router } from "expo-router";

export default function HomeScreen() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const user: User = getUser();
    setCurrentUser(user);
  }, [])

  const goToSignInScreen = () => {
    router.replace("/(auth)/SelectBuildScreen");
  }

  const playGame = () => {
    router.replace("/(game)/GameInProgressScreen");
  }

  return (
    <Container style={{ flex: 1 }} bgColor={Colors.black}>
      <TouchableOpacity style={styles.logOutButton} onPress={() => goToSignInScreen()}>
        <LogOutIcon size={26} color={Colors.white}/>
      </TouchableOpacity>
      <StyledText style={styles.title} weight={7} size={36}>King of The Court</StyledText>
      <Profile user={currentUser} imageSize={60} iconSize={20} titleTextSize={24} contentTextSize={20} padding={10}/>
      <TouchableOpacity style={styles.playButton} onPress={playGame}>
        <Image
          style={styles.image}
          source={basketball}
          transition={1000}
        />
      </TouchableOpacity>
      
    </Container>
  );
}


const styles = StyleSheet.create({
  title: {
    lineHeight: 50,
    width: '100%',
    textAlign: 'center',
    color: Colors.white,
    marginBottom: 20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  playButton: {
    width: 200,
    height: 200,
    marginTop: 50
  },
  image: {
    width: '100%',
    height: '100%'
  },
  logOutButton: {
    position: 'absolute',
    right: 10,
    top: 5
  }
});
