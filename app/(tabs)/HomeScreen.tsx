import { StyleSheet } from 'react-native';
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

export default function HomeScreen() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  useEffect(() => {
    const user: User = getUser();
    setCurrentUser(user);
  }, [])
  return (
    <View style={styles.container}>
      <StyledText style={styles.title} weight={7} size={36}>King of The Court</StyledText>
      <Profile user={currentUser} />
      <Image
        style={styles.image}
        source={basketball}
        transition={1000}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 160,
    backgroundColor: Colors.black
  },
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
  image: {
    width: 200,
    height: 200,
    marginTop: 50
  },
});
