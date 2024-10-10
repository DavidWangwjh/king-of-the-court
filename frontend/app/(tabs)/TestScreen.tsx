import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import TabScreenBackground from '@/components/TabScreenBackground'
import { SafeAreaView } from 'react-native-safe-area-context'
import Colors from '@/constants/Colors'
import { LogOutIcon } from '@/assets/icons'
import { StyledText } from '@/components/StyledText'
import Profile from '@/components/Profile'
import { getUser } from '@/service/AuthService'
import { User } from '@/constants/Types'
import { router } from 'expo-router'
import TabScreenContainer from '@/components/TabScreenContainer'

type Props = {}

const TestScreen = (props: Props) => {
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
        <TabScreenContainer>
            <TouchableOpacity style={styles.logOutButton} onPress={() => goToSignInScreen()}>
                <LogOutIcon size={26} color={Colors.white}/>
            </TouchableOpacity>
            <StyledText style={styles.title} weight={7} size={36}>King of The Court</StyledText>
            <Profile user={currentUser} imageSize={70} iconSize={20} titleTextSize={24} contentTextSize={20} padding={10}/>
        </TabScreenContainer>
    )
}

export default TestScreen

const styles = StyleSheet.create({
    title: {
      lineHeight: 50,
      width: '100%',
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
    },
  });
  